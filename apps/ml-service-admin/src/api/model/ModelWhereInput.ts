import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ModelWhereInput = {
  algorithm?: StringNullableFilter;
  hyperparameters?: JsonFilter;
  id?: StringFilter;
  modelFile?: JsonFilter;
  modelName?: StringNullableFilter;
};
