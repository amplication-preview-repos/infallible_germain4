import { JsonValue } from "type-fest";

export type Model = {
  algorithm: string | null;
  createdAt: Date;
  hyperparameters: JsonValue;
  id: string;
  modelFile: JsonValue;
  modelName: string | null;
  updatedAt: Date;
};
