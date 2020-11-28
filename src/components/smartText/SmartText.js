import React, { useState } from "react";


const SmartText = ({ text, length = 200 }) => {
  const [showLess, setShowLess] = useState(true);

  if (text.length < length) {
    return <p>{text}</p>;
  }

  return (
    <>
      {showLess ? `${text.slice(0, length)}...` : text}
      <a onClick={() => setShowLess(!showLess)}>
        &nbsp;<br />View {showLess ? "More" : "Less"}
      </a>
    </>
  );
};

export default SmartText;