import CryptoJS from "crypto-js";
import React, { useState } from "react";
import { formStyle } from "./styles";

export const Form = () => {
  const classes = formStyle();

  //#region States
  const [text, setText] = useState("");
  const [option, setOption] = useState("SHA1");
  const [show, setShow] = useState(false);
  //#endregion States

  //#region Functions
  const handleChange = ({ target: { value } }) => {
    if (value.trim().length > 0) {
      setText(value);
      setShow(true);
    } else {
      setText("");
      setShow(false);
    }
  };
  //#endregion Functions

  return (
    <form
      className={
        "animate__animated animate__fadeInRightBig animate__delay-1s " +
        classes.form
      }
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        className={classes.formInput}
        type="text"
        placeholder="Enter your text"
        value={text}
        onChange={handleChange}
      />

      <select
        className={classes.select}
        name="options"
        id="option"
        value={option}
        onChange={(e) => setOption(e.target.value)}
        defaultValue="SHA1"
      >
        <option value="SHA1">SHA1</option>
        <option value="SHA256">SHA256</option>
        <option value="SHA512">SHA512</option>
        <option value="MD5">MD5</option>
        <option value="RIPEMD160">RIPEMD160</option>
      </select>
      {show && (
        <div className={classes.formResult}>
          <p>
            <b>Option:</b> {option}
          </p>
          <p>
            <b>Text:</b> {text}
          </p>
          <p>
            <b>Result: </b>
            {option === "SHA1"
              ? CryptoJS.SHA1(text).toString()
              : option === "SHA256"
              ? CryptoJS.SHA256(text).toString()
              : option === "SHA512"
              ? CryptoJS.SHA512(text).toString()
              : option === "MD5"
              ? CryptoJS.MD5(text).toString()
              : option === "RIPEMD160"
              ? CryptoJS.RIPEMD160(text).toString()
              : "Please select an option"}
          </p>
        </div>
      )}
    </form>
  );
};
