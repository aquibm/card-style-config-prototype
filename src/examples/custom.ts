export const data = JSON.stringify(
    [{ test: 'Hello' }, { test: 'World!' }],
    null,
    2,
);

export const schema = `
layout: card
sections:
  sectionOne:
    content: test
`;
