import { Module } from "@nestjs/common";
import { PreprocessedDataModuleBase } from "./base/preprocessedData.module.base";
import { PreprocessedDataService } from "./preprocessedData.service";
import { PreprocessedDataController } from "./preprocessedData.controller";
import { PreprocessedDataResolver } from "./preprocessedData.resolver";

@Module({
  imports: [PreprocessedDataModuleBase],
  controllers: [PreprocessedDataController],
  providers: [PreprocessedDataService, PreprocessedDataResolver],
  exports: [PreprocessedDataService],
})
export class PreprocessedDataModule {}
