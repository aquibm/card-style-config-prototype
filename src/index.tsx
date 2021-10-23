import React, { FC } from "react";
import ReactDOM from "react-dom";

import Card from "./components/card";
import { schema, data } from "./examples/basic";

import "./index.css";

const App: FC = () => {
  return (
    <div className="app">
      {data.map((item) => (
        <Card key={item.id} schema={schema} data={item} />
      ))}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
