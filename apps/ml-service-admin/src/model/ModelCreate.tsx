import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="algorithm" source="algorithm" />
        <div />
        <div />
        <TextInput label="modelName" source="modelName" />
      </SimpleForm>
    </Create>
  );
};
