import { JsonValue } from "type-fest";

export type PreprocessedData = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  processedFile: JsonValue;
  updatedAt: Date;
};
