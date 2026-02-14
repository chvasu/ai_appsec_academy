"use client";

import { ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Article {
  title: string;
  date: string;
  url: string;
  summary: string;
  category: string;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ArticleRow({ article }: { article: Article }) {
  const [expanded, setExpanded] = useState(false);
  const isExternal = article.url.startsWith("http");

  return (
    <div className="border-b border-cyber-border last:border-b-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 py-4 px-4 text-left hover:bg-cyber-surface/50 transition-colors group"
      >
        <ChevronDown
          className={`w-4 h-4 text-cyber-accent shrink-0 transition-transform duration-200 ${
            expanded ? "rotate-0" : "-rotate-90"
          }`}
        />
        <span className="text-xs text-cyber-muted font-mono shrink-0 w-[90px]">
          {formatDate(article.date)}
        </span>
        <span className="text-cyber-text font-medium group-hover:text-cyber-accent transition flex-1 min-w-0 truncate">
          {article.title}
        </span>
        {isExternal && (
          <ExternalLink className="w-3.5 h-3.5 text-cyber-muted shrink-0" />
        )}
      </button>

      {expanded && (
        <div className="px-4 pb-4 pl-12">
          <p className="text-sm text-cyber-muted leading-relaxed mb-3">
            {article.summary}
          </p>
          {isExternal ? (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-cyber-accent hover:text-cyber-accent-bright transition"
            >
              Read on LinkedIn
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <Link
              href={article.url}
              className="inline-flex items-center gap-1.5 text-sm text-cyber-accent hover:text-cyber-accent-bright transition"
            >
              Read article &rarr;
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function BlogList({ articles }: { articles: Article[] }) {
  return (
    <div className="bg-cyber-surface border border-cyber-border rounded-lg overflow-hidden">
      {/* Header row */}
      <div className="flex items-center gap-4 py-3 px-4 border-b border-cyber-border bg-cyber-bg text-xs text-cyber-muted font-mono uppercase tracking-wider">
        <span className="w-4 shrink-0" />
        <span className="w-[90px] shrink-0">Date</span>
        <span className="flex-1">Title</span>
      </div>

      {articles.map((article) => (
        <ArticleRow key={article.url} article={article} />
      ))}
    </div>
  );
}
