import * as graphql from "@nestjs/graphql";
import { PreprocessedDataResolverBase } from "./base/preprocessedData.resolver.base";
import { PreprocessedData } from "./base/PreprocessedData";
import { PreprocessedDataService } from "./preprocessedData.service";

@graphql.Resolver(() => PreprocessedData)
export class PreprocessedDataResolver extends PreprocessedDataResolverBase {
  constructor(protected readonly service: PreprocessedDataService) {
    super(service);
  }
}
