import { useState } from "react";
const ArrayObj4 = () => {
  const [rivers, setrivers] = useState([
    {
      name: "Ganga",
      origin: "Uttarakhand",
      length: "2525",
      endpoint: "Bay of Bengal",
    },
    {
      name: "Yamuna",
      origin: "Uttarakhand",
      length: "1376",
      endpoint: "Merges with Ganga at Allahabad",
    },
    {
      name: "Brahmputra",
      origin: "Arunachal Pradesh",
      length: "1800",
      endpoint: "",
    },
    {
      name: "Gandak",
      origin: "Nepal",
      length: "630",
      endpoint: "Joins Ganga near Patna",
    },
    {
      name: "Chambal",
      origin: "Madhya Pradesh",
      length: "960",
      endpoint: "Joins Yamuna in UP",
    },
  ]);
  const addbtn = () => {
    let prerivers = [...rivers];
    prerivers.push({
      name: "Son",
      origin: "Madhya Pradesh",
      length: "784",
      endpoint: "Joins Ganga above Patna",
    });
    prerivers.push({
      name: "Ghaghara",
      origin: "Tibet",
      length: 1080,
      endpoint: "Joins Ganga in Bihar",
    });
    setrivers(prerivers);
  };
  const removebtn = () => {
    let prerivers = [...rivers];
    prerivers.pop();
    setrivers(prerivers);
  };

  return (
    <>
      <h1>Names of Rivers:</h1>
      <ul>
        {rivers.map((v) => {
          return (
            <>
              <li>{v.name}</li>
              Origin : {v.origin} <br />
              Length : {v.length} <br />
              End-point : {v.endpoint}
              <br />
              <br />
            </>
          );
        })}
      </ul>
      <button onClick={() => addbtn()}>Add More</button>
      <button onClick={() => removebtn()}>Remove</button>
    </>
  );
};
export default ArrayObj4;
