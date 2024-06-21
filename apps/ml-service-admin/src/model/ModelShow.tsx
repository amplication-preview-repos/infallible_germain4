import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="algorithm" source="algorithm" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="hyperparameters" source="hyperparameters" />
        <TextField label="ID" source="id" />
        <TextField label="modelFile" source="modelFile" />
        <TextField label="modelName" source="modelName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
