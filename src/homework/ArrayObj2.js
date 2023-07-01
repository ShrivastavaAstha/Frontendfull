import { useState } from "react";

const ArrayObj2 = () => {
  const [capital, setcapital] = useState([
    { country: "India", capital: "New Delhi", currency: "Indian Rupee" },
    { country: "Germany", capital: "Berlin", currency: "Euro" },
    { country: "Norway", capital: "Oslo", currency: "Norwegian krone" },
    { country: "Maldives", capital: "Male", currency: "Rufiyaa" },
    { country: "Kenya", capital: "Nairobi", currency: "Kenya shilling" },
  ]);

  const addbtn = () => {
    let precapital = [...capital];
    precapital.push({ country: "Greece", capital: "Athens", currency: "Euro" });
    precapital.push({
      country: "Cuba",
      capital: "Havana",
      currency: "Cuban Peso",
    });
    setcapital(precapital);
  };

  const removebtn = () => {
    let precapital = [...capital];
    precapital.pop();
    setcapital(precapital);
  };
  return (
    <>
      <ul>
        {capital.map((v) => {
          return (
            <>
              <li>{v.country}</li>
              Capital : {v.capital}
              <br /> Currency: {v.currency} <br />
              <br />
            </>
          );
        })}
      </ul>

      <button onClick={() => addbtn()}>Add More</button>
      <button onClick={() => removebtn()}>Remove </button>
    </>
  );
};
export default ArrayObj2;
