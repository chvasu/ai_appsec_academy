import path from "path";
import { promises as fs } from "fs";
import BlogList from "./BlogList";

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

export default async function BlogPage() {
  const articles = await getArticles();

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
          Thoughts on AI/ML security, application security, and the evolving
          threat landscape.
        </p>
      </div>

      <BlogList articles={articles} />
    </div>
  );
}
