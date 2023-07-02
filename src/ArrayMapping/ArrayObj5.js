import { useState } from "react";

const ArrayObj5 = () => {
  const [name, setname] = useState([
    { name: "Cat", sciname: "Felis catus" },
    { name: "Fish", sciname: "Vertebrata" },
    { name: "Cobra", sciname: "Naja" },
    { name: "Cow", sciname: "Bos taurus" },
    { name: "Butterfly", sciname: "Rhopalocera" },
    { name: "Elephant", sciname: "Elephantidae" },
    { name: "Mouse", sciname: "Mus musculus" },
    { name: "Lizard", sciname: "Hemidactylus flaviviridis" },
    { name: "Mosquito", sciname: "Culicidae" },
  ]);

  const addbtn = () => {
    let prename = [...name];
    prename.push({ name: "Horse", sciname: "Equus caballus" });
    prename.push({ name: "Crow", sciname: "Corvus splendens" });
    setname(prename);
  };

  const removebtn = () => {
    let prename = [...name];
    prename.pop();
    setname(prename);
  };
  return (
    <>
      <h1>Scientific Names of Animals :</h1>
      <ul>
        {name.map((v) => {
          return (
            <>
              <li>{v.name}</li>
              Scientific Names : {v.sciname}
              <br />
              <br />
            </>
          );
        })}
      </ul>
      <button onClick={() => addbtn()}>Add more</button>
      <button onClick={() => removebtn()}>Remove</button>
    </>
  );
};
export default ArrayObj5;
