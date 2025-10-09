'use client';

import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Precios from "./Precios";
import Actividad from "./Actividad";
import Comunidad from "./Comunidad";

const views: Record<string, React.ReactElement> = {
  "/": <Hero />,
  "/precios": <Precios />,
  "/actividad": <Actividad />,
  "/comunidad": <Comunidad />,
};

const Panel = () => {
  const [route, setRoute] = useState("/");

  return (
    <>
      <Navbar onNavClick={setRoute} activeRoute={route} />
      {views[route] ?? <Hero />}
    </>
  );
};

export default Panel;