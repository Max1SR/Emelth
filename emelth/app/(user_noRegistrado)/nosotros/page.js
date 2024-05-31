"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout";
import "@/styles/styles.css";
import { Carousel } from "flowbite-react";
import BubbleBackground from "@/components/bubbleBackgrund";

const inter = Inter({ subsets: ["latin"] });

export default function Nosotros() {

  return (
    <Layout>
      <BubbleBackground />
      <main
        className={`flex min-h-screen flex-col items-center px-16 py-14 ${inter.className} h-full sec2 text-slate-800`}
      >
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqhrNbk2U2ma00x0ZZKeGvkww8mU_X7avVCJ-_eSX1FRTg0WO"
              alt="..."
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqhrNbk2U2ma00x0ZZKeGvkww8mU_X7avVCJ-_eSX1FRTg0WO"
              alt="..."
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqhrNbk2U2ma00x0ZZKeGvkww8mU_X7avVCJ-_eSX1FRTg0WO"
              alt="..."
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqhrNbk2U2ma00x0ZZKeGvkww8mU_X7avVCJ-_eSX1FRTg0WO"
              alt="..."
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqhrNbk2U2ma00x0ZZKeGvkww8mU_X7avVCJ-_eSX1FRTg0WO"
              alt="..."
            />
          </Carousel>
        </div>
      </main>
    </Layout>
  );
}
