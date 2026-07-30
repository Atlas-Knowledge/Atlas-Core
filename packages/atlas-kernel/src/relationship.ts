/**
 * Atlas Kernel
 * Core Relationship Definition
 */

import { UUID } from "./types";

export enum RelationshipType {
  RELATED_TO = "RELATED_TO",
  SUPPORTS = "SUPPORTS",
  CONTRADICTS = "CONTRADICTS",
  CAUSES = "CAUSES",
  DEPENDS_ON = "DEPENDS_ON",
  PART_OF = "PART_OF",
  ANSWERS = "ANSWERS",
  REFERENCES = "REFERENCES"
}

export interface Relationship {
  /**
   * Unique identifier
   */
  id: UUID;

  /**
   * Source object ID
   */
  from: UUID;

  /**
   * Target object ID
   */
  to: UUID;

  /**
   * Relationship type
   */
  type: RelationshipType;

  /**
   * Optional description
   */
  description?: string;
}
