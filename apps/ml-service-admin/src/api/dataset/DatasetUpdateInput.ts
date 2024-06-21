import { InputJsonValue } from "../../types";

export type DatasetUpdateInput = {
  dataFile?: InputJsonValue;
  description?: string | null;
  name?: string | null;
};
