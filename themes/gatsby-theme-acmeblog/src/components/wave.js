import React, { useState } from "react";

const Wave = () => {
  const [waves, setWaves] = useState(0);

  return (
    <button onClick={() => setWaves(waves + 1)}>You waved us: {waves}</button>
  );
};

export default Wave;
