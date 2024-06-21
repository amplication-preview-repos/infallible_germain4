import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PredictionWhereInput = {
  id?: StringFilter;
  inputData?: JsonFilter;
  predictionResult?: JsonFilter;
};
