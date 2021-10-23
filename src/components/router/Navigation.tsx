import { FC } from "react";
import { Link } from "react-router-dom";

export const Navigation: FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/basic">Basic</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/custom">Custom</Link>
      </li>
    </ul>
  </nav>
);
