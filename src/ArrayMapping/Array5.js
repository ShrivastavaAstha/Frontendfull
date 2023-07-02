import { useState } from "react";
const Array3 = () => {
  const [subject, setsubject] = useState([
    "Physics",
    "Chemistry",
    "Maths",
    "IT",
  ]);
  const addbtn = () => {
    let presubject = [...subject];
    presubject.push("English");
    presubject.push("CS");
    setsubject(presubject);
  };
  const removebtn = () => {
    let presubject = [...subject];
    presubject.pop();
    setsubject(presubject);
  };

  return (
    <>
      <ul>
        {subject.map((v) => {
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
