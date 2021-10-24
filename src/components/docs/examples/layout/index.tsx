import { FC } from 'react';
import {
    ExampleContainer,
    ExampleDescription,
    ExampleName,
    ExamplePreview,
} from '../../Documentation.styles';

import * as Default from './Default';
import * as Flex from './Flex';

export const LayoutExamples: FC = () => (
    <>
        <ExampleContainer>
            <ExampleName>{Default.Name}</ExampleName>
            <ExampleDescription>{Default.Description}</ExampleDescription>
            <ExamplePreview>
                <Default.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{Flex.Name}</ExampleName>
            <ExampleDescription>{Flex.Description}</ExampleDescription>
            <ExamplePreview>
                <Flex.Preview />
            </ExamplePreview>
        </ExampleContainer>
    </>
);
