/**
 * Atlas Kernel
 * Core Question Definition
 */

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
  id: string;

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
  confidence: number;

  /**
   * Related entity IDs
   */
  entities: string[];

  /**
   * Related evidence IDs
   */
  evidence: string[];
}
