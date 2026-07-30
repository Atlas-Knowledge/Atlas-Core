/**
 * Atlas Kernel
 * Core Entity Definition
 */

import {
  UUID,
  ConfidenceScore,
  EntityType,
  SourceReference
} from "./types";

export interface Entity {
  /**
   * Unique identifier
   */
  id: UUID;

  /**
   * Human readable name
   */
  name: string;

  /**
   * Entity classification
   */
  type: EntityType;

  /**
   * Description
   */
  description: string;

  /**
   * Confidence score (0-100)
   */
  confidence: ConfidenceScore;

  /**
   * Source references
   */
  sources: SourceReference[];
}
