import { JsonValue } from "type-fest";

export type Dataset = {
  createdAt: Date;
  dataFile: JsonValue;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
