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
import { Evaluation } from "./Evaluation";
import { EvaluationCountArgs } from "./EvaluationCountArgs";
import { EvaluationFindManyArgs } from "./EvaluationFindManyArgs";
import { EvaluationFindUniqueArgs } from "./EvaluationFindUniqueArgs";
import { CreateEvaluationArgs } from "./CreateEvaluationArgs";
import { UpdateEvaluationArgs } from "./UpdateEvaluationArgs";
import { DeleteEvaluationArgs } from "./DeleteEvaluationArgs";
import { EvaluationService } from "../evaluation.service";
@graphql.Resolver(() => Evaluation)
export class EvaluationResolverBase {
  constructor(protected readonly service: EvaluationService) {}

  async _evaluationsMeta(
    @graphql.Args() args: EvaluationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Evaluation])
  async evaluations(
    @graphql.Args() args: EvaluationFindManyArgs
  ): Promise<Evaluation[]> {
    return this.service.evaluations(args);
  }

  @graphql.Query(() => Evaluation, { nullable: true })
  async evaluation(
    @graphql.Args() args: EvaluationFindUniqueArgs
  ): Promise<Evaluation | null> {
    const result = await this.service.evaluation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Evaluation)
  async createEvaluation(
    @graphql.Args() args: CreateEvaluationArgs
  ): Promise<Evaluation> {
    return await this.service.createEvaluation({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Evaluation)
  async updateEvaluation(
    @graphql.Args() args: UpdateEvaluationArgs
  ): Promise<Evaluation | null> {
    try {
      return await this.service.updateEvaluation({
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

  @graphql.Mutation(() => Evaluation)
  async deleteEvaluation(
    @graphql.Args() args: DeleteEvaluationArgs
  ): Promise<Evaluation | null> {
    try {
      return await this.service.deleteEvaluation(args);
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
