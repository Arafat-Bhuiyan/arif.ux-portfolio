import React from "react";
import { Welcome } from "./Welcome";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Services } from "./Services";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
};
