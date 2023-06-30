import { useState } from "react";

const ArrayComponent = () => {
  const [toggle, settoggle] = useState(true);
  const [fruits, setfruits] = useState(["Apple", "Banana", "Grapes", "Orange"]);

  const handleShuffle = () => {
    if (toggle) {
      setfruits(["Banana", "Grapes", "Orange", "Apple"]);
    } else {
      setfruits(["Apple", "Banana", "Grapes", "Orange"]);
    }
    settoggle(!toggle);
  };

  const handleEmptyFruits = () => {
    setfruits([]);
  };

  const handleFillFruits = () => {
    setfruits(["Apple", "Banana", "Grapes", "Orange"]);
  };

  const handleAddFruits = () => {
    let oldFruits = [...fruits];
    oldFruits.push("Mango");
    oldFruits.push("Pineapple");
    setfruits(oldFruits);
  };

  const handleRemoveFruits = () => {
    let oldFruits = [...fruits];
    oldFruits.pop();
    oldFruits.pop();
    setfruits(oldFruits);
  };

  return (
    <>
      <p>This is the list of fruits</p>
      <ul>
        <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li>
        <li>{fruits[3]}</li>
        <li>{fruits[4]}</li>
        <li>{fruits[5]}</li>
      </ul>
      <button onClick={() => handleShuffle()} type="button">
        Shuffle Fruits
      </button>
      <button onClick={() => handleEmptyFruits()} type="button">
        Empty Fruits
      </button>
      <button onClick={() => handleFillFruits()} type="button">
        Fill Fruits
      </button>
      <button onClick={() => handleAddFruits()} type="button">
        Add Fruits
      </button>
      <button onClick={() => handleRemoveFruits()} type="button">
        Remove Fruit
      </button>
    </>
  );
};
export default ArrayComponent;
