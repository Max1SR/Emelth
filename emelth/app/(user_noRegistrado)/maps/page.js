import React from "react";
import { Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout";
import "@/styles/styles.css";

const inter = Inter({ subsets: ["latin"] });
export default function nosotros() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-16 py-14 ${inter.className} h-full  sec2 text-slate-800`}
      >
        <div class="concept concept-five">
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

        <div className=" grid grid-cols-4 gap-10 mt-6 mx-auto">
          
        </div>
      </main>
    </Layout>
  );
}
