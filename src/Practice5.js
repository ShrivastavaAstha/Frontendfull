import { useState } from "react";
const Try = () => {
  const [life, setlife] = useState({
    name: "Quote1",
    line: "Life is full of Struggles.",
  });

  const handelsentence = () => {
    if (life.name === "Quote1") {
      const change = {
        name: "Quote2",
        line: "Struggles makes life Elegant.",
      };
      setlife(change);
    } else if (life.name === "Quote2") {
      const change = {
        name: "Quote1",
        line: "Life is full of Struggles.",
      };
      setlife(change);
    }
  };
  return (
    <>
      <h1>
        {life.name} : <br />
        {life.line}
      </h1>
      <button onClick={() => handelsentence()}>Update</button>
    </>
  );
};
export default Try;
