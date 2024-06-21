/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PreprocessedData } from "./PreprocessedData";
import { PreprocessedDataCountArgs } from "./PreprocessedDataCountArgs";
import { PreprocessedDataFindManyArgs } from "./PreprocessedDataFindManyArgs";
import { PreprocessedDataFindUniqueArgs } from "./PreprocessedDataFindUniqueArgs";
import { CreatePreprocessedDataArgs } from "./CreatePreprocessedDataArgs";
import { UpdatePreprocessedDataArgs } from "./UpdatePreprocessedDataArgs";
import { DeletePreprocessedDataArgs } from "./DeletePreprocessedDataArgs";
import { PreprocessedDataService } from "../preprocessedData.service";
@graphql.Resolver(() => PreprocessedData)
export class PreprocessedDataResolverBase {
  constructor(protected readonly service: PreprocessedDataService) {}

  async _preprocessedDataItemsMeta(
    @graphql.Args() args: PreprocessedDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PreprocessedData])
  async preprocessedDataItems(
    @graphql.Args() args: PreprocessedDataFindManyArgs
  ): Promise<PreprocessedData[]> {
    return this.service.preprocessedDataItems(args);
  }

  @graphql.Query(() => PreprocessedData, { nullable: true })
  async preprocessedData(
    @graphql.Args() args: PreprocessedDataFindUniqueArgs
  ): Promise<PreprocessedData | null> {
    const result = await this.service.preprocessedData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PreprocessedData)
  async createPreprocessedData(
    @graphql.Args() args: CreatePreprocessedDataArgs
  ): Promise<PreprocessedData> {
    return await this.service.createPreprocessedData({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PreprocessedData)
  async updatePreprocessedData(
    @graphql.Args() args: UpdatePreprocessedDataArgs
  ): Promise<PreprocessedData | null> {
    try {
      return await this.service.updatePreprocessedData({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PreprocessedData)
  async deletePreprocessedData(
    @graphql.Args() args: DeletePreprocessedDataArgs
  ): Promise<PreprocessedData | null> {
    try {
      return await this.service.deletePreprocessedData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
