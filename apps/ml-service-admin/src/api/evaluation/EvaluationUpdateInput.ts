import { InputJsonValue } from "../../types";

export type EvaluationUpdateInput = {
  accuracy?: number | null;
  confusionMatrix?: InputJsonValue;
  loss?: number | null;
};
