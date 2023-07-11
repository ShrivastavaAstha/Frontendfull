import { useState } from "react";
const Practice = () => {
  const [obj, setobj] = useState([]);
  const [stuname, setstuname] = useState("");
  const [stubranch, setstubranch] = useState("");
  const [studob, setdob] = useState(new Date());

  //to add students:
  const addbtn = () => {
    const oldobj = [...obj];
    let newobj = {
      name: stuname,
      branch: stubranch,
      dob: studob,
    };
    oldobj.push(newobj);
    setobj(oldobj);
  };
  //to delete student:
  const deletebtn = (index) => {
    let oldobj = [...obj];
    let newobj = oldobj.filter((v, i) => i !== index);
    setobj(newobj);
  };
  //to update branch:
  const updateBranch = (currentIndex, newbranch) => {
    const oldobj = [...obj];
    oldobj[currentIndex].branch = newbranch;
    setobj(oldobj);
  };

  return (
    <>
      <h1>Student Information:</h1>
      <label>Student Name: </label>
      <input
        value={stuname}
        onChange={(e) => setstuname(e.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      <br />
      <label>Student Branch: </label>
      <input
        value={stubranch}
        onChange={(e) => setstubranch(e.target.value)}
        type="text"
        plceholder="Enter your branch"
      />
      <br />
      <label>Student DOB: </label>
      <input
        value={studob}
        onChange={(e) => setdob(e.target.value)}
        type="date"
      />
      <br />
      <button onClick={() => addbtn()}>Add</button>
      {obj.map((v, i) => {
        return (
          <div key={i}>
            <ul>
              {/* <div className="notes" style={{v.branch === "ECE" ? {backgroundColor:"Yellow"} : v.branch === "CSE" ? {backgroundColor:"lightgreen"}:{backgroundColor:"gray"}}}> */}
              <li>Student Name: {v.name}</li>
              Branch: {v.branch}
              <br />
              Date Of Birth: {v.dob}
              <br />
              <button onClick={() => deletebtn(i)} type="button">
                Delete Me
              </button>
              <button onClick={() => updateBranch(i, "ECE")} type="button">
                {v.branch === "ECE" ? "Update Me" : "Update branch"}
              </button>
              {/* </div> */}
            </ul>
          </div>
        );
      })}
    </>
  );
};
export default Practice;
