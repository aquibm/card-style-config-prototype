import { FC } from 'react';

import { LayoutExamples } from './examples/layout';
import { TypographyExamples } from './examples/typography';

import {
    Background,
    Container,
    Section,
    Heading,
} from './Documentation.styles';

export const Documentation: FC = () => (
    <Background>
        <Container>
            <Section>
                <Heading>Layouts</Heading>
                <LayoutExamples />
            </Section>

            <Section>
                <Heading>Typography</Heading>
                <TypographyExamples />
            </Section>
        </Container>
    </Background>
);
