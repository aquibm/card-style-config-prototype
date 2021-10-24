import { FC } from "react";
import MonacoEditor from "react-monaco-editor";

import { Card } from "../card";
import { useData } from "./hooks/use-data";
import { useSchema } from "./hooks/use-schema";

import {
  Container,
  EditorContainer,
  CardContainer,
  Heading,
} from "./Example.styles";

type Props = {
  rawSchema: string;
  rawData: string;
};

export const Example: FC<Props> = ({ rawSchema, rawData }: Props) => {
  const schema = useSchema(rawSchema);
  const data = useData(rawData);

  return (
    <Container>
      <EditorContainer>
        <Heading>Schema</Heading>
        <MonacoEditor
          height={400}
          language="yaml"
          theme="vs-dark"
          value={rawSchema}
          options={{ lineNumbers: "off", minimap: { enabled: false } }}
        />

        <Heading>Data</Heading>
        <MonacoEditor
          height={200}
          language="json"
          theme="vs-dark"
          value={rawData}
          options={{ lineNumbers: "off", minimap: { enabled: false } }}
        />
      </EditorContainer>

      <CardContainer>
        <Heading>Result</Heading>
        {data.map((item, idx) => (
          <Card key={idx} schema={schema} data={item} />
        ))}
      </CardContainer>
    </Container>
  );
};
