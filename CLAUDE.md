# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AI AppSec Academy** is a cybersecurity consulting platform built as a Next.js 14.2 application with TypeScript, React, Tailwind CSS, and Stripe integration. The site offers hourly consulting services in AppSec, DevSecOps, Product Security, Supply Chain Security, and AI/ML Defense led by Viswanath Chirravuri (GSE #335, CompTIA SME, D.Eng. Cybersecurity candidate).

- **Production URL**: https://aiappsecacademy.com
- **Hosting**: Vercel (auto-deploys from `master` branch)
- **Design System**: Dark mode "cyber" theme with emerald accent colors and monospace typography (JetBrains Mono)

## Commands

### Development
```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build (MUST run before deploying)
npm start         # Start production server
npm run lint      # Run ESLint
```

### Deployment Workflow
```bash
# 1. Build and verify locally
npm run build

# 2. Commit changes
git add <files>
git commit -m "Your message"

# 3. Push to GitHub (triggers auto-deploy)
git push origin master

# 4. Manual deploy to production (optional)
npx vercel --prod
```

**IMPORTANT**: Always run `npm run build` before committing to catch TypeScript and build errors.

## Architecture & Key Patterns

### App Router Structure (Next.js 14)
- **App Router**: All pages use `app/` directory structure with file-based routing
- **Server Components by default**: Pages are React Server Components unless marked with `"use client"`
- **Client Components**: Interactive components (`CourseCard.tsx`, `TermsCheckbox.tsx`) use `"use client"` directive

### Data Layer
- **File-based database**: JSON files in `data/` directory serve as the content store
  - `data/courses.json`: Consulting services catalog with hourly pricing, descriptions, and highlights
  - `data/articles.json`: Blog articles with date, title, summary, and URL (internal or external)
- **Data access**: `lib/db.ts` provides typed functions (`getCourses()`, `getCourseById()`)
- **No traditional database**: Site is fully static with JSON data sources
- **Course Interface**: Each service includes:
  - `hourlyRate`: Rate per hour (0 for "Contact Us" services)
  - `minHours` / `maxHours`: Valid hour range for booking
  - `category`: Service category (`"ai"`, `"appsec"`, or `"general"`)
  - `tier`: Visual styling tier (`"starter"`, `"professional"`, or `"enterprise"`)

### Services Page Structure
- **Main listing**: `/services` displays all consulting services from `data/courses.json`
- **Category-based filtering**: Services are grouped into two sections:
  - **AI/ML Security Consulting**: Services with `category: "ai"` (Agentic AI, LLM Security, GenAI Tools)
  - **Application Security Consulting**: Services with `category: "appsec"` or `"general"` (AppSec, Product Security, Supply Chain)
- **Hourly booking model**: Users select hours (within min-max range) before checkout
- **Custom quote handling**: Services with `hourlyRate: 0` display "Contact Us" instead of booking button

### Blog System
- **Blog index**: `/blog` displays articles from `data/articles.json`, sorted by date (most recent first)
- **Article types**:
  - **Internal articles**: Individual Next.js pages in `app/blog/<slug>/page.tsx` with full content
  - **External articles**: LinkedIn posts with direct external links (marked with external link icon)
- **Article format**: Each article in JSON has `title`, `date` (YYYY-MM-DD), `url`, `summary`, and `category`
- **Category grouping**: Articles are grouped by category on the blog page with section headers:
  - "Securing AI/ML": AI/ML security, agentic AI, and threat modeling
  - "Application Security": AppSec tools, secure coding, and traditional security topics
- **Link handling**: External URLs (`http`/`https`) render as `<a>` tags with `target="_blank"`; internal URLs render as Next.js `<Link>` components

### Payment Flow (Stripe)
1. User selects hours (min-max range) on a `CourseCard` and clicks "Book Now"
2. Client-side checkout handler calls `/api/checkout` with `courseId` and `hours`
3. API route validates service, calculates total (`hourlyRate * hours`), creates Stripe Checkout Session with inline `price_data`
4. User redirects to Stripe-hosted checkout
5. On success, redirects to `/success?session_id={CHECKOUT_SESSION_ID}&course={courseId}`
6. **No webhooks**: Stripe sends receipt email; no server-side order persistence

**Key Files**:
- `app/api/checkout/route.ts`: API handler for Stripe session creation with hourly pricing
- `lib/stripe.ts`: Singleton Stripe client with lazy initialization
- `components/CourseCard.tsx`: Service display with hour selector and checkout button
- `app/services/page.tsx`: Main services listing page with category-based filtering (AI/ML Security vs Application Security)

### Design System & Styling

