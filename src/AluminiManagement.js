import { useState } from "react";

const ArrayOfObj = () => {
  const [alumini, setalumini] = useState([]);

  const [aluminiName, setaluminiName] = useState("");
  const [aluminiBranch, setaluminiBranch] = useState("");
  const [aluminiPy, setaluminiPy] = useState("");
  const [aluminicw, setaluminicw] = useState("");

  //To add new record:
  const addalumini = () => {
    const prealumini = [...alumini];
    let newalumini = {
      name: aluminiName,
      branch: aluminiBranch,
      passingyear: aluminiPy,
      currentwork: aluminicw,
    };
    prealumini.push(newalumini);
    setalumini(prealumini);
  };
  //To delete the record:
  const deleteit = (index) => {
    let prealumini = [...alumini];
    let newalumini = prealumini.filter((v, i) => i !== index);
    setalumini(newalumini);
  };

  //To update Name:
  const updateName = (currentIndex, newName) => {
    const prealumini = [...alumini];
    prealumini[currentIndex].name = newName;
    setalumini(prealumini);
  };

  //To update Branch:
  const updateBranch = (currentIndex, newName) => {
    const prealumini = [...alumini];
    prealumini[currentIndex].branch = newName;
    setalumini(prealumini);
  };

  //To update Designation:
  const updatecw = (currentIndex, newName) => {
    const prealumini = [...alumini];
    prealumini[currentIndex].currentwork = newName;
    setalumini(prealumini);
  };
  return (
    <>
      <h1>Alumini Of Our College:</h1>
      <label>Name: </label>
      <input
        value={aluminiName}
        onChange={(e) => setaluminiName(e.target.value)}
        type="text"
      />{" "}
      <br />
      <br />
      <label>Branch: </label>
      <input
        value={aluminiBranch}
        onChange={(e) => setaluminiBranch(e.target.value)}
        type="text"
      />{" "}
      <br />
      <br />
      <label>Passing Out Year: </label>
      <input
        value={aluminiPy}
        onChange={(e) => setaluminiPy(e.target.value)}
        type="text"
      />{" "}
      <br />
      <br />
      <label>Designation: </label>
      <input
        value={aluminicw}
        onChange={(e) => setaluminicw(e.target.value)}
        type="text"
      />{" "}
      <br />
      <br />
      <button onClick={() => addalumini()} type="button">
        Include New
      </button>
      {alumini.map((v, i) => {
        return (
          <div key={i}>
            <ul>
              <li>Alumini Name: {v.name}</li>
              Branch: {v.branch}
              <br />
              Passing Out Year: {v.passingyear}
              <br />
              Designation: {v.currentwork}
              <br />
              <br />
              <button onClick={() => deleteit(i)} type="button">
                Delete Record
              </button>
              <button onClick={() => updateName(i, "Alumini")} type="button">
                Update Name
              </button>
              <button onClick={() => updateBranch(i, "ECE")} type="button">
                Update Branch
              </button>
              <button onClick={() => updatecw(i, "Engineer")} type="button">
                Update Designation
              </button>
            </ul>
          </div>
        );
      })}
    </>
  );
};
export default ArrayOfObj;
