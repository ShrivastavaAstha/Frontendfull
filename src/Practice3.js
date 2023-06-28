import { useState } from "react";

const Change = () => {
  const [life, setlife] = useState({
    location: "School",
    status: "Best",
  });
  const handleupdatestatus = () => {
    if (life.location === "School") {
      const newLife = {
        location: "College",
        status: "Waste",
      };
      setlife(newLife);
    } else if (life.location === "College") {
      const newLife = {
        location: "School",
        status: "Best",
      };
      setlife(newLife);
    }
  };

  return (
    <>
      <h1>
        Hey! {life.location} life is {life.status}.{" "}
      </h1>
      <button onClick={() => handleupdatestatus()}>Update Status</button>
    </>
  );
};
export default Change;
