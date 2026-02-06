/**
 * =====================================================================
 * MOCK USER MODULE — NOT FOR PRODUCTION
 * =====================================================================
 *
 * This module provides a scaffolded user interface for development.
 *
 * Vercel serverless functions run on ephemeral, read-only filesystems.
 * You CANNOT persist user data to local JSON files in production.
 *
 * For production, replace this module with one of:
 *   - Vercel KV (Redis)       → https://vercel.com/docs/storage/vercel-kv
 *   - Vercel Postgres          → https://vercel.com/docs/storage/vercel-postgres
 *   - Supabase                 → https://supabase.com
 *   - PlanetScale / Neon       → managed MySQL / Postgres
 *
 * The Course data in data/courses.json is fine as read-only content
 * because it is bundled at build time. User writes are the problem.
 * =====================================================================
 */

export interface User {
  id: string;
  email: string;
  name: string;
  purchasedCourseIds: string[];
  stripeCustomerId?: string;
  createdAt: string;
}

// In-memory store for development only — resets on every cold start
const mockUsers: Map<string, User> = new Map();

export async function getUserByEmail(
  email: string
): Promise<User | undefined> {
  const users = Array.from(mockUsers.values());
  return users.find((user) => user.email === email);
}

export async function getUserById(id: string): Promise<User | undefined> {
  return mockUsers.get(id);
}

export async function createUser(
  email: string,
  name: string
): Promise<User> {
  const user: User = {
    id: crypto.randomUUID(),
    email,
    name,
    purchasedCourseIds: [],
    createdAt: new Date().toISOString(),
  };
  mockUsers.set(user.id, user);
  return user;
}

export async function addPurchase(
  userId: string,
  courseId: string
): Promise<void> {
  const user = mockUsers.get(userId);
  if (user && !user.purchasedCourseIds.includes(courseId)) {
    user.purchasedCourseIds.push(courseId);
  }
}
