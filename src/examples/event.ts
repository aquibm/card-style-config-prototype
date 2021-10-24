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
    style:
      display: flex
      justify-content: space-between
      align-items: center
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
            style:
              font-size: 32px
            content: date
          month:
            style:
              text-transform: uppercase
              font-weight: 700
              color: '#aaa'
            content: month
      description:
        style:
          flex: 1
          margin-left: 30px
        content:
          title:
            style:
              font-size: 24px
              line-height: 1.6
              margin-bottom: 8px
            content: title
          description:
            style:
              font-size: 16px
              line-height: 1.5
            content: description
`;

export { schema, data };
