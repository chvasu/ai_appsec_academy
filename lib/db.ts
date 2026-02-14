import path from "path";
import { promises as fs } from "fs";

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  hourlyRate: number;
  hourlyRateDisplay: string;
  minHours: number;
  maxHours: number;
  highlights: string[];
  icon: string;
  tier: "starter" | "professional" | "enterprise";
  category: "general" | "ai" | "appsec";
  subcategory?: string;
  reference?: { label: string; url: string };
}

const dataDir = path.join(process.cwd(), "data");

export async function getCourses(): Promise<Course[]> {
  const filePath = path.join(dataDir, "courses.json");
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as Course[];
}

export async function getCourseById(id: string): Promise<Course | undefined> {
  const courses = await getCourses();
  return courses.find((c) => c.id === id);
}
