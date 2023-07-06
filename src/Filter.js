import { useState } from "react";

const ArrayObj = () => {
  const [Novels, setNovels] = useState([
    { name: "Atomic Habits", author: "James Clear" },
    { name: "Wings of Fire", author: "Abdul Kalam" },
    { name: "Life's Amazing Secrets", author: "Gaur Gopal Das" },
    { name: "No Limits", author: "Mukesh Bansal" },
  ]);

  const deleteCurrent = (c) => {
    let prenovels = [...Novels];
    let newnovels = prenovels.filter((v, i) => v.name !== c.name);
    setNovels(newnovels);
  };
  const updateCurrent = (v) => {
    let prenovels = [...Novels];
    for (let c of Novels) {
      if (v.author !== c.author) {
        v.author = "Anonymous";
      }
    }
    setNovels(prenovels);
  };
  return (
    <>
      <h1>List Of Novels:</h1>
      {Novels.map((v, i) => {
        return (
          <div key={i}>
            <ul>
              <li>Name: {v.name}</li>
              <li>Author:{v.author}</li>
              <button onClick={() => deleteCurrent(v)} type="button">
                Delete Me
              </button>
              <button onClick={() => updateCurrent(v)} type="button">
                Update Me
              </button>
            </ul>
          </div>
        );
      })}
    </>
  );
};
export default ArrayObj;
