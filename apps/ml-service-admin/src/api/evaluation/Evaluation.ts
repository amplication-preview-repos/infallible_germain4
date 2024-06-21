import { JsonValue } from "type-fest";

export type Evaluation = {
  accuracy: number | null;
  confusionMatrix: JsonValue;
  createdAt: Date;
  id: string;
  loss: number | null;
  updatedAt: Date;
};
