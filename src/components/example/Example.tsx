import { FC } from "react";

import { Card } from "../card";
import { useData } from "./hooks/use-data";
import { useSchema } from "./hooks/use-schema";

type Props = {
  rawSchema: string;
  rawData: string;
};

export const Example: FC<Props> = ({ rawSchema, rawData }: Props) => {
  const schema = useSchema(rawSchema);
  const data = useData(rawData);

  return (
    <>
      {data.map((item, idx) => (
        <Card key={idx} schema={schema} data={item} />
      ))}
    </>
  );
};
