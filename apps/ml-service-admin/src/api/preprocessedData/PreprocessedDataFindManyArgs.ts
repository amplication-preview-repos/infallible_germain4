import { PreprocessedDataWhereInput } from "./PreprocessedDataWhereInput";
import { PreprocessedDataOrderByInput } from "./PreprocessedDataOrderByInput";

export type PreprocessedDataFindManyArgs = {
  where?: PreprocessedDataWhereInput;
  orderBy?: Array<PreprocessedDataOrderByInput>;
  skip?: number;
  take?: number;
};
