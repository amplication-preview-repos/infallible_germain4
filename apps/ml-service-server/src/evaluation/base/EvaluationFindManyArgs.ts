/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EvaluationWhereInput } from "./EvaluationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EvaluationOrderByInput } from "./EvaluationOrderByInput";

@ArgsType()
class EvaluationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EvaluationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EvaluationWhereInput, { nullable: true })
  @Type(() => EvaluationWhereInput)
  where?: EvaluationWhereInput;

  @ApiProperty({
    required: false,
    type: [EvaluationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EvaluationOrderByInput], { nullable: true })
  @Type(() => EvaluationOrderByInput)
  orderBy?: Array<EvaluationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EvaluationFindManyArgs as EvaluationFindManyArgs };