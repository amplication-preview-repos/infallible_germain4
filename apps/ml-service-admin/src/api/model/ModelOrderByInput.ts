import { SortOrder } from "../../util/SortOrder";

export type ModelOrderByInput = {
  algorithm?: SortOrder;
  createdAt?: SortOrder;
  hyperparameters?: SortOrder;
  id?: SortOrder;
  modelFile?: SortOrder;
  modelName?: SortOrder;
  updatedAt?: SortOrder;
};
