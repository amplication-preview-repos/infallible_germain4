import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PreprocessedDataServiceBase } from "./base/preprocessedData.service.base";

@Injectable()
export class PreprocessedDataService extends PreprocessedDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
