import { SortOrder } from "../../util/SortOrder";

export type PredictionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inputData?: SortOrder;
  predictionResult?: SortOrder;
  updatedAt?: SortOrder;
};
