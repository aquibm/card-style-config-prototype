import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { schema as basicSchema, data as basicData } from '../../examples/basic';
import { schema as eventSchema, data as eventData } from '../../examples/event';
import {
    schema as customSchema,
    data as customData,
} from '../../examples/custom';
import {
    schema as postSchema,
    data as postData,
} from '../../examples/blog-post';

import { Example } from '../example/Example';

export const AppRouter: FC = () => (
    <Switch>
        <Route path="/blog">
            <Example key="/blog" rawSchema={postSchema} rawData={postData} />
        </Route>

        <Route path="/log">
            <Example key="/log" rawSchema={basicSchema} rawData={basicData} />
        </Route>

        <Route path="/events">
            <Example
                key="/events"
                rawSchema={eventSchema}
                rawData={eventData}
            />
        </Route>

        <Route path="/custom">
            <Example
                key="/custom"
                rawSchema={customSchema}
                rawData={customData}
            />
        </Route>

        <Route>
            <Example key="/" rawSchema={postSchema} rawData={postData} />
        </Route>
    </Switch>
);
