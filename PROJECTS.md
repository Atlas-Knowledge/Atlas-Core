---
id: CORE-008

title: Atlas Projects

version: 1.0.0

status: Stable

category: Operations

owner: Atlas Organization

review_cycle: Quarterly

related_documents:
  - CORE-006 (Architecture)
  - CORE-007 (Ecosystem)
  - CORE-009 (Roadmap)

supersedes: null
---

# Atlas Projects

> **The official portfolio of repositories within the Atlas ecosystem.**

---

# Overview

Atlas is organized as a collection of independent repositories.

Each repository has a clearly defined purpose, lifecycle, ownership, and release process.

This document provides the official portfolio view of the Atlas ecosystem.

---

# Repository Portfolio

| Repository | Category | Purpose | Status |
|------------|----------|---------|--------|
| Atlas-Core | Program | Program Root Repository | Active |
| Atlas-Foundation | Governance | Community and Governance | Planned |
| Atlas-Standards | Standards | Canonical Specifications | Active |
| Atlas-RFC | Governance | Proposal Process | Planned |
| Atlas-ADR | Governance | Architecture Decisions | Planned |
| Atlas-Templates | Templates | Official Repository Templates | Active |
| Atlas-Tooling | Tooling | Developer Tools | Planned |
| Atlas-Test-Suites | Conformance | Conformance Test Suites | Planned |
| Atlas-Kernel | Reference Implementation | Execution Kernel | Planned |
| Atlas-Registry | Reference Implementation | Registry Services | Planned |
| Atlas-SDK | SDK | Official SDKs | Planned |
| Atlas-CLI | Tooling | Command Line Interface | Planned |
| Atlas-Console | Platform | Administrative Console | Planned |
| Atlas-Examples | Examples | Reference Projects | Planned |

---

# Repository Details

## Atlas-Core

Purpose

Program governance, ecosystem coordination, architecture baseline, manifests, and release alignment.

Dependencies

None.

Produces

- Governance
- Architecture
- Ecosystem Metadata

---

## Atlas-Foundation

Purpose

Community governance, policies, contribution process, security, and project management.

Depends On

- Atlas-Core

---

## Atlas-Standards

Purpose

Official Atlas specifications.

Depends On

- Atlas-Core

Produces

- Standards
- Models
- Policies

---

## Atlas-RFC

Purpose

Proposal workflow for standards and architectural evolution.

Depends On

- Atlas-Core

---

## Atlas-ADR

Purpose

Permanent architectural decision records.

Depends On

- Atlas-Core

---

## Atlas-Templates

Purpose

Reference repository templates implementing the Atlas Repository Model (ARM).

Depends On

- Atlas-Core
- Atlas-Standards

---

## Atlas-Tooling

Purpose

Developer tooling supporting the Atlas ecosystem.

Depends On

- Atlas-Core
- Atlas-Templates

---

## Atlas-Test-Suites

Purpose

Conformance Test Suites validating implementations.

Depends On

- Atlas-Standards

---

## Atlas-Kernel

Purpose

Reference implementation of the Atlas execution model.

Depends On

- Atlas-Standards
- Atlas-Test-Suites

---

## Atlas-Registry

Purpose

Reference implementation of registry services.

Depends On

- Atlas-Kernel

---

## Atlas-SDK

Purpose

Official SDKs.

Depends On

- Atlas-Kernel

---

## Atlas-CLI

Purpose

Developer command-line interface.

Depends On

- Atlas-SDK

---

## Atlas-Console

Purpose

Administrative and operational console.

Depends On

- Atlas-SDK

---

## Atlas-Examples

Purpose

Reference implementations and sample projects.

Depends On

- Atlas-Kernel
- Atlas-SDK

---

# Repository Lifecycle

Every Atlas repository follows the same lifecycle.

```
Proposed

↓

Planned

↓

Development

↓

Review

↓

Stable

↓

Maintenance

↓

Deprecated

↓

Archived
```

---

# Repository Maturity

| Level | Description |
|--------|-------------|
| Proposed | Concept under discussion |
| Planned | Approved but not implemented |
| Development | Active implementation |
| Review | Awaiting approval |
| Stable | Production-ready |
| Maintenance | Bug fixes and updates |
| Deprecated | Scheduled for retirement |
| Archived | No longer maintained |

---

# Repository Rules

Every official Atlas repository shall:

- Follow the Atlas Repository Model (ARM).
- Maintain independent versioning.
- Maintain independent CI/CD.
- Maintain independent documentation.
- Publish releases independently.
- Pass Conformance Test Suites where applicable.

---

# Future Projects

The Atlas ecosystem is designed to expand without architectural changes.

Potential future repositories include:

- Atlas-Engine
- Atlas-AI
- Atlas-Graph
- Atlas-Search
- Atlas-Ontology
- Atlas-Reasoner
- Atlas-Cloud
- Atlas-Data

Future repositories become official only after completing the RFC, ADR, Standards, and Conformance processes.

---

# Portfolio Governance

Atlas-Core maintains the official registry of repositories.

Every repository included in this document is considered an official component of the Atlas ecosystem.

Repository additions, removals, or major scope changes require approval through the Atlas governance process.

---

# Closing Statement

The Atlas ecosystem is intentionally modular.

Each repository evolves independently while contributing to a unified, standards-driven platform for trustworthy knowledge infrastructure.

---

> **Independent repositories. Shared standards. Unified ecosystem.**
