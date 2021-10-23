import { FC } from "react";
import { Switch, Route } from "react-router-dom";

import { schema as basicSchema, data as basicData } from "../../examples/basic";
import { schema as eventSchema, data as eventData } from "../../examples/event";
import { Example } from "../example/Example";

export const AppRouter: FC = () => (
  <Switch>
    <Route path="/basic">
      <Example rawSchema={basicSchema} rawData={basicData} />
    </Route>

    <Route path="/events">
      <Example rawSchema={eventSchema} rawData={eventData} />
    </Route>

    <Route path="/custom">Custom stuff.</Route>

    <Route>
      <Example rawSchema={basicSchema} rawData={basicData} />
    </Route>
  </Switch>
);
