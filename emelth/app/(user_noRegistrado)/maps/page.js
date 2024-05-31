"use client";
import React from "react";
import { Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout";
import "@/styles/styles.css";
import { PinContainer } from "@/components/3d-pin";
import BubbleBackground from "@/components/bubbleBackgrund";

const inter = Inter({ subsets: ["latin"] });

export default function Nosotros() {
  const hospitals = [
    "Hospital General",
    "Hospital General De Ticoman",
    "Hospital San Juan de Aragon",
    "Hospital Pediatrico",
    "Hospital Materno Infantil Cuautepec",
    "Hospital General de Cuautepec",
    "Hospital General Balbuena",
    "Hospital Pediátrico Moctezuma",
    "Hospital Materno Infantil Inguarán",
  ];

  return (
    <Layout>
      <BubbleBackground />
      <main
        className={`flex min-h-screen flex-col items-center px-16 py-14 ${inter.className} h-full sec2 text-slate-800`}
      >
        <div className="concept concept-five mb-20">
          <h1 className="word">
            <span className="char">H</span>
            <span className="char">O</span>
            <span className="char">S</span>
            <span className="char">P</span>
            <span className="char">I</span>
            <span className="char">T</span>
            <span className="char">A</span>
            <span className="char">L</span>
            <span className="char">E</span>
            <span className="char">S</span>
          </h1>
        </div>
        <div className="w-full items-center justify-center grid grid-cols-5 space-y-4">
          <div className=" w-full flex items-center justify-center flex-col">
            <h1 className="text-white">Ubicaciones</h1>
            <p className="text-white">
              Explora la ubicación exacta de los centros médicos que usan
              nuestro software, listos para proporcionarte atención
              especializada y rápida en situaciones críticas.
            </p>
          </div>
          {hospitals.map((hospital) => (
            <React.Fragment key={hospital}>
              <PinContainer
                title="Ver mapa"
                onClick={() =>
                  document.getElementById("my_modal_4")?.showModal()
                }
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[9.5rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {hospital}
                  </h3>
                  <div className="flex flex-1 w-full rounded-lg mt-4">
                    <img
                      className="object-cover"
                      alt={`Imagen de ${hospital}`}
                    />
                  </div>
                </div>
              </PinContainer>

              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Click the button below to close</p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </React.Fragment>
          ))}
        </div>
      </main>
    </Layout>
  );
}
