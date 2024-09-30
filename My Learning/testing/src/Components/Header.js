import React from "react";

export default function Header() {
  return (
    <div
      style={{
        margin: "10px",
        border: "5px solid black",
        padding: "10px",
        justifyContent: "center",
        alignContent: "center",
        display:"flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }}
    >
      <label
        style={{
          fontSize: "16px",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        Search
      </label>
      <input
        type="Textbox"
        placeholder="enter something...."
        style={{
          fontSize: "16px",
          justifyContent: "center",
          alignContent: "center",
        }}
      ></input>
    </div>
  );
}
