import React from "react";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { mainStyle } from "../components/styles";

export const Home = () => {
  const classes = mainStyle();
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Form />
      </main>
    </>
  );
};
