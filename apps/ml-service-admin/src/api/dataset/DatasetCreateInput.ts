import { InputJsonValue } from "../../types";

export type DatasetCreateInput = {
  dataFile?: InputJsonValue;
  description?: string | null;
  name?: string | null;
};
