import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Card from "./components/card";

import { schema as basicSchema, data as basicData } from "./examples/basic";
import { schema as eventSchema, data as eventData } from "./examples/event";

import "./index.css";

const App: FC = () => {
  return (
    <Router>
      <div className="app">
        <div className="app__section">
          <h1>Config based card layout</h1>
        </div>

        <div className="app__section">
          <ul>
            <li>
              <Link to="/basic">Basic</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/custom">Custom</Link>
            </li>
          </ul>
        </div>

        <div className="app__section">
          <Switch>
            <Route path="/basic">
              {basicData.map((item) => (
                <Card key={item.id} schema={basicSchema} data={item} />
              ))}
            </Route>

            <Route path="/event">
              {eventData.map((item) => (
                <Card key={item.title} schema={eventSchema} data={item} />
              ))}
            </Route>

            <Route path="/custom">Custom stuff.</Route>

            <Route>
              {basicData.map((item) => (
                <Card key={item.id} schema={basicSchema} data={item} />
              ))}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
