import { useState } from "react";
const Array3 = () => {
  const [novels, setnovels] = useState([
    "Atomic Habits",
    "No Limits",
    "Wings of Fire",
    "Pursuit of Happiness",
  ]);
  const addbtn = () => {
    let prenovels = [...novels];
    prenovels.push("The Secret");
    prenovels.push("It Ends With Us");
    setnovels(prenovels);
  };
  const removebtn = () => {
    let prenovels = [...novels];
    prenovels.pop();
    setnovels(prenovels);
  };

  return (
    <>
      <ul>
        {novels.map((v) => {
          return (
            <>
              <li>{v}</li>
            </>
          );
        })}
      </ul>
      <button onClick={() => addbtn()}>Add More</button>
      <button onClick={() => removebtn()}>Remove</button>
    </>
  );
};
export default Array3;
