import { SortOrder } from "../../util/SortOrder";

export type DatasetOrderByInput = {
  createdAt?: SortOrder;
  dataFile?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
