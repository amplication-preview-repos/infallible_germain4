import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const EvaluationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="accuracy" source="accuracy" />
        <div />
        <NumberInput label="loss" source="loss" />
      </SimpleForm>
    </Create>
  );
};
