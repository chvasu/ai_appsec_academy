# AI AppSec Academy - Agent Information

## Overview

**AI AppSec Academy** is a cybersecurity training platform specializing in Application Security (AppSec), DevSecOps, Product Security, Supply Chain Security, and AI/ML Defense. The academy is led by Viswanath Srinivasan Chirravuri, GSE #335, CompTIA SME, and D.Eng. Cybersecurity candidate.

## Site Information

- **URL**: https://aiappsecacademy.com
- **Type**: Educational Platform / Professional Training Services
- **Industry**: Cybersecurity, Application Security, AI/ML Security
- **Owner**: Viswanath Srinivasan Chirravuri

## Key Features

### Training Programs

The academy offers several tiers of training:

1. **Starter Tier** ($300-$500)
   - The Power Hour: Executive consultation & career coaching (60 min)
   - Product Security Strategy: Security architecture & supply chain (2 hours)
   - Technology-specific courses: SAST, SCA, DAST, SBOM, GenAI Security, DevSecOps tools (2 hours each at $500)

2. **Professional Tier** ($1,200-$1,500)
   - The Deep Dive: Agentic AI & LLM Security Workshop (4 hours)
   - DevSecOps & AppSec Workshop: Secure SDLC & pipeline security (4 hours)

3. **Enterprise Tier** (Custom Pricing)
   - AI Security Bootcamp: Corporate AI/ML training (2-5 days)
   - Enterprise AppSec Bootcamp: Corporate DevSecOps & product security (2-5 days)

### Unique Value Proposition

- **One-on-One Training**: Starter and Professional tiers feature direct individual instruction (not group webinars)
- **Full-Time Instructor Presence**: Instructor sits with student for entire course duration
- **Every Question Answered**: Real-time guidance, no unanswered questions
- **Directly Implementable**: Topics designed for immediate application in real-world projects

### Technology Focus Areas

#### Application Security
- SAST (Static Application Security Testing): Semgrep, SonarQube, CodeQL, Bandit
- SCA (Software Composition Analysis): OWASP Dependency-Check, Grype, Trivy, OSV Scanner
- DAST (Dynamic Application Security Testing): OWASP ZAP, Burp Suite, Nikto, Wapiti
- SBOM & Supply Chain Security: Syft, Grype, Cosign, SLSA provenance

#### AI/ML Security
- GenAI Security Tools: Garak, PyRIT, LLM Fuzzer, Rebuff
- Applied AI: RAG architecture, LLM fine-tuning (LoRA/QLoRA), MLSecOps
- Agentic AI Security: Prompt injection defense, tool-use exploits, model manipulation

#### DevSecOps
- Container Security: Trivy, Docker Bench, Hadolint
- IaC Scanning: Checkov, TFSec, Kics
- CI/CD Pipeline Security: GitHub Actions, Jenkins, GitLab hardening
- Policy-as-Code: OPA (Open Policy Agent)

#### OWASP Tools
- OWASP ZAP, Dependency-Check, ASVS, SAMM, Threat Dragon

## Instructor Profile

**Viswanath Srinivasan Chirravuri**
- **Certifications**: GSE #335, CISSP, PMP, 35+ certifications (23 GIAC, CompTIA, AWS, Azure)
- **Education**:
  - D.Eng. Cybersecurity Analytics at George Washington University (In Progress, expected August 2026)
  - M.S. Information Security Engineering - SANS Technology Institute
- **Roles**:
  - SANS Teaching Assistant & Webinar Presenter
  - CompTIA Subject Matter Expert (SME) for Security+ and Cloud+
  - RSA Conference Speaker (2024, 2026)
- **Career**: Credit Agricole CIB, J.P. Morgan, CA Technologies
- **LinkedIn**: https://www.linkedin.com/in/vchirrav/

## Open-Source Contributions

1. **Secure-ML Framework** (Thales Group)
   - Role: Project Leader & Key Contributor
   - GitHub: https://github.com/thalesgroup/secure-ml
   - Focus: ML lifecycle security, threat taxonomy, 40+ curated security tools

