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
    parent:
        style: flex
        content:
            one:
                content: one
            two:
                content: two
            three:
                content: three
`;

export const Name = 'flex';

export const Description =
    'Content is placed on the same row with space between. Content is vertically aligned in the middle.';

export const Preview: FC = () => {
    const [schema] = useSchema(rawSchema);

    return <Card schema={schema} data={data} />;
};
