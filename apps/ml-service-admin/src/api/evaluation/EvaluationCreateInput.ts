import { InputJsonValue } from "../../types";

export type EvaluationCreateInput = {
  accuracy?: number | null;
  confusionMatrix?: InputJsonValue;
  loss?: number | null;
};
