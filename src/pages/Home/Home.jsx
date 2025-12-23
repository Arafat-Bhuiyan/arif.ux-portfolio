import React from "react";
import { Welcome } from "./Welcome";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";

export const Home = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Projects />
    </div>
  );
};
