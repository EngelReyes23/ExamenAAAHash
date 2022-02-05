import React, { useState } from "react";
import { formStyle } from "./styles";

export const Form = () => {
  const classes = formStyle();
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setText(value);
    value.length > 0 ? setIsValid(true) : setIsValid(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(`${text} is valid`);
    } else alert("Please enter a valid text");
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <input
        className={`${classes.formInput} ${isValid ? classes.formSuccess : ""}`}
        type="text"
        placeholder="Enter your text"
        value={text}
        onChange={handleChange}
      />
      <button
        disabled={!isValid}
        className={
          classes.formButton + " " + (!isValid && classes.buttonDisable)
        }
        type="button"
        onClick={() => {
          alert(`You entered: ${text}`);
        }}
      >
        Generate Hash
      </button>
    </form>
  );
};
