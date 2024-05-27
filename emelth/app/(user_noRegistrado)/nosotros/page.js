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
        
        
      </main>
    </Layout>
  );
}
