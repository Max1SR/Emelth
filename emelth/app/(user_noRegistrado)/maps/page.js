import React from "react";
import { Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout";
import "@/styles/styles.css";

import PinContainer from "@/components/3d-pin.tsx";

const inter = Inter({ subsets: ["latin"] });
export default function nosotros() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-16 py-14 ${inter.className} h-full  sec2 text-slate-800`}
      >
        <div className="concept concept-five">
          <h1 class="word">
            <span class="char">H</span>
            <span class="char">O</span>
            <span class="char">S</span>
            <span class="char">P</span>
            <span class="char">I</span>
            <span class="char">T</span>
            <span class="char">A</span>
            <span class="char">L</span>
            <span class="char">E</span>
            <span class="char">S</span>
          </h1>
        </div>

        <div className=" grid grid-cols-4 gap-10 mt-6 mx-auto"></div>

        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Aceternity UI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </main>
    </Layout>
  );
}
