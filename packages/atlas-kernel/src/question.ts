/**
 * Atlas Kernel
 * Core Question Definition
 */

import {
  UUID,
  ConfidenceScore
} from "./types";

export enum QuestionStatus {
  OPEN = "OPEN",
  UNDER_RESEARCH = "UNDER_RESEARCH",
  PARTIALLY_ANSWERED = "PARTIALLY_ANSWERED",
  ANSWERED = "ANSWERED"
}

export interface Question {
  /**
   * Unique identifier
   */
  id: UUID;

  /**
   * Question title
   */
  title: string;

  /**
   * Full description
   */
  description: string;

  /**
   * Current status
   */
  status: QuestionStatus;

  /**
   * Priority (1–10)
   */
  priority: number;

  /**
   * Confidence score (0–100)
   */
  confidence: ConfidenceScore;

  /**
   * Related Entity IDs
   */
  entities: UUID[];

  /**
   * Related Evidence IDs
   */
  evidence: UUID[];
}
