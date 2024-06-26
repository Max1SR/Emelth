"use client";

import { useState } from "react";
import Header from "./header_encargado";

export default function Layout({ children }) {
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const transitionDuration = isNavbarHovered
    ? "duration-500"
    : "duration-[350ms]";

  return (
    <>
      <Header setIsNavbarHovered={setIsNavbarHovered} />
      <main
        className={`transition-all ${transitionDuration}  ${
          isNavbarHovered ? "ml-[300px]" : "ml-20"
        }`}
      >
        {children}
      </main>
    </>
  );
}
