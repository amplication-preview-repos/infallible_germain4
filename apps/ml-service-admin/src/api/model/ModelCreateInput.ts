import { InputJsonValue } from "../../types";

export type ModelCreateInput = {
  algorithm?: string | null;
  hyperparameters?: InputJsonValue;
  modelFile?: InputJsonValue;
  modelName?: string | null;
};
