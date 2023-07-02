import { useState } from "react";

const Array2 = () => {
  const [city, setcity] = useState([
    "Hyderabad",
    "Bengaluru",
    "Visakhapatnam",
    "Chennai",
  ]);

  const addbtn = () => {
    let precity = [...city];
    precity.push("Jaipur");
    precity.push("Mumbai");
    setcity(precity);
  };

  const removebtn = () => {
    let precity = [...city];
    precity.pop();
    setcity(precity);
  };
  return (
    <>
      <ul>
        {city.map((v) => {
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
export default Array2;
