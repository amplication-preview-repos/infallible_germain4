import { SortOrder } from "../../util/SortOrder";

export type EvaluationOrderByInput = {
  accuracy?: SortOrder;
  confusionMatrix?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  loss?: SortOrder;
  updatedAt?: SortOrder;
};
