import React, { useState } from "react";

export default function Form({ heading }) {
  const [text, setText] = useState("");

  function convertToUpperCase() {
    setText(text.toLocaleUpperCase());
  }

  function changeHandler(e) {
    setText(e.target.value);
  }

  function clearTextHandler(e) {
    setText("");
  }

  return (
    <div className="container">
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          <h1> {heading} </h1>
        </label>
        <textarea
          className="form-control"
          value={text}
          id="exampleFormControlTextarea1"
          onChange={changeHandler}
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary m-2" onClick={convertToUpperCase}>
        ConvertToUpperCase
      </button>

      <button className="btn btn-primary m-2" onClick={clearTextHandler}>
        Clear Text
      </button>

      <div className="container my-3">
        <h1>The total number of words : </h1>
        <p>
          {text.length} character and{" "}
          {text.length === 0
            ? 0
            : text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
          words
        </p>
      </div>
    </div>
  );
}
