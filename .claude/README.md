# Claude Code Configuration for AI AppSec Academy

This directory contains Claude Code configuration including secure coding hooks and skills powered by OWASP Secure Coding rules.

## 🔒 Security Features

### Hooks

#### Pre-Merge Security Audit Hook
Automatically prompts for a security audit when merging code into `main` or `master` branches.

**Triggers on:**
- `git merge` commands targeting main/master

**What it does:**
- Detects merge operations to production branches
- Prompts you to run security audit before completing merge
- Provides guidance on using the audit skills

**Configuration:**
Located in `settings.local.json` under `hooks.PreToolUse`

### Skills

Two powerful security skills are available via the OWASP Secure Coding repository:

#### 1. `/secure-coding-generate` - Generate Secure Code

Generate secure code that automatically follows OWASP security rules.

**Usage:**
```bash
/secure-coding-generate Node.js authentication middleware
/secure-coding-generate React file upload component
/secure-coding-generate Python API endpoint for user data
```

**What it does:**
1. Analyzes your request to identify security domains
2. Fetches relevant OWASP rules from: https://github.com/vchirrav/owasp-secure-coding-md
3. Generates code with inline security comments
4. Provides summary table of applied security rules

**Domains Covered:**
- Authentication & Session Management
- API Security
- Input Validation & Output Encoding
- Database Security
- File Management
- Cryptography & Secrets
- Container & Infrastructure Security
- CI/CD Pipeline Security
- And more...

**Example Output:**
```typescript
// OWASP-AUTH-001: Use strong password hashing
import bcrypt from 'bcrypt';

async function hashPassword(password: string): Promise<string> {
  // Use bcrypt with cost factor 12 for OWASP compliance
  return await bcrypt.hash(password, 12);
}
```

#### 2. `/secure-coding-audit` - Audit Code for Vulnerabilities

Audit existing code for security vulnerabilities using OWASP rules.

**Usage:**
```bash
# Audit specific file
/secure-coding-audit app/api/auth/route.ts

# Audit git changes
/secure-coding-audit --diff origin/main..HEAD

# Audit before merge
/secure-coding-audit --diff origin/main..feature-branch
```

**What it does:**
1. Identifies security domains based on file type/path
2. Fetches applicable OWASP rules
3. Reviews code against each rule
4. Generates detailed findings report with remediation steps

**Example Report:**
```markdown
# Security Audit Report

**File:** app/api/auth/route.ts
**Rules Evaluated:** 23
**Findings:**
  🔴 Critical: 2
  🟡 Warning: 3
  🟢 Passed: 18

| Rule ID | Status | Finding | Line | Remediation |
|---------|--------|---------|------|-------------|
| OWASP-AUTH-001 | ❌ FAIL | Weak password hashing | 45 | Use bcrypt/argon2 |
| OWASP-INPUT-003 | ❌ FAIL | No input validation | 89 | Add Zod schema validation |
```

## 📁 Directory Structure

```
.claude/
├── README.md                    # This file
├── settings.local.json          # Project configuration with hooks
├── hooks/
│   └── pre-merge-audit.md      # Documentation for pre-merge hook
└── skills/
    ├── secure-coding-generate/
    │   └── SKILL.md            # Generate secure code skill
    └── secure-coding-audit/
        └── SKILL.md            # Audit code skill
```

## 🚀 Quick Start

### Before Merging to Main

1. **Check what will be merged:**
   ```bash
   git diff origin/main..HEAD
   ```

2. **Run security audit:**
   ```bash
   /secure-coding-audit --diff origin/main..HEAD
   ```

3. **Fix critical issues** identified in the report

4. **Proceed with merge:**
   ```bash
   git merge feature-branch
   ```

### During Development

When writing new code that handles sensitive operations:

```bash
# Generate secure authentication code
/secure-coding-generate Express.js JWT authentication middleware

# Audit your implementation
/secure-coding-audit src/middleware/auth.ts
```

## 🎯 Security Domains

The skills automatically detect and apply rules for these domains:

