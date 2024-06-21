import { InputJsonValue } from "../../types";

export type PreprocessedDataCreateInput = {
  description?: string | null;
  name?: string | null;
  processedFile?: InputJsonValue;
};
