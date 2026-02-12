# Pre-Merge Security Audit Hook

This hook automatically audits code changes when merging to the main/master branch using OWASP Secure Coding rules.

## Trigger Conditions

This hook activates when:
1. A git merge operation is detected (before completion)
2. The target branch is `main` or `master`
3. There are code changes in the merge

## Workflow

1. **Detect Merge**: Monitor for `git merge` commands targeting main/master
2. **Identify Changes**: Get list of changed files from the branch being merged
3. **Categorize Files**: Group files by security domain (auth, api, database, etc.)
4. **Run Audit**: Invoke `/secure-coding-audit` skill for each changed file
5. **Aggregate Results**: Compile findings across all files
6. **Report**: Present summary with critical/high/medium/low findings
7. **Recommendation**: Suggest whether to proceed or fix issues first

## File Categories and Applicable Rules

### Authentication Files
- **Pattern**: `**/auth/**/*`, `**/login/**/*`, `**/*auth*`, `**/*password*`
- **Rules**: authentication-password-mgmt.md, session-management.md, cryptographic-practices.md

### API Files
- **Pattern**: `**/api/**/*`, `**/routes/**/*`, `**/controllers/**/*`
- **Rules**: api-security.md, input-validation.md, access-control.md

### Database Files
- **Pattern**: `**/db/**/*`, `**/models/**/*`, `**/*prisma*`, `**/*sql*`
- **Rules**: database-security.md, data-protection.md, input-validation.md

### Frontend Files
- **Pattern**: `**/*.tsx`, `**/*.jsx`, `**/components/**/*`
- **Rules**: client-side-security.md, output-encoding.md

### Container/Infrastructure Files
- **Pattern**: `Dockerfile`, `docker-compose.yml`, `*.tf`, `**/k8s/**/*`
- **Rules**: dockerfile-security.md, iac-security.md, cloud-native-k8s.md

### CI/CD Files
- **Pattern**: `.github/workflows/*`, `.gitlab-ci.yml`, `Jenkinsfile`
- **Rules**: cicd-pipeline-security.md, software-supply-chain.md

## Hook Configuration

```json
{
  "hooks": {
    "pre-merge": {
      "enabled": true,
      "branches": ["main", "master"],
      "command": "claude-skill-secure-coding-audit",
      "args": "--diff origin/main..HEAD",
      "blocking": false,
      "description": "Audit code changes for security vulnerabilities before merge"
    }
  }
}
```

## Output Format

```
🔒 OWASP Secure Coding Audit - Pre-Merge Check
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Audit Summary:
  Files Changed: 5
  Security Domains: Authentication, API, Database
  Rules Evaluated: 47

🔍 Findings:
  🔴 Critical: 2
  🟡 High: 3
  🟠 Medium: 5
  🟢 Low: 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️  CRITICAL ISSUES FOUND

📄 app/api/auth/route.ts
  ❌ OWASP-AUTH-001: Weak password hashing algorithm (line 45)
     Fix: Replace MD5 with bcrypt/argon2

📄 app/api/users/route.ts
  ❌ OWASP-INPUT-003: SQL injection vulnerability (line 89)
     Fix: Use parameterized queries or ORM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ RECOMMENDATION:
  🛑 FIX CRITICAL ISSUES BEFORE MERGING

  Run: /secure-coding-audit app/api/auth/route.ts
  For detailed remediation steps.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Usage

### Manual Trigger
```bash
# Before merging a branch
git checkout main
git fetch origin feature-branch

# Trigger audit manually
/secure-coding-audit --diff origin/main..origin/feature-branch
```

### Automatic Trigger
The hook automatically runs when you execute:
```bash
git merge feature-branch
```

## Configuration Options

Edit `.claude/settings.local.json` to customize:

- **blocking**: Set to `true` to prevent merge on critical findings
- **severity-threshold**: Minimum severity to report (critical, high, medium, low)
- **excluded-paths**: Paths to skip auditing (tests, docs, etc.)
- **notification**: How to notify (console, file, both)

## Exemptions

To bypass audit for a specific merge (emergency only):
```bash
git merge feature-branch --no-verify
```

⚠️ **Use exemptions sparingly and document the reason!**

## Best Practices

1. **Run audits early**: Audit during development, not just at merge time
2. **Fix incrementally**: Don't accumulate security debt
3. **Review reports**: Understand findings, don't just fix blindly
4. **Update rules**: Keep OWASP rules repository up to date
5. **Team training**: Ensure team understands secure coding principles

## Troubleshooting

### Hook not triggering?
- Check `.claude/settings.local.json` has hooks configured
- Ensure you're merging to main/master branch
- Verify git is installed and accessible

### False positives?
- Review the specific rule in the OWASP repository
- Context matters - some patterns are safe in specific scenarios
- Provide feedback to improve rule accuracy

### Missing rules for your stack?
- Check if rules are available at https://github.com/vchirrav/owasp-secure-coding-md
- Consider contributing new rules to the repository
- Use general-coding-practices.md as fallback

## Resources

- **OWASP Rules Repository**: https://github.com/vchirrav/owasp-secure-coding-md
- **Skill Documentation**: `.claude/skills/secure-coding-audit/SKILL.md`
- **Claude Code Hooks**: https://docs.anthropic.com/claude-code/hooks
