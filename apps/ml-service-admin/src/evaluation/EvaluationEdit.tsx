import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const EvaluationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="accuracy" source="accuracy" />
        <div />
        <NumberInput label="loss" source="loss" />
      </SimpleForm>
    </Edit>
  );
};
