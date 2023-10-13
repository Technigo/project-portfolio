// import { useState } from "react";
import "./App.css";
import { Header } from "./sections/Header";
import { Tech } from "./sections/Tech";
import { Projects } from "./sections/Projects";

export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <Projects />
    </>
  );
};
