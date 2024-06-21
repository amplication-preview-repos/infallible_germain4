import { PreprocessedData as TPreprocessedData } from "../api/preprocessedData/PreprocessedData";

export const PREPROCESSEDDATA_TITLE_FIELD = "name";

export const PreprocessedDataTitle = (record: TPreprocessedData): string => {
  return record.name?.toString() || String(record.id);
};
