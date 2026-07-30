/**
 * Atlas Kernel
 * Knowledge Registry
 */

import { Entity } from "./entity";
import { Question } from "./question";
import { Evidence } from "./evidence";

export class KnowledgeRegistry {
  private entities = new Map<string, Entity>();

  private questions = new Map<string, Question>();

  private evidence = new Map<string, Evidence>();

  addEntity(entity: Entity): void {
    this.entities.set(entity.id, entity);
  }

  addQuestion(question: Question): void {
    this.questions.set(question.id, question);
  }

  addEvidence(evidence: Evidence): void {
    this.evidence.set(evidence.id, evidence);
  }

  getEntity(id: string): Entity | undefined {
    return this.entities.get(id);
  }

  getQuestion(id: string): Question | undefined {
    return this.questions.get(id);
  }

  getEvidence(id: string): Evidence | undefined {
    return this.evidence.get(id);
  }

  entityCount(): number {
    return this.entities.size;
  }

  questionCount(): number {
    return this.questions.size;
  }

  evidenceCount(): number {
    return this.evidence.size;
  }
}
