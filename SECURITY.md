# Security Policy

> Security is a foundational principle of the Atlas ecosystem.

---

# Purpose

This document describes how security vulnerabilities should be reported,
evaluated, disclosed, and resolved across the Atlas ecosystem.

Atlas follows a **Security by Design** philosophy.

Security is considered during architecture, implementation, review, testing,
and release—not after deployment.

---

# Supported Versions

| Version | Supported |
|----------|-----------|
| 1.x | ✅ Yes |
| 0.x | ❌ No |

Only the latest stable major version receives security updates.

---

# Reporting a Vulnerability

If you discover a security vulnerability, **please do not open a public issue.**

Instead, report the vulnerability privately to the Atlas maintainers.

Include as much information as possible:

- Description
- Impact
- Affected components
- Reproduction steps
- Proof of concept (if available)
- Suggested mitigation (optional)

---

# Response Targets

Atlas aims to respond according to the following targets.

| Stage | Target |
|--------|--------|
| Initial acknowledgment | Within 72 hours |
| Initial assessment | Within 7 days |
| Status update | Every 14 days |
| Security advisory | As required |

Response times are goals rather than guarantees.

---

# Responsible Disclosure

Atlas supports responsible disclosure.

Please allow maintainers reasonable time to investigate and resolve reported
security issues before public disclosure.

Public disclosure before remediation may place users at unnecessary risk.

---

# Scope

This policy applies to all official Atlas repositories, including:

- Atlas-Core
- Atlas-Foundation
- Atlas-Standards
- Atlas-RFC
- Atlas-ADR
- Atlas-Templates
- Atlas-Tooling
- Atlas-Test-Suites
- Atlas-Kernel
- Atlas-Registry
- Atlas-SDK
- Atlas-CLI
- Atlas-Console
- Atlas-Examples

Repositories outside the official Atlas ecosystem are not covered by this policy.

---

# Security Principles

Atlas follows these principles:

- Security by Design
- Least Privilege
- Defense in Depth
- Responsible Disclosure
- Transparency
- Continuous Improvement
- Secure Defaults

Security considerations should be addressed throughout the entire software lifecycle.

---

# Security Review

Major architectural changes require security review before release.

Security reviews may include:

- Architecture review
- Dependency review
- Configuration review
- Documentation review
- Release review

---

# Third-Party Dependencies

Atlas depends on third-party software.

Maintainers should:

- Keep dependencies up to date.
- Review security advisories.
- Remove unsupported dependencies.
- Minimize unnecessary packages.

---

# Security Advisories

Confirmed vulnerabilities may result in:

- Security patches
- Security advisories
- Mitigation guidance
- Release notes

Critical issues may receive out-of-band releases.

---

# Contact

Security contact information will be published by the Atlas Organization.

Until then, please use the repository maintainers for responsible disclosure.

---

# Policy Updates

This policy may evolve as the Atlas ecosystem grows.

Changes follow the standard Atlas governance process.

---

# Closing Statement

Security is not a feature.

It is a continuous responsibility shared by maintainers, contributors, and the community.

---

> **Build securely. Review continuously. Improve responsibly.**
