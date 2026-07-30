import { Entity } from "./entity";

const earth: Entity = {
  id: "entity-earth",
  name: "Earth",
  type: "Planet",
  description: "The third planet from the Sun.",
  confidence: 100,
  sources: [
    {
      id: "src-001",
      title: "NASA"
    }
  ]
};

console.log(earth);
