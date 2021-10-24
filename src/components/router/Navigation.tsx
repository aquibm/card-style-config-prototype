import { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Nav, Link } from './Navigation.styles';

export const Navigation: FC = () => {
    const logSelected = useRouteMatch('/log');
    const eventsSelected = useRouteMatch('/events');
    const customSelected = useRouteMatch('/custom');

    return (
        <Nav>
            <Link
                to="/blog"
                selected={!logSelected && !eventsSelected && !customSelected}
            >
                Blog
            </Link>
            <Link to="/events" selected={Boolean(eventsSelected)}>
                Events
            </Link>
            <Link to="/log" selected={Boolean(logSelected)}>
                Log
            </Link>
            <Link to="/custom" selected={Boolean(customSelected)}>
                Custom
            </Link>
        </Nav>
    );
};
