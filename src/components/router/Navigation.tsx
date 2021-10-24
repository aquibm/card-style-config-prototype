import { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Nav, Link } from './Navigation.styles';

export const Navigation: FC = () => {
    const eventsSelected = useRouteMatch('/events');
    const customSelected = useRouteMatch('/custom');

    return (
        <Nav>
            <Link to="/basic" selected={!eventsSelected && !customSelected}>
                Basic
            </Link>
            <Link to="/events" selected={Boolean(eventsSelected)}>
                Events
            </Link>
            <Link to="/custom" selected={Boolean(customSelected)}>
                Custom
            </Link>
        </Nav>
    );
};
