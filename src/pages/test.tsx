import React from "react";
import { useState } from "react";

function Page() {
  const [text, setText] = useState(Date.now());

  return <h1>{text}</h1>;
}

export default Page;
