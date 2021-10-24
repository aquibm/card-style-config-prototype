import { FC } from 'react';
import { Card } from '../../../card';
import { useSchema } from '../../../example/hooks/use-schema';

const data = {
    summary:
        "That's a crooked tree. We'll send him to Washington. Let's go up in here, and start having some fun This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. All you need is a dream in your heart, and an almighty knife. This is probably the greatest thing to happen in my life - to be able to share this with you. Here's something that's fun.",
};

const rawSchema = `
layout: card
sections:
    section:
        content: summary
`;

export const Name = 'Default';

export const Preview: FC = () => {
    const [schema] = useSchema(rawSchema);

    return <Card schema={schema} data={data} />;
};