| Domain | Detected From | Example Rules |
|--------|---------------|---------------|
| **Authentication** | Files with: login, auth, password, jwt, oauth | Password hashing, session management, MFA |
| **API Security** | Paths: api/, routes/, controllers/ | Input validation, rate limiting, CORS |
| **Database** | Files with: db, sql, prisma, sequelize | SQL injection, parameterized queries |
| **File Operations** | Files with: upload, download, file | Path traversal, file validation |
| **Containers** | Dockerfile, docker-compose.yml | Base images, secrets, USER directive |
| **Infrastructure** | *.tf, k8s/*.yaml | Least privilege, encryption, network policies |
| **CI/CD** | .github/workflows/, Jenkinsfile | Secrets in logs, artifact validation |
| **Frontend** | *.tsx, *.jsx, *.vue | XSS protection, CSP, output encoding |

## 📚 OWASP Rules Repository

All security rules are sourced from:
**https://github.com/vchirrav/owasp-secure-coding-md**

This repository contains 22 comprehensive rule sets covering:
- Access Control
- API Security
- Authentication & Password Management
- CI/CD Pipeline Security
- Client-Side Security
- Cloud-Native & Kubernetes
- Communication Security
- Cryptographic Practices
- Data Protection
- Database Security
- Dockerfile Security
- Error Handling & Logging
- File Management
- General Coding Practices
- Infrastructure-as-Code Security
- Input Validation
- Memory Management
- Output Encoding
- Secrets Management
- Session Management
- Software Supply Chain
- System Configuration

## ⚙️ Configuration

### Enable/Disable Hook

Edit `settings.local.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash(git merge*)",
        "hooks": [
          {
            "type": "prompt",
            "prompt": "..."
          }
        ]
      }
    ]
  }
}
```

To disable, remove or comment out the hook entry.

### Customize Hook Behavior

You can modify the hook prompt to:
- Change the severity threshold
- Add automatic blocking for critical findings
- Customize the notification message
- Add additional checks

### Add More Hooks

You can add hooks for other events:
- `PostToolUse` - After tool execution
- `UserPromptSubmit` - When user submits prompt
- `SessionStart` - At session start
- `TaskCompleted` - When task completes

## 🔧 Troubleshooting

### Hook not triggering?

1. Check `settings.local.json` is valid JSON
2. Ensure you're merging to main/master branch
3. Try `/context` to verify hooks are loaded

### Skills not found?

Skills are defined in:
- `.claude/skills/secure-coding-generate/SKILL.md`
- `.claude/skills/secure-coding-audit/SKILL.md`

Make sure these files exist and are properly formatted.

### Rules not fetching?

Ensure `WebFetch(domain:raw.githubusercontent.com)` is in the permissions allow list in `settings.local.json`.

### False positives in audit?

1. Review the specific rule in the OWASP repository
2. Context matters - some patterns are safe in specific scenarios
3. Consider adding comments explaining why the pattern is safe
4. Provide feedback to improve rules

## 📖 Best Practices

1. **Audit Early and Often**
   - Audit during development, not just before merge
   - Use `/secure-coding-generate` when starting new features

2. **Understand Findings**
   - Don't blindly apply fixes
   - Understand the vulnerability and remediation
   - Consider the context of your application

3. **Fix Critical Issues First**
   - Prioritize: Critical > High > Medium > Low
   - Critical issues should block deployment

4. **Document Exceptions**
   - If bypassing audit, document why
   - Add security comments explaining safe patterns

5. **Keep Rules Updated**
   - OWASP rules evolve
   - Periodically check for updates

6. **Team Training**
   - Ensure team understands secure coding principles
   - Review audit findings in code reviews
   - Share learnings from security findings

## 🤝 Contributing

To improve the OWASP rules or add new ones:
1. Visit: https://github.com/vchirrav/owasp-secure-coding-md
2. Submit issues or pull requests
3. Share feedback on rule accuracy

## 📞 Support

For questions or issues:
- Review documentation in `.claude/skills/*/SKILL.md`
- Check hook documentation in `.claude/hooks/pre-merge-audit.md`
- Consult OWASP repository for rule details

---

**Powered by:** OWASP Secure Coding Rules
**Repository:** https://github.com/vchirrav/owasp-secure-coding-md
**Author:** Viswanath Chirravuri (GSE #335)
