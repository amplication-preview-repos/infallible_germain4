import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PreprocessedDataList } from "./preprocessedData/PreprocessedDataList";
import { PreprocessedDataCreate } from "./preprocessedData/PreprocessedDataCreate";
import { PreprocessedDataEdit } from "./preprocessedData/PreprocessedDataEdit";
import { PreprocessedDataShow } from "./preprocessedData/PreprocessedDataShow";
import { DatasetList } from "./dataset/DatasetList";
import { DatasetCreate } from "./dataset/DatasetCreate";
import { DatasetEdit } from "./dataset/DatasetEdit";
import { DatasetShow } from "./dataset/DatasetShow";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { PredictionList } from "./prediction/PredictionList";
import { PredictionCreate } from "./prediction/PredictionCreate";
import { PredictionEdit } from "./prediction/PredictionEdit";
import { PredictionShow } from "./prediction/PredictionShow";
import { EvaluationList } from "./evaluation/EvaluationList";
import { EvaluationCreate } from "./evaluation/EvaluationCreate";
import { EvaluationEdit } from "./evaluation/EvaluationEdit";
import { EvaluationShow } from "./evaluation/EvaluationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MLService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PreprocessedData"
          list={PreprocessedDataList}
          edit={PreprocessedDataEdit}
          create={PreprocessedDataCreate}
          show={PreprocessedDataShow}
        />
        <Resource
          name="Dataset"
          list={DatasetList}
          edit={DatasetEdit}
          create={DatasetCreate}
          show={DatasetShow}
        />
        <Resource
          name="Model"
          list={ModelList}
          edit={ModelEdit}
          create={ModelCreate}
          show={ModelShow}
        />
        <Resource
          name="Prediction"
          list={PredictionList}
          edit={PredictionEdit}
          create={PredictionCreate}
          show={PredictionShow}
        />
        <Resource
          name="Evaluation"
          list={EvaluationList}
          edit={EvaluationEdit}
          create={EvaluationCreate}
          show={EvaluationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
