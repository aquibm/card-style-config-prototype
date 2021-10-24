import { FC, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

import { Card } from '../card';
import { useData } from './hooks/use-data';
import { useSchema } from './hooks/use-schema';

import {
    Container,
    EditorContainer,
    CardContainer,
    Heading,
} from './Example.styles';

type Props = {
    rawSchema: string;
    rawData: string;
};

export const Example: FC<Props> = ({ rawSchema, rawData }: Props) => {
    const [editorSchema, setEditorSchema] = useState(rawSchema);
    const [editorData, setEditorData] = useState(rawData);

    const schema = useSchema(editorSchema);
    const data = useData(editorData);

    return (
        <Container>
            <EditorContainer>
                <Heading>Schema</Heading>
                <MonacoEditor
                    height={400}
                    language="yaml"
                    theme="vs-dark"
                    value={editorSchema}
                    onChange={setEditorSchema}
                    options={{
                        lineNumbers: 'off',
                        minimap: { enabled: false },
                    }}
                />

                <Heading>Data</Heading>
                <MonacoEditor
                    height={200}
                    language="json"
                    theme="vs-dark"
                    value={editorData}
                    onChange={setEditorData}
                    options={{
                        lineNumbers: 'off',
                        minimap: { enabled: false },
                    }}
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
