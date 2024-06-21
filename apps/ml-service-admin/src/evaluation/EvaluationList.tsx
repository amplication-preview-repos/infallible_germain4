import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EvaluationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Evaluations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="accuracy" source="accuracy" />
        <TextField label="confusionMatrix" source="confusionMatrix" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="loss" source="loss" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
