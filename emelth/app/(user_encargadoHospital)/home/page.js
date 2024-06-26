'use client'
import { Inter } from "next/font/google";
import Layout from "@/components/components_encargado/layout";


import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

 function Homepage() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-16 py-14 ${inter.className} h-full bg-slate-100 text-slate-800`}
      >
        <div>
          <p>Al rato le pongo algo aqui tengoq eu corregir el boton de cerrar sesion y se treuena el front cuando se hace muy peque;a la pantalla asi que no es responsive alavergaaaaaa</p>
        </div>
        
      </main>
    </Layout>
  );
}
export default function page(){
  return (
    <SessionProvider >
      <Homepage />
    </SessionProvider>
  );

}
