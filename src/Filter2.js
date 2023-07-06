import { useState } from "react";

const Array = () => {
  const [color, setcolor] = useState(["Blue", "Black", "White", "Yellow"]);

  const Deleteit = (c) => {
    let precolor = [...color];
    let newcolor = precolor.filter((v, i) => v !== c);

    setcolor(newcolor);
  };

  const Updateit = (v) => {
    let precolor = [...color];
    for (let c of color) {
      if (v !== c) {
        v = "Magenta";
      }
    }
    setcolor(precolor);
  };
  return (
    <>
      <ul>
        {color.map((v) => {
          return (
            <>
              <li>{v}</li>
              <button onClick={() => Deleteit(v)}>Delete Me</button>
              <button onCLick={() => Updateit(v)}>Update Me</button>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default Array;
