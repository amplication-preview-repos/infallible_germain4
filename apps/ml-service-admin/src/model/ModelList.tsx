import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Models"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="algorithm" source="algorithm" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="hyperparameters" source="hyperparameters" />
        <TextField label="ID" source="id" />
        <TextField label="modelFile" source="modelFile" />
        <TextField label="modelName" source="modelName" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
