import React, { FC } from "react";
import ReactDOM from "react-dom";

import Card from "./components/card/Card";

import "./index.css";

const App: FC = () => {
  const data = [
    {
      id: "AB-0021",
      date: new Date("2021-02-21T08:00:00Z"),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nisi facilis fugiat recusandae atque laudantium. At dicta praesentium tempora animi explicabo, dignissimos magni molestiae nesciunt, unde quisquam atque? Quae, vel! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid, molestias accusamus omnis placeat animi ullam qui facere nostrum, id quidem nesciunt quia quae. Quos voluptatem earum numquam quasi voluptatum?",
    },
    {
      id: "AB-0029",
      date: new Date("2021-02-21T08:21:00Z"),
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus voluptas voluptate, nobis tempore at, mollitia doloribus deserunt fugiat quia nam! Id, deleniti porro. Culpa sint quia eum aut voluptatem!",
    },
    {
      id: "AB-0102",
      date: new Date("2021-02-21T08:53:00Z"),
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi beatae alias numquam saepe error! Blanditiis laborum rem quibusdam ab doloribus. Voluptatem, repudiandae illum? Repellendus sapiente, numquam debitis voluptate reiciendis suscipit.",
    },
  ];

  return (
    <div className="app">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
