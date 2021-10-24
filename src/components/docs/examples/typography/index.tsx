import { FC } from 'react';
import {
    ExampleContainer,
    ExampleName,
    ExamplePreview,
} from '../../Documentation.styles';

import * as Default from './Default';
import * as HeadingOne from './HeadingOne';
import * as HeadingTwo from './HeadingTwo';
import * as HeadingThree from './HeadingThree';
import * as HeadingFour from './HeadingFour';
import * as HeadingFive from './HeadingFive';
import * as HeadingSix from './HeadingSix';

import * as Bold from './Bold';
import * as Italic from './Italic';
import * as Underline from './Underline';
import * as Uppercase from './Uppercase';

export const TypographyExamples: FC = () => (
    <>
        <ExampleContainer>
            <ExampleName>{Default.Name}</ExampleName>
            <ExamplePreview>
                <Default.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{HeadingOne.Name}</ExampleName>
            <ExamplePreview>
                <HeadingOne.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{HeadingTwo.Name}</ExampleName>
            <ExamplePreview>
                <HeadingTwo.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{HeadingThree.Name}</ExampleName>
            <ExamplePreview>
                <HeadingThree.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{HeadingFour.Name}</ExampleName>
            <ExamplePreview>
                <HeadingFour.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{HeadingFive.Name}</ExampleName>
            <ExamplePreview>
                <HeadingFive.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{HeadingSix.Name}</ExampleName>
            <ExamplePreview>
                <HeadingSix.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{Bold.Name}</ExampleName>
            <ExamplePreview>
                <Bold.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{Italic.Name}</ExampleName>
            <ExamplePreview>
                <Italic.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{Underline.Name}</ExampleName>
            <ExamplePreview>
                <Underline.Preview />
            </ExamplePreview>
        </ExampleContainer>

        <ExampleContainer>
            <ExampleName>{Uppercase.Name}</ExampleName>
            <ExamplePreview>
                <Uppercase.Preview />
            </ExamplePreview>
        </ExampleContainer>
    </>
);
