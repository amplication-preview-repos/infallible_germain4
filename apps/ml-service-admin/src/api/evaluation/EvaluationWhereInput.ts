import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type EvaluationWhereInput = {
  accuracy?: FloatNullableFilter;
  confusionMatrix?: JsonFilter;
  id?: StringFilter;
  loss?: FloatNullableFilter;
};
