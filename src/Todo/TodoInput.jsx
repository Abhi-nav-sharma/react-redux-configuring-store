import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [state, setState] = useState("");
  return (
    <div>
      <input
        placeholder="Enter something"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button
        onClick={() => {
          onAdd(state);
          setState("");
        }}
      >
        Add
      </button>
    </div>
  );
}
