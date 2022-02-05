import React from "react";
import { headerStyle } from "./styles";

export const Header = () => {
  const classes = headerStyle();

  return (
    <header className={classes.header}>
      <h1 className={classes.headerTitle}>Header</h1>
    </header>
  );
};
