const basicSchema = `
layout: card
sections:
  header:
    style:
      margin-bottom: 18px
      display: flex
      justify-content: space-between

      # TODO: convert into text styles
      color: "#acacac"
      font-size: 14px
      font-weight: 700
      text-transform: uppercase
    content:
      left:
        content: id
      right:
        content: date
  body:
    style:
      font-size: 16px
      line-height: 1.5
    content: content
`;

export default basicSchema;
