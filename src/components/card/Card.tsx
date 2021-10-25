import { FC } from 'react';
import styled from 'styled-components';

import './card.css';

import { Schema, Section, Style } from '../../types/schema.types';
import { Data } from '../../types/data.types';
import { StyleProvider } from './StyleProvider';

type Props = {
    schema: Schema;
    data: Data;
};

function parseStyle(style?: Style): [classNames: string[], cssRules: string[]] {
    if (!style) {
        return [[], []];
    }

    if (typeof style === 'string') {
        return [[style], []];
    }

    if (Array.isArray(style)) {
        return style
            .map((styleLine) => parseStyle(styleLine))
            .reduce(
                ([allClassNames, allCssRules], [classNames, cssRules]) => [
                    [...allClassNames, ...classNames],
                    [...allCssRules, ...cssRules],
                ],
                [[], []],
            );
    }

    const cssRules = Object.keys(style).map(
        (key) => `${key}: ${style[key]} !important`,
    );
    return [[], cssRules];
}

export const Card: FC<Props> = ({ schema, data }: Props) => {
    const renderSection = (section: Section, name: string) => {
        if (!section) {
            return null;
        }

        const { content, style } = section;

        const [classes, cssRules] = parseStyle(style);

        const classNames = classes.join(' ');
        const Element = styled.div`
            ${cssRules.join(';')}
        `;

        if (!content || typeof content === 'string') {
            return (
                <StyleProvider key={name}>
                    <Element className={classNames}>{data[content]}</Element>
                </StyleProvider>
            );
        }

        const subSectionNames = Object.keys(content);
        return (
            <StyleProvider key={name}>
                <Element className={classNames}>
                    {subSectionNames.map((subSectionName) =>
                        renderSection(content[subSectionName], subSectionName),
                    )}
                </Element>
            </StyleProvider>
        );
    };

    if (!schema || !schema.sections) return null;

    const topLevelSectionNames = Object.keys(schema.sections);

    return (
        <div className="card">
            {topLevelSectionNames.map((sectionName) =>
                renderSection(schema.sections[sectionName], sectionName),
            )}
        </div>
    );
};
