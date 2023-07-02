import { useState } from "react";

const ArrayObj3 = () => {
  const [company, setcompany] = useState([
    { company: "Apple", country: "United States" },
    { company: "Asus", country: "Taiwan" },
    { company: "Xiaomi", country: "China" },
    { company: "OnePlus", country: "China" },
    { company: "Nokia", country: "Finland" },
    { company: "Lenovo", country: "HongKong" },
    { company: "Acer", country: "Taiwan" },
    { company: "HP", country: "United States" },
    { company: "Samsung", country: "South Korea" },
    { company: "Sony", country: "Japan" },
    { company: "Symphony", country: "Bangladesh" },
  ]);

  const addbtn = () => {
    let precompany = [...company];
    precompany.push({ company: "Lava", country: "India" });
    precompany.push({ company: "Karbonn", country: "India" });
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
              <li>{v.company}</li>
              Origin Country : {v.country}
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
export default ArrayObj3;
