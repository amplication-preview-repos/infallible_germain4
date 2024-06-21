import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PreprocessedDataService } from "./preprocessedData.service";
import { PreprocessedDataControllerBase } from "./base/preprocessedData.controller.base";

@swagger.ApiTags("preprocessedData")
@common.Controller("preprocessedData")
export class PreprocessedDataController extends PreprocessedDataControllerBase {
  constructor(protected readonly service: PreprocessedDataService) {
    super(service);
  }
}
