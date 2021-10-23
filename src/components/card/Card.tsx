import { FC } from "react";
import yaml from "yaml";
import styled from "styled-components";

import "./card.css";

type Props = {
  schema: string;
  data: Record<string, string | number>;
};

type Section = {
  style?: Record<string, string>;
  content: string | Record<string, Section>;
};

type Schema = {
  layout: string;
  sections: Record<string, Section>;
};

const Card: FC<Props> = ({ schema, data }: Props) => {
  const parsedSchema = yaml.parse(schema) as Schema;

  const parseStyle = (style?: Record<string, string>): string => {
    if (!style) {
      return "";
    }

    return Object.keys(style)
      .map((key) => `${key}: ${style[key]}`)
      .join("; ");
  };

  const renderSection = (section: Section, name: string) => {
    const { content, style } = section;
    const Element = styled.div`
      ${parseStyle(style)}
    `;

    if (typeof content === "string") {
      return <Element key={name}>{data[content]}</Element>;
    }

    const subSectionNames = Object.keys(content);
    return (
      <Element key={name}>
        {subSectionNames.map((subSectionName) =>
          renderSection(content[subSectionName], subSectionName)
        )}
      </Element>
    );
  };

  const topLevelSectionNames = Object.keys(parsedSchema.sections);

  return (
    <div className="card">
      {topLevelSectionNames.map((sectionName) =>
        renderSection(parsedSchema.sections[sectionName], sectionName)
      )}
    </div>
  );
};

export default Card;
