const data = JSON.stringify(
    [
        {
            id: 'AB-0021',
            date: '21/02/2021 8:08pm',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nisi facilis fugiat recusandae atque laudantium. At dicta praesentium tempora animi explicabo, dignissimos magni molestiae nesciunt, unde quisquam atque? Quae, vel! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid, molestias accusamus omnis placeat animi ullam qui facere nostrum, id quidem nesciunt quia quae. Quos voluptatem earum numquam quasi voluptatum?',
        },
        {
            id: 'AB-0029',
            date: '21/02/2021 8:30pm',
            content:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus voluptas voluptate, nobis tempore at, mollitia doloribus deserunt fugiat quia nam! Id, deleniti porro. Culpa sint quia eum aut voluptatem!',
        },
        {
            id: 'AB-0102',
            date: '21/02/2021 8:46pm',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi beatae alias numquam saepe error! Blanditiis laborum rem quibusdam ab doloribus. Voluptatem, repudiandae illum? Repellendus sapiente, numquam debitis voluptate reiciendis suscipit.',
        },
    ],
    null,
    2,
);

const schema = `
layout: card
sections:
  header:
    style:
      - flex
      - h6
      - margin-bottom: 18px
        color: "#acacac"
        font-size: 14px
        font-weight: 400
    content:
      left:
        content: id
      right:
        content: date
  body:
    content: content
`;

export { schema, data };
