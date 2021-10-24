import { FC } from 'react';
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
            </Section>

            <Section>
                <Heading>Typography</Heading>
            </Section>
        </Container>
    </Background>
);
