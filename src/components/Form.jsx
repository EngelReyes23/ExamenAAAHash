import React, { useState } from "react";
import { formStyle } from "./styles";

export const Form = () => {
  const classes = formStyle();
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");
  const [option, setOption] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setText(value);
    value.length > 0 ? setIsValid(true) : setIsValid(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(`${option} is valid`);
    } else alert("Please enter a valid text");
  };

  return (
    <form
      className={
        "animate__animated animate__fadeInRightBig animate__delay-1s " +
        classes.form
      }
      onSubmit={onSubmit}
    >
      <input
        className={`${classes.formInput} ${isValid ? classes.formSuccess : ""}`}
        type="text"
        placeholder="Enter your text"
        value={text}
        onChange={handleChange}
      />

      <select
        className={classes.select}
        name="options"
        id="option"
        onChange={(e) => setOption(e.target.value)}
        defaultValue="select an option"
      >
        <option value="sha1">SHA1</option>
        <option value="sha256">SHA256</option>
        <option value="sha512">SHA512</option>
        <option value="md5">MD5</option>
        <option value="ripemd160">RIPEMD160</option>
        <option value="blake2b">BLAKE2B</option>
        <option value="blake2s">BLAKE2S</option>
        <option value="sha3-224">SHA3-224</option>
      </select>

      <button
        disabled={!isValid}
        className={
          classes.formButton + " " + (!isValid && classes.buttonDisable)
        }
        type="submit"
      >
        Generate Hash
      </button>
    </form>
  );
};
