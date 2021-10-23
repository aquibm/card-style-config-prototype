import { FC } from "react";
import { Switch, Route } from "react-router-dom";

import Card from "../card";

import { schema as basicSchema, data as basicData } from "../../examples/basic";
import { schema as eventSchema, data as eventData } from "../../examples/event";

export const AppRouter: FC = () => (
  <Switch>
    <Route path="/basic">
      {basicData.map((item) => (
        <Card key={item.id} schema={basicSchema} data={item} />
      ))}
    </Route>

    <Route path="/events">
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
);
