import { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';

import './card.css';

import { Schema, Section, Style } from '../../types/schema.types';
import { Data } from '../../types/data.types';

type Props = {
    schema: Schema;
    data: Data;
};

const layout = `
    &.flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const typography = `
    line-height: 1.4;

    &.h1 {
        font-size: 28px;
        font-weight: 700;
    }

    &.h2 {
        font-size: 24px;
        font-weight: 700;
    }

    &.h3 {
        font-size: 24px;
        font-weight: 400;
    }

    &.h4 {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        color: #545454;
    }

    &.h5 {
        font-size: 20px;
        font-weight: 400;
        color: #545454;
    }

    &.h6 {
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        color: #545454;
    }

    &.bold {
        font-size: 700;
    }

    &.italic {
        font-style: italic;
    }

    &.underline {
        text-decoration: underline;
    }

    &.uppercase {
        text-transform: uppercase;
    }
`;

export const Card: FC<Props> = ({ schema, data }: Props) => {
    const parseStyle = (
        style?: Style,
    ): StyledComponent<'div', any, {}, never> => {
        if (!style) {
            return styled.div``;
        }

        if (typeof style === 'string') {
            return styled.div.attrs(() => ({ className: style }))`
                ${layout}
                ${typography}
            `;
        }

        if (Array.isArray(style)) {
            let classNames: string[] = [];
            let cssProperties: Record<string, string> = {};

            style.forEach((styleDef) => {
                if (typeof styleDef === 'string') {
                    classNames = [...classNames, styleDef];
                }

                if (typeof styleDef === 'object') {
                    cssProperties = { ...cssProperties, ...styleDef };
                }
            });

            const cssRules = Object.keys(cssProperties)
                .map((key) => `${key}: ${cssProperties[key]}`)
                .join('; ');

            return styled.div.attrs(() => ({
                className: classNames.join(' '),
            }))`
                ${layout}
                ${typography}
                ${cssRules}
            `;
        }

        const cssProperties = style as Record<string, string>;
        const cssRules = Object.keys(cssProperties)
            .map((key) => `${key}: ${cssProperties[key]}`)
            .join('; ');

        return styled.div`
            ${layout}
            ${typography}
            ${cssRules}
        `;
    };

    const renderSection = (section: Section, name: string) => {
        if (!section) {
            return null;
        }

        const { content, style } = section;
        const Element = parseStyle(style);

        if (!content) {
            return <Element key={name}>{data[content]}</Element>;
        }

        if (typeof content === 'string') {
            return <Element key={name}>{data[content]}</Element>;
        }

        const subSectionNames = Object.keys(content);
        return (
            <Element key={name}>
                {subSectionNames.map((subSectionName) =>
                    renderSection(content[subSectionName], subSectionName),
                )}
            </Element>
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
