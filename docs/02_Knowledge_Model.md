# Atlas Knowledge Model v1.0

## Purpose

The Atlas Knowledge Model defines how all knowledge is represented inside the system.

Everything stored in Atlas must belong to one of the following core objects.

---

# 1. Entity

An Entity is any identifiable thing.

Examples:

- Human
- Animal
- Planet
- Disease
- Material
- Pyramid
- Galaxy
- Organization

Every Entity has:

- ID
- Name
- Type
- Description
- Sources
- Confidence Score

---

# 2. Question

A Question represents something humanity has not fully answered.

Examples:

- What is Dark Matter?
- How did life begin?
- Can aging be reversed?

Every Question has:

- ID
- Title
- Description
- Status
- Related Entities
- Evidence
- Confidence
- Priority

---

# 3. Evidence

Evidence supports or challenges a claim.

Evidence may include:

- Scientific papers
- Experiments
- Books
- Historical records
- Verified datasets

Every Evidence has:

- ID
- Source
- Type
- Reliability
- Date

---

# 4. Relationship

Relationships connect objects together.

Examples:

Entity → Entity

Question → Entity

Evidence → Question

Evidence → Entity

Relationship Types include:

- Causes
- Depends On
- Related To
- Supports
- Contradicts
- Part Of

---

## Core Philosophy

Knowledge is a connected graph, not isolated documents.

Version: 1.0
Status: Draft
