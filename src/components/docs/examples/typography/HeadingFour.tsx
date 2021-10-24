import { FC } from 'react';
import { Card } from '../../../card';
import { useSchema } from '../../../example/hooks/use-schema';

const data = {
    heading: 'The quick brown fox jumps over the lazy dog',
};

const rawSchema = `
layout: card
sections:
    section:
        style:
            font-size: 20px
            font-weight: 700
            line-height: 1.4
            text-transform: uppercase
            color: '#545454'
        content: heading
`;

export const Name = 'h4';

export const Preview: FC = () => {
    const [schema] = useSchema(rawSchema);

    return <Card schema={schema} data={data} />;
};
