import { useState } from "react";

const Places = () => {
  const [cities, setcities] = useState([
    "Patna",
    "Chhapra",
    "Darbhanga",
    "Gaya",
  ]);
  const [toggle, settoggle] = useState(true);

  const handleShuffle = () => {
    if (toggle) {
      setcities(["Chhapra", "Gaya", "Patna", "Darbhanga"]);
    } else {
      setcities(["Patna", "Chhapra", "Darbhanga", "Gaya"]);
    }
    settoggle(!toggle);
  };

  const handleEmptyCities = () => {
    setcities([]);
  };

  const handleFillCities = () => {
    setcities(["Patna", "Chhapra", "Darbhanga", "Gaya"]);
  };

  const handleAddCities = () => {
    let oldcities = [...cities];
    oldcities.push("Buxar");
    oldcities.push("Gopalganj");
    setcities(oldcities);
  };

  const handleRemoveCities = () => {
    let oldcities = [...cities];
    oldcities.pop();
    setcities(oldcities);
  };

  const handleRemovePatna = () => {
    let oldcities = [...cities];
    let index = oldcities.indexOf("Patna");
    if (index > -1) {
      oldcities.splice(index, 1);
    }
    setcities(oldcities);
  };

  const handleRemoveCpr = () => {
    let oldcities = [...cities];
    let index = oldcities.indexOf("Chhapra");
    if (index > -1) {
      oldcities.splice(index, 1);
      setcities(oldcities);
    }
  };
  const handleRemoveDbg = () => {
    let oldcities = [...cities];
    let index = oldcities.indexOf("Darbhanga");
    if (index > -1) {
      oldcities.splice(index, 1);
    }
    setcities(oldcities);
  };
  const handleRemoveGaya = () => {
    let oldcities = [...cities];
    let index = oldcities.indexOf("Gaya");
    if (index > -1) {
      oldcities.splice(index, 1);
    }
    setcities(oldcities);
  };
  const handleRemoveBuxar = () => {
    let oldcities = [...cities];
    let index = oldcities.indexOf("Buxar");
    if (index > -1) {
      oldcities.splice(index, 1);
    }
    setcities(oldcities);
  };
  const handleRemoveGopg = () => {
    let oldcities = [...cities];
    let index = oldcities.indexOf("Gopalganj");
    if (index > -1) {
      oldcities.splice(index, 1);
    }
    setcities(oldcities);
  };
  return (
    <>
      <p>This is the list of Cities.</p>
      <ul>
        <li>{cities[0]}</li>
        <li>{cities[1]}</li>
        <li>{cities[2]}</li>
        <li>{cities[3]}</li>
        <li>{cities[4]}</li>
        <li>{cities[5]}</li>
      </ul>
      <button onClick={() => handleShuffle()} type="button">
        Shuffle Cities
      </button>
      <button onClick={() => handleEmptyCities()} type="button">
        Empty Cities
      </button>
      <button onClick={() => handleFillCities()} type="button">
        Fill Cities
      </button>
      <button onClick={() => handleAddCities()} type="button">
        Add Cities
      </button>
      <button onClick={() => handleRemoveCities()} type="button">
        Remove Cities
      </button>
      <button onClick={() => handleRemovePatna()} type="button">
        Remove Patna
      </button>
      <button onClick={() => handleRemoveCpr()} type="button">
        Remove Chhapra
      </button>
      <button onClick={() => handleRemoveDbg()} type="button">
        Remove Darbhanga
      </button>
      <button onClick={() => handleRemoveGaya()} type="button">
        Remove Gaya
      </button>
      <button onClick={() => handleRemoveBuxar()} type="button">
        Remove Buxar
      </button>
      <button onClick={() => handleRemoveGopg()} type="button">
        Remove Gopalganj
      </button>
    </>
  );
};
export default Places;
