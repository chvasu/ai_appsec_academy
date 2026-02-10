import { ExternalLink, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";
import path from "path";
import { promises as fs } from "fs";

interface Article {
  title: string;
  date: string;
  url: string;
  summary: string;
  category: string;
}

async function getArticles(): Promise<Article[]> {
  const filePath = path.join(process.cwd(), "data", "articles.json");
  const raw = await fs.readFile(filePath, "utf-8");
  const articles: Article[] = JSON.parse(raw);
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ArticleCard({ article }: { article: Article }) {
  const isExternal = article.url.startsWith("http");
  const cardContent = (
    <div className="flex items-start gap-4">
      <div className="p-2.5 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-accent group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] transition shrink-0 mt-1">
        <BookOpen className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-xs text-cyber-muted mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <time dateTime={article.date}>
            {formatDate(article.date)}
          </time>
        </div>
        <h2 className="text-lg font-bold text-cyber-text group-hover:text-cyber-accent transition mb-2 flex items-start gap-2">
          <span>{article.title}</span>
          {isExternal && (
            <ExternalLink className="w-4 h-4 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition" />
          )}
        </h2>
        <p className="text-sm text-cyber-muted leading-relaxed">
          {article.summary}
        </p>
      </div>
    </div>
  );

  return isExternal ? (
    <a
      key={article.url}
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group bg-cyber-surface border border-cyber-border rounded-lg p-6 hover:border-cyber-accent/40 transition-all duration-300"
    >
      {cardContent}
    </a>
  ) : (
    <Link
      key={article.url}
      href={article.url}
      className="block group bg-cyber-surface border border-cyber-border rounded-lg p-6 hover:border-cyber-accent/40 transition-all duration-300"
    >
      {cardContent}
    </Link>
  );
}

export default async function BlogPage() {
  const articles = await getArticles();

  const categories = ["Securing AI/ML", "Application Security"];
  const grouped = categories.map((cat) => ({
    name: cat,
    articles: articles.filter((a) => a.category === cat),
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <p className="text-sm text-cyber-accent font-mono mb-2">
          &gt; cat ./blog/index.md
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Articles &amp; Insights
        </h1>
        <p className="text-cyber-muted max-w-xl mx-auto">
          Thoughts on AI/ML security, agentic AI, and the evolving threat
          landscape. Published on LinkedIn.
        </p>
      </div>

      {grouped.map((group) => (
        <div key={group.name} className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-accent mb-6 border-b border-cyber-border pb-3">
            {group.name}
          </h2>
          <div className="space-y-6">
            {group.articles.map((article) => (
              <ArticleCard key={article.url} article={article} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
