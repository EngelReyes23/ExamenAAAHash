import React from "react";
import { Form } from "../components/Form";
import { Picture } from "../components/Picture";
import { mainStyle } from "../components/styles";

export const Home = () => {
  const classes = mainStyle();

  return (
    <main className={classes.main}>
      <Picture />
      <Form />
    </main>
  );
};
