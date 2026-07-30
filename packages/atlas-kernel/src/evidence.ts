/**
 * Atlas Kernel
 * Core Evidence Definition
 */

import {
  UUID,
  ConfidenceScore,
  SourceReference
} from "./types";

export enum EvidenceType {
  SCIENTIFIC_PAPER = "SCIENTIFIC_PAPER",
  BOOK = "BOOK",
  EXPERIMENT = "EXPERIMENT",
  DATASET = "DATASET",
  HISTORICAL_RECORD = "HISTORICAL_RECORD",
  OTHER = "OTHER"
}

export interface Evidence {
  /**
   * Unique identifier
   */
  id: UUID;

  /**
   * Evidence title
   */
  title: string;

  /**
   * Evidence category
   */
  type: EvidenceType;

  /**
   * Confidence score (0–100)
   */
  confidence: ConfidenceScore;

  /**
   * Source information
   */
  source: SourceReference;
}
