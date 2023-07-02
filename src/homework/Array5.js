import { useState } from "react";
const Array3 = () => {
  const [] = useState([]);
  const addbtn = () => {};
  const removebtn = () => {};

  return (
    <>
      <button onClick={() => addbtn()}>Add More</button>
      <button onClick={() => removebtn()}>Remove</button>
    </>
  );
};
export default Array3;
