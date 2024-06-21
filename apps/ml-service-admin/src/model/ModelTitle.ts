import { Model as TModel } from "../api/model/Model";

export const MODEL_TITLE_FIELD = "modelName";

export const ModelTitle = (record: TModel): string => {
  return record.modelName?.toString() || String(record.id);
};
