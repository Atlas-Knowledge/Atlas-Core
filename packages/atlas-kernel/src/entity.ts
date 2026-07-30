/**
 * Atlas Kernel
 * Core Entity Definition
 */

export interface Entity {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Human readable name
   */
  name: string;

  /**
   * Entity classification
   * Example:
   * Human
   * Planet
   * Disease
   */
  type: string;

  /**
   * Description
   */
  description: string;

  /**
   * Confidence score (0-100)
   */
  confidence: number;

  /**
   * List of evidence identifiers
   */
  sources: string[];
}
