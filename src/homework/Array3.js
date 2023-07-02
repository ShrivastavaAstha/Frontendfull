import { useState } from "react";
const Array3 = () => {
  const [company, setcompany] = useState([
    "Realme",
    "Samsung",
    "OnePlus",
    "Apple",
  ]);
  const addbtn = () => {
    let precompany = [...company];
    precompany.push("Vivo");
    precompany.push("Asus");
    setcompany(precompany);
  };
  const removebtn = () => {
    let precompany = [...company];
    precompany.pop();
    setcompany(precompany);
  };

  return (
    <>
      <ul>
        {company.map((v) => {
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
