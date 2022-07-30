/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

function SayHello() {
  const [message, setMessage] = useState("Hello World");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Código actualizado!!!")}>
        Click Me
      </button>
    </div>
  );
}

export default SayHello;
