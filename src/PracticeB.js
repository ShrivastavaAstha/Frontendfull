import { useState } from "react";

const App = () => {
  const [button, setisbutton] = useState(false);
  return (
    <>
      <h1>Is Button available?</h1>
      {button ? <p>Button is avalaible.</p> : null}
      <button onClick={() => setisbutton(true)} type="button">
        Button
      </button>
    </>
  );
};
export default App;
