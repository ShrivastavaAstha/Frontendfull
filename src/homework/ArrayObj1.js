import { useState } from "react";

const ArrayObj1 = () => {
  const [Novels, setNovels] = useState([
    { name: "Atomic Habits", author: "James Clear" },
    { name: "Wings of Fire", author: "Abdul Kalam" },
    { name: "Life's Amazing Secrets", author: "Gaur Gopal Das" },
    { name: "No Limits", author: "Mukesh Bansal" },
  ]);

  const addbtn = () => {
    let prenovels = [...Novels];
    prenovels.push({ name: "The 5 Second Rule", author: "Mel Robbins" });
    prenovels.push({ name: "The Art of Happiness", author: "Dalai Lama" });
    setNovels(prenovels);
  };
  const removebtn = () => {
    let prenovels = [...Novels];
    prenovels.pop();
    setNovels(prenovels);
  };
  return (
    <>
      <ul>
        {Novels.map((v) => {
          return (
            <>
              <li>{v.name}</li>
              Author : {v.author} <br />
              <br />
            </>
          );
        })}
      </ul>

      <button onClick={() => addbtn()}>Add More</button>
      <button onClick={() => removebtn()}>Remove</button>
    </>
  );
};
export default ArrayObj1;
