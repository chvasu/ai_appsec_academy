# Skill: secure-coding-audit

Audit code for security vulnerabilities using OWASP Secure Coding rules from the OWASP repository. Automatically selects relevant rule files based on the code domain.

## Usage

Invoke this skill with a file path to audit:
```
/secure-coding-audit src/auth/login.ts
/secure-coding-audit app/api/users/route.ts
/secure-coding-audit Dockerfile
```

For git diff auditing (in hooks):
```
/secure-coding-audit --diff origin/main..HEAD
```

## Workflow

### Phase 1: Domain Identification
Analyze the file path and content to determine which security domains apply:

**Domain Detection Rules:**
- **Authentication**: Files containing: login, auth, password, jwt, oauth, session
- **API Routes**: Files in: api/, routes/, controllers/, endpoints/
- **Database**: Files containing: db, database, sql, query, orm, prisma, sequelize
- **File Operations**: Files containing: upload, download, file, attachment, storage
- **Containers**: Files named: Dockerfile, docker-compose.yml, .dockerignore
- **Infrastructure**: Files ending in: .tf, .yaml (k8s), .yml (k8s)
- **CI/CD**: Files in: .github/workflows/, .gitlab-ci.yml, Jenkinsfile
- **Frontend**: Files ending in: .jsx, .tsx, .vue (in client/components)
- **Secrets**: Files containing: env, secret, credential, key, token

**Applicable Rule Files by Domain:**
- **Authentication**: authentication-password-mgmt.md, session-management.md, cryptographic-practices.md, secrets-management.md
- **API**: api-security.md, input-validation.md, output-encoding.md, error-handling-logging.md, access-control.md
- **Database**: database-security.md, data-protection.md, input-validation.md
- **File Ops**: file-management.md, input-validation.md
- **Containers**: dockerfile-security.md, secrets-management.md
- **IaC**: iac-security.md, cloud-native-k8s.md, secrets-management.md
- **CI/CD**: cicd-pipeline-security.md, software-supply-chain.md, secrets-management.md
- **Frontend**: client-side-security.md, output-encoding.md, communication-security.md
- **Always Include**: general-coding-practices.md

### Phase 2: Fetch and Parse Rules
Fetch applicable rule files from:
```
https://raw.githubusercontent.com/vchirrav/owasp-secure-coding-md/main/rules/{rule-file}.md
```

Extract checklist items and security requirements from each rule file.

### Phase 3: Code Review
Read the target file (or git diff) and analyze against each applicable rule.

### Phase 4: Generate Report
Output findings in structured format:

## Output Format

```markdown
# Security Audit Report

**File:** {file-path}
**Date:** {timestamp}
**Applicable Domains:** {domains}
**Rules Evaluated:** {count}

## Findings Summary
- 🔴 Critical: {count}
- 🟡 Warning: {count}
- 🟢 Passed: {count}

## Detailed Findings

| Rule ID | Status | Finding | Line(s) | Remediation |
|---------|--------|---------|---------|-------------|
| OWASP-AUTH-001 | ❌ FAIL | Passwords stored in plaintext | 45-47 | Use bcrypt/argon2 for password hashing |
| OWASP-INPUT-003 | ❌ FAIL | No input validation on user input | 89 | Add Joi/Zod schema validation |
| OWASP-API-005 | ✅ PASS | Rate limiting implemented | 23 | N/A |

## Recommendations
1. **Critical**: Fix password storage immediately (lines 45-47)
2. **High**: Implement input validation across all endpoints
3. **Medium**: Add request logging for audit trail

## Code Snippets

### Issue: Password Storage (Lines 45-47)
```typescript
// ❌ VULNERABLE CODE
const user = { password: req.body.password }
db.save(user)

// ✅ RECOMMENDED FIX
import bcrypt from 'bcrypt'
const hashedPassword = await bcrypt.hash(req.body.password, 12)
const user = { password: hashedPassword }
db.save(user)
```
```

## Git Diff Mode

When invoked with `--diff`, audit only the changed lines:
1. Run `git diff origin/main..HEAD` to get changes
2. Focus audit on added/modified lines ('+' prefix)
3. Report findings specific to new/changed code
4. Include context of surrounding code if needed

## Allowed Tools
- Read, Grep, Glob (to analyze code)
- Bash (git diff commands)
- WebFetch (to fetch rules from GitHub)

## Hook Integration

This skill is designed to be called by the pre-merge hook:
- Automatically triggers when merging to main branch
- Audits all changed files in the merge
- Blocks merge if critical vulnerabilities found (when configured)

## Notes
- Always fetch the latest rules from the OWASP repository
- Focus on high-confidence findings to reduce false positives
- Provide actionable remediation steps with code examples
- When in doubt, mark as WARNING instead of FAIL
