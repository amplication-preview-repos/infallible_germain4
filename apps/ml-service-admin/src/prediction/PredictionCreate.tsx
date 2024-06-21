import * as React from "react";
import { Create, SimpleForm, CreateProps } from "react-admin";

export const PredictionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
