import { useState } from "react";

const Array1 = () => {
  const [color, setcolor] = useState(["Blue", "Black", "White", "Yellow"]);

  const addbtn = () => {
    let precolor = [...color];
    precolor.push("Gray");
    precolor.push("Teal");
    setcolor(precolor);
  };

  const removebtn = () => {
    let precolor = [...color];
    precolor.pop();
    setcolor(precolor);
  };
  return (
    <>
      <ul>
        {color.map((v) => {
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
export default Array1;
