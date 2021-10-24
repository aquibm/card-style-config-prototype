import { FC } from 'react';
import { Card } from '../../../card';
import { useSchema } from '../../../example/hooks/use-schema';

const data = {
    one: 'One',
    two: 'Two',
    three: 'Three',
};

const rawSchema = `
layout: card
sections:
    one:
        content: one
    two:
        content: two
    three:
        content: three
`;

export const Name = 'Default';

export const Description = 'Content is stacked on top of each other';

export const Preview: FC = () => {
    const [schema] = useSchema(rawSchema);

    return <Card schema={schema} data={data} />;
};
