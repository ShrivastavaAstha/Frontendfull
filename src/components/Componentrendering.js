import { useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

const Componentrendering = () => {
  const [isVerified, setisVerified] = useState(false);

  return (
    <>
      <h1>Confussion</h1>
      {isVerified ? (
        <p>
          Confussion is Verified{" "}
          <VerifiedIcon sx={{ backgroundColor: "blue" }} />
        </p>
      ) : null}

      <button onClick={() => setisVerified(true)} type="button">
        Verify Confussion
      </button>
    </>
  );
};

export default Componentrendering;
