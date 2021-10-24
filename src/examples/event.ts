const data = JSON.stringify(
    [
        {
            date: '21',
            month: 'Feb',
            title: 'Feburary 2021 OWASP Meetup',
            description:
                'So you have an access key that you need to store somewhere. Maybe it is better not to put it in your code, nor in your container.',
        },
        {
            date: '15',
            month: 'Mar',
            title: 'Testing Serverless Apps in AWS',
            description:
                'What are we supposed to test? How do we test our app on both unit and integration levels? How can we make sure our app will work properly in a live environment?',
        },
    ],
    null,
    2,
);

const schema = `
layout: card
sections:
  main:
    style: flex
    content:
      date:
        style:
          flex: 0
          background: '#ececec'
          min-width: 45px
          padding: 8px
          border-radius: 8px
          text-align: center
        content:
          date:
            style: h1
            content: date
          month:
            style:
              - h6
              - color: '#aaa'
            content: month
      description:
        style:
          flex: 1
          margin-left: 30px
        content:
          title:
            style:
              - h3
              - margin-bottom: 12px
            content: title
          description:
            content: description
`;

export { schema, data };
