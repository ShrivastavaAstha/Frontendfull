import { useState } from "react";

const Array = () => {
  const [color, setcolor] = useState(["Blue", "Black", "White", "Yellow"]);

  const Deleteit = (c) => {
    let precolor = [...color];
    let newcolor = precolor.filter((v) => v !== c);

    setcolor(newcolor);
  };

  // const Updateit = (c) => {
  //   let precolor = [...color];
  //   for (let i = 0; i < precolor.length; i++) {
  //     if (precolor[i] === c) {
  //       precolor[i] = "Magenta";
  //     }
  //   }
  //   setcolor(precolor);
  // };
  const Updateit = (currentIndex, newcolor) => {
    const precolor = [...color];
    precolor[currentIndex] = newcolor;
    setcolor(precolor);
  };
  return (
    <>
      {color.map((v, i) => {
        return (
          <div key={i}>
            <ul>
              <li>{v}</li>
              <button onClick={() => Deleteit(v)}>Delete Me</button>
              <button onCLick={() => Updateit(i, "Magenta")} type="button">
                Update Me
              </button>
            </ul>
          </div>
        );
      })}
    </>
  );
};
export default Array;