**Cyber Theme Colors** (defined in `tailwind.config.ts`):
```typescript
cyber: {
  bg: "#000000"           // Background
  surface: "#0a0a0a"      // Cards/surfaces
  border: "#1a1a1a"       // Borders
  accent: "#10b981"       // Primary accent (emerald-500)
  "accent-bright": "#34d399"
  text: "#e2e8f0"         // Primary text
  muted: "#94a3b8"        // Secondary text
}
```

**Key CSS Classes**:
- `.gradient-text`: Emerald-to-sky gradient text
- `.scan-line`: CRT monitor scan-line effect on `<body>`
- `.cyber-glow`: Emerald glow shadow for interactive elements
- Font: `font-mono` (JetBrains Mono) throughout

**Tier-based color system** for courses:
- `starter`: Emerald green
- `professional`: Sky blue
- `enterprise`: Amber/gold

### Component Patterns

**Shared Components** (`components/`):
- `Navbar.tsx`: Global navigation with logo and links
- `Footer.tsx`: Copyright and social links
- `CourseCard.tsx`: Displays service with tier-based styling, hour selector (min-max range), real-time price calculation, and terms acceptance checkbox before booking
- `TermsCheckbox.tsx`: Reusable checkbox linking to `/terms` page

**Icon Usage**: All icons from `lucide-react` library (e.g., `Shield`, `Terminal`, `Brain`)

### Analytics & Monitoring
- **Vercel Web Analytics**: Integrated via `@vercel/analytics` package
- **Implementation**: `<Analytics />` component imported in `app/layout.tsx` root layout
- **No configuration required**: Analytics auto-enabled in production on Vercel

### Environment Variables

**Required** (`.env.local`):
```bash
STRIPE_SECRET_KEY=sk_live_...              # Stripe LIVE secret key (production)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...  # Stripe LIVE publishable key (production)
NEXT_PUBLIC_BASE_URL=https://aiappsecacademy.com
```

See `.env.example` for template.

### Type Safety
- Strict TypeScript enabled (`tsconfig.json`)
- All components and API routes are fully typed
- Course interface defined in `lib/db.ts` with hourly pricing fields:
  ```typescript
  interface Course {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    hourlyRate: number;           // Rate per hour (0 for custom quote)
    hourlyRateDisplay: string;    // Formatted display (e.g., "$200")
    minHours: number;             // Minimum bookable hours
    maxHours: number;             // Maximum bookable hours
    format: string;               // Session format (e.g., "1-on-1 Video Call")
    highlights: string[];         // Service highlights/features
    icon: string;                 // Icon identifier (terminal, code, shield)
    tier: "starter" | "professional" | "enterprise";
    category: "general" | "ai" | "appsec";
  }
  ```

## Important Constraints

### Content & Legal
1. **D.Eng. Status**: Always refer to "D.Eng. Cybersecurity candidate" or "expected August 2026" — **NEVER** state it as completed
2. **Professional Services Disclaimer**: The `/terms` page includes a professional services acknowledgment (not generic "educational purposes only")
3. **Terms Acceptance**: All booking actions require checkbox acceptance via `TermsCheckbox` component before checkout button is enabled

### Git Commit Messages
- **NEVER include AI model names** in commit messages (no "Claude", "Opus", etc.)
- **NEVER use Co-Authored-By lines** with AI model attribution
- Use descriptive, conventional commit style

### Code Style
- Use `async/await` over promises
- Prefer server components; only use `"use client"` when necessary
- Use `@/` import alias for root-level imports (e.g., `@/lib/db`)
- Keep components small and focused

## Common Tasks

### Adding a New Blog Article
1. **External article** (LinkedIn post):
   - Add entry to `data/articles.json` with full `https://` URL
   - Include required fields: `title`, `date`, `url`, `summary`, `category`
   - Set `category` to either "Securing AI/ML" or "Application Security"
   - Will render with external link icon and open in new tab
2. **Internal article** (full page on site):
   - Add entry to `data/articles.json` with relative URL (e.g., `/blog/my-article`)
   - Include required fields: `title`, `date`, `url`, `summary`, `category`
   - Create `app/blog/my-article/page.tsx` with full content
   - Follow existing article page structure (hero section, metadata, content sections)
3. Articles auto-sort by date (newest first) within each category section on `/blog` page

### Adding a New Service
1. Edit `data/courses.json` with new service object
2. Set required fields:
   - `hourlyRate`: Rate per hour (use `0` for "Contact Us" services that require custom quotes)
   - `minHours` / `maxHours`: Valid booking range (e.g., 1-4)
   - `category`: Choose `"ai"`, `"appsec"`, or `"general"` for filtering on `/services` page
   - `tier`: Choose `"starter"`, `"professional"`, or `"enterprise"` for visual styling
3. Test locally with `npm run dev`
4. Verify build with `npm run build`

