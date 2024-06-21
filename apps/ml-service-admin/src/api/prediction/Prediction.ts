import { JsonValue } from "type-fest";

export type Prediction = {
  createdAt: Date;
  id: string;
  inputData: JsonValue;
  predictionResult: JsonValue;
  updatedAt: Date;
};
