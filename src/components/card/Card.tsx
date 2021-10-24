import { FC } from 'react';
import styled from 'styled-components';

import './card.css';

import { Schema, Section } from '../../types/schema.types';
import { Data } from '../../types/data.types';

type Props = {
    schema: Schema;
    data: Data;
};

export const Card: FC<Props> = ({ schema, data }: Props) => {
    const parseStyle = (style?: Record<string, string>): string => {
        if (!style) {
            return '';
        }

        return Object.keys(style)
            .map((key) => `${key}: ${style[key]}`)
            .join('; ');
    };

    const renderSection = (section: Section, name: string) => {
        if (!section) {
            return null;
        }

        const { content, style } = section;
        const Element = styled.div`
            ${parseStyle(style)}
        `;

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
