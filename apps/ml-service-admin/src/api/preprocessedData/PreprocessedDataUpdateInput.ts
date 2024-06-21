import { InputJsonValue } from "../../types";

export type PreprocessedDataUpdateInput = {
  description?: string | null;
  name?: string | null;
  processedFile?: InputJsonValue;
};
