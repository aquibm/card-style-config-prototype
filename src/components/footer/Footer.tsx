import { FC } from 'react';
import { Background, Text } from './Footer.styles';

export const Footer: FC = () => (
    <Background>
        <Text>
            Made with {'<3'} by{' '}
            <a
                href="http://github.com/aquibm/card-style-config-prototype"
                target="_blank"
                rel="noreferrer"
            >
                aquibm
            </a>
        </Text>
    </Background>
);
