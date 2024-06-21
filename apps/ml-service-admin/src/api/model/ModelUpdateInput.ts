import { InputJsonValue } from "../../types";

export type ModelUpdateInput = {
  algorithm?: string | null;
  hyperparameters?: InputJsonValue;
  modelFile?: InputJsonValue;
  modelName?: string | null;
};
