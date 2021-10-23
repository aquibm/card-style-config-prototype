import React, { FC } from "react";
import ReactDOM from "react-dom";

import Card from "./components/card";

import { schema as basicSchema, data as basicData } from "./examples/basic";
import { schema as eventSchema, data as eventData } from "./examples/event";

import "./index.css";

const App: FC = () => {
  return (
    <div className="app">
      <div className="app__section">
        <h1 className="app__title">Basic</h1>
        {basicData.map((item) => (
          <Card key={item.id} schema={basicSchema} data={item} />
        ))}
      </div>

      <div className="app__section">
        <h1 className="app__title">Events</h1>
        {eventData.map((item) => (
          <Card key={item.title} schema={eventSchema} data={item} />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
