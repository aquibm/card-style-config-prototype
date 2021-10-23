import { FC } from "react";
import { format } from "date-fns";

import "./card.css";

type Props = {
  id: string;
  date: Date;
  content: string;
};

const Card: FC<Props> = ({ id, date, content }: Props) => (
  <div className="card">
    <div className="card__header">
      <div>{id}</div>
      <div>{format(date, "dd/MM/yy h:mmaaa")}</div>
    </div>

    <div className="card__body">{content}</div>
  </div>
);

export default Card;
