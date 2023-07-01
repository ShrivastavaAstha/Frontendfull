import { useState } from "react";

const App = () => {
  const [isVerfied, setisVerified] = useState(false);

  return (
    <>
      <h1>@Astha Srivastava</h1>
      {isVerfied ? <p>@Astha Srivastava is verified.</p> : null}

      <button onClick={() => setisVerified(true)} type="button">
        {isVerfied ? "deverify Astha" : "Verify Astha"}
        Get Verified
      </button>
    </>
  );
};
export default App;
