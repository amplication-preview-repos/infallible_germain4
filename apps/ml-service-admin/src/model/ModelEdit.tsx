import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="algorithm" source="algorithm" />
        <div />
        <div />
        <TextInput label="modelName" source="modelName" />
      </SimpleForm>
    </Edit>
  );
};
