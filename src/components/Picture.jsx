import React from "react";
import img from "../assets/security-lock.svg";
import { pictureStyles } from "./styles";

export const Picture = () => {
  const classes = pictureStyles();

  return (
    <div
      className={
        "animate__animated animate__fadeIn animate__delay-1s " +
        classes.leftContainer
      }
    >
      <div className={classes.imgContainer}>
        <img src={img} alt="security-lock" className={classes.img} />
      </div>
      <h1>Hash Generator</h1>
      <h3>
        Power by{" "}
        <a
          href="https://es.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={ classes.link }
          style={{ color: "#61DAFB" }}
        >
          React-JS
        </a>{" "}
        and{" "}
        <a
          href="https://www.npmjs.com/package/crypto-js"
          target="_blank"
          rel="noopener noreferrer"
          className={ classes.link }
          style={{ color: "#F1DC51" }}
        >
          Crypto-JS
        </a>
      </h3>
      <h5>
        Made by{" "}
        <a
          href="https://github.com/EngelReyes23"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
          style={{ color: "#f6f8fa" }}
        >
          Engel Reyes
        </a>
      </h5>
    </div>
  );
};