### Updating Stripe Configuration
- Modify `lib/stripe.ts` for API version or retry settings
- Update `app/api/checkout/route.ts` for checkout session parameters
- Test with Stripe test mode keys before deploying

### Adding a New Page
1. Create `app/<page-name>/page.tsx`
2. Use Server Component by default
3. Add navigation link in `components/Navbar.tsx` if needed
4. Follow existing layout structure (hero → content → CTA pattern)

### Updating Open-Source Portfolio
- Edit `app/open-source/page.tsx` → `projects` array
- Each project includes: `icon`, `name`, `repo`, `url`, `stars`, `forks`, `role`, `accent` (color), `summary`, and `highlights` array
- Accent colors: `emerald`, `sky`, or `amber` (defined in `accentColors` object)
- Projects display with GitHub stats, role badge, and expandable highlights

### Modifying Theme Colors
- Edit `tailwind.config.ts` → `theme.extend.colors.cyber`
- Use `cyber-*` utility classes in components
- Maintain consistency with existing emerald accent

## Security: OWASP Secure Coding Integration

This project includes automated security auditing powered by OWASP Secure Coding rules. See `.claude/README.md` for complete documentation.

### Security Skills

Two powerful skills are available for secure development:

#### 1. `/secure-coding-generate` - Generate Secure Code
Generate code that automatically follows OWASP security rules:
```bash
/secure-coding-generate Node.js authentication middleware
/secure-coding-generate React file upload component
```

**Features:**
- Detects security domains (auth, API, database, etc.)
- Fetches relevant OWASP rules from https://github.com/vchirrav/owasp-secure-coding-md
- Generates code with inline security comments (e.g., `// OWASP-AUTH-001`)
- Provides summary table of applied security controls

#### 2. `/secure-coding-audit` - Audit Code for Vulnerabilities
Audit existing code for security issues:
```bash
# Audit specific file
/secure-coding-audit app/api/auth/route.ts

# Audit git changes before merge
/secure-coding-audit --diff origin/main..HEAD
```

**Features:**
- Automatically detects applicable security domains
- Checks against 22+ OWASP rule sets
- Generates detailed findings report with severity levels
- Provides line-specific remediation guidance

### Pre-Merge Security Hook

A Claude Code hook automatically prompts for security audits when merging to `main` or `master`:

**Triggered by:** `git merge` commands targeting production branches

**What it does:**
- Detects merge operations to main/master
- Prompts you to run `/secure-coding-audit --diff`
- Provides guidance on reviewing security findings
- Helps prevent vulnerabilities from reaching production

**Configuration:** `.claude/settings.local.json` (see `.claude/settings.template.json` for reference)

### Security Domains Covered

The skills automatically apply rules based on file patterns:

- **Authentication** (`**/auth/**`, `**/*login*`): Password hashing, session management, MFA
- **API Routes** (`**/api/**`, `**/routes/**`): Input validation, rate limiting, CORS, access control
- **Database** (`**/db/**`, `**/*prisma*`): SQL injection prevention, parameterized queries
- **File Operations** (`**/*upload*`, `**/*file*`): Path traversal prevention, file validation
- **Containers** (`Dockerfile`, `docker-compose.yml`): Secure base images, secrets management
- **Infrastructure** (`*.tf`, `**/k8s/**`): Least privilege, encryption at rest/transit
- **CI/CD** (`.github/workflows/*`): Secrets in logs, artifact validation, supply chain security
- **Frontend** (`*.tsx`, `*.jsx`): XSS protection, CSP headers, output encoding

### Usage Recommendations

1. **During Development:** Use `/secure-coding-generate` when starting new features
2. **Before Committing:** Audit changed files with `/secure-coding-audit`
3. **Before Merging:** Always run `/secure-coding-audit --diff origin/main..HEAD`
4. **Fix Critical Issues:** Prioritize FAIL/Critical findings before deployment
5. **Understand Context:** Review findings to understand vulnerabilities, don't just apply fixes blindly

### Files & Configuration

- `.claude/README.md` - Complete security integration documentation
- `.claude/skills/secure-coding-generate/SKILL.md` - Generate skill definition
- `.claude/skills/secure-coding-audit/SKILL.md` - Audit skill definition
- `.claude/hooks/pre-merge-audit.md` - Pre-merge hook documentation
- `.claude/settings.template.json` - Configuration template
- `.claude/settings.local.json` - Active configuration (gitignored)

**OWASP Rules Repository:** https://github.com/vchirrav/owasp-secure-coding-md

## Testing & Validation

Before deploying:
1. Run `npm run build` — must complete without errors
2. Check TypeScript errors: `npx tsc --noEmit`
3. Test Stripe checkout flow with test mode keys
4. Verify responsive design on mobile/tablet
5. Ensure all external links open in new tab (`target="_blank" rel="noopener noreferrer"`)
