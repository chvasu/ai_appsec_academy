# Skill: secure-coding-generate

Generate secure code following OWASP Secure Coding rules from the OWASP repository. Automatically selects relevant rule files based on the code domain.

## Usage

Invoke this skill with a description of what you want to generate:
```
/secure-coding-generate Node.js authentication middleware
/secure-coding-generate React component for file upload
/secure-coding-generate Python API endpoint for user data
```

## Workflow

### Phase 1: Domain Detection
Analyze the input to determine applicable security domains (authentication, API, database, etc.) and identify which rule files from the OWASP repository are relevant.

**Domain-to-Ruleset Mapping:**
- **Authentication/Login**: authentication-password-mgmt.md, session-management.md, cryptographic-practices.md
- **API Endpoints**: api-security.md, input-validation.md, output-encoding.md, error-handling-logging.md
- **Database**: database-security.md, data-protection.md, input-validation.md
- **File Operations**: file-management.md, input-validation.md
- **Containers/Docker**: dockerfile-security.md, secrets-management.md
- **Cloud/K8s**: cloud-native-k8s.md, iac-security.md
- **CI/CD**: cicd-pipeline-security.md, software-supply-chain.md
- **Frontend/Client**: client-side-security.md, output-encoding.md, communication-security.md
- **Secrets**: secrets-management.md, cryptographic-practices.md
- **General**: general-coding-practices.md, error-handling-logging.md

### Phase 2: Fetch Rules
Fetch the relevant rule markdown files from:
```
https://raw.githubusercontent.com/vchirrav/owasp-secure-coding-md/main/rules/{rule-file}.md
```

Use WebFetch to retrieve each applicable rule file and extract security requirements.

### Phase 3: Generate Code
Produce secure code that:
1. Adheres to every applicable OWASP rule
2. Includes inline comments with rule IDs (e.g., `// OWASP-AUTH-001: Password hashing`)
3. Implements best practices for the detected domain
4. Provides a summary table showing:
   - Rule ID
   - Rule Description
   - How it was implemented

## Output Format

```typescript
// Generated code with inline security comments
// OWASP-{DOMAIN}-{ID}: Brief rule description
```

Followed by:

```markdown
## Security Rules Applied

| Rule ID | Rule Description | Implementation |
|---------|------------------|----------------|
| OWASP-AUTH-001 | Password hashing | Used bcrypt with cost factor 12 |
| OWASP-INPUT-003 | Input validation | Joi schema validation on line 15 |
```

## Allowed Tools
- WebFetch (to fetch rules from GitHub)
- Read, Grep, Glob (to understand project context)

## Notes
- Always fetch the latest rules from the OWASP repository
- If rules cannot be fetched, inform the user and use best practices
- Prioritize critical security controls over convenience
