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
      <h3>Power by React-JS and Crypto-JS</h3>
      <h5>Made by EngelReyes</h5>
    </div>
  );
};
