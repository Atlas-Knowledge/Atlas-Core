/**
 * Atlas Kernel
 * Shared Types
 */

export type UUID = string;

export type ConfidenceScore = number;

export type EntityType = string;

export interface SourceReference {
  id: UUID;
  title: string;
  url?: string;
}
