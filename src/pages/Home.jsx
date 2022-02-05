import React from "react";
import { Form } from "../components/Form";
import { Picture } from "../components/Picture";
import "../components/spinner.css";
import { mainStyle } from "../components/styles";

const Spinner = () => {
  return <div class="lds-hourglass"></div>;
};

export const Home = () => {
  const classes = mainStyle();

  return (
    <>
      <main className={classes.main}>
        <Picture />
        <Form />
      </main>
    </>
  );
};
