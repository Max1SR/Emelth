"use client";

import Link from "next/link";
import Header from "./header";
import Footer from "../footer";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