2. **OWASP Secure Coding Practices (Markdown)**
   - Role: Creator & Maintainer
   - GitHub: https://github.com/vchirrav/owasp-secure-coding-md
   - Focus: Machine-readable secure coding standards for AI agents (Claude Code, GitHub Copilot)
   - Features: 22 modular rule files, Claude Code Skills, MCP server

3. **ML Research: Local LLM Fine-Tuning**
   - Role: Creator & Researcher
   - GitHub: https://github.com/vchirrav/ml_research
   - Focus: Local LLM fine-tuning with HuggingFace, PEFT/LoRA, Unsloth, GGUF conversion

## Content & Resources

### Blog Articles
The academy publishes articles on:
- Agentic AI security and protocols (MCP, A2A, ACP, AGNTCY)
- AI/ML security fundamentals and threat taxonomy
- DevSecOps automation with Claude CLI Skills
- Threat modeling with Custom GPTs
- Secure coding practices for AI-generated code

Recent articles available at: https://aiappsecacademy.com/blog

### Training Philosophy
- Industry trainings are typically group-based where questions compete for attention
- AI AppSec Academy focuses on individual training for successful knowledge transfer
- Instructor adapts to student's knowledge gaps and background
- Every concept, lab error, or technical roadblock is addressed immediately

## Navigation Structure

### Main Pages
- `/` - Homepage with course catalog
- `/why-us` - Unique value proposition and comparison with industry standards
- `/courses` - Full course catalog
- `/about` - Instructor profile and credentials
- `/blog` - Articles and insights on AI/ML security and AppSec
- `/open-source` - Open-source contributions and projects
- `/terms` - Terms & conditions with professional services disclaimer
- `/success` - Post-enrollment success page

### Contact
- Contact information available via homepage footer
- LinkedIn: https://www.linkedin.com/in/vchirrav/

## Payment & Enrollment

- **Payment Processor**: Stripe
- **Terms Acceptance Required**: All enrollments require checkbox acceptance of terms & conditions
- **Enrollment Flow**: Course selection → Terms acceptance → Stripe checkout → Email receipt
- **No Webhooks**: Stateless payment system, Stripe sends receipt directly to customer

## Technical Stack

- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom "cyber" theme
- **Hosting**: Vercel (auto-deploy from master branch)
- **Analytics**: Vercel Web Analytics
- **Payment**: Stripe Checkout Sessions

## Design System

- **Theme**: Dark mode "cyber" aesthetic with emerald accent colors
- **Typography**: JetBrains Mono (monospace throughout)
- **Color Palette**:
  - Background: Pure black (#000000)
  - Surface: Near-black (#0a0a0a)
  - Accent: Emerald green (#10b981)
  - Text: Slate gray (#e2e8f0)
- **Tier Colors**:
  - Starter: Emerald green
  - Professional: Sky blue
  - Enterprise: Amber/gold

## Key Constraints for AI Agents

1. **D.Eng. Status**: Always refer to D.Eng. as "in progress" or "expected August 2026" - NEVER state it as completed
2. **Training Disclaimer**: Professional services acknowledgment included in terms (not generic "educational purposes only")
3. **One-on-One Focus**: Emphasis on individual training for Starter and Professional tiers
4. **Open-Source Tools**: Technology courses focus on freely available, open-source security tools
5. **No Kubernetes/RASP**: Training does not cover Kubernetes orchestration or RASP (Runtime Application Self-Protection)

## Use Cases for AI Agents

AI agents interacting with this site should be able to:
- Answer questions about course offerings, pricing, and duration
- Explain the unique one-on-one training approach
- Describe instructor credentials and expertise areas
- Recommend appropriate courses based on user's role, experience, and goals
- Provide information about open-source security tools covered in courses
- Explain differences between AI AppSec Academy and traditional group training programs
- Direct users to relevant blog articles on specific security topics
- Clarify enrollment process and terms acceptance requirements

## Updates & Maintenance

- Site content updated regularly with new blog articles
- Course catalog may expand with additional technology-specific offerings
- Open-source portfolio reflects ongoing contributions to security frameworks
- Instructor credentials updated as new certifications and speaking engagements are completed

---

**Last Updated**: February 2026
**Contact**: Via LinkedIn at https://www.linkedin.com/in/vchirrav/
**Site**: https://aiappsecacademy.com
