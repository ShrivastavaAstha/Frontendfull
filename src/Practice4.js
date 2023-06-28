import { useState } from "react";

const Bio = () => {
  const [intro, setintro] = useState({
    name: "Stalin",
    designation: "Senior Manager",
  });

  const handleupdateintro = () => {
    if (intro.name === "Stalin") {
      const newintro = {
        name: "Leena",
        designation: "CEO",
      };
      setintro(newintro);
    } else if (intro.name === "Leena") {
      const newintro = {
        name: "Stalin",
        designation: "Senior Manager",
      };
      setintro(newintro);
    }
  };
  const handleupdatepost = () => {
    if (intro.designation === "Senior Manager") {
      const updatePost = { ...intro };
      updatePost.designation = "Director";
      setintro(updatePost);
    } else if (intro.designation === "Director") {
      const updatePost = { ...intro };
      updatePost.designation = "Senior Manager";
      setintro(updatePost);
    } else if (intro.designation === "CEO") {
      const updatePost = { ...intro };
      updatePost.designation = "Chairman";
      setintro(updatePost);
    } else if (intro.designation === "Chairman") {
      const updatePost = { ...intro };
      updatePost.designation = "CEO";
      setintro(updatePost);
    }
  };

  return (
    <>
      <h1>
        Hello!, I am {intro.name} and I am a {intro.designation}.
      </h1>
      <button onClick={() => handleupdateintro()}>Update Intro</button>
      <button onClick={() => handleupdatepost()}>Update Designation</button>
    </>
  );
};
export default Bio;
