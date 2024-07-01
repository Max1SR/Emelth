"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout";
import "@/styles/styles.css";
import { PinContainer } from "@/components/3d-pin";
import BubbleBackground from "@/components/bubbleBackgrund";

const inter = Inter({ subsets: ["latin"] });

const hospitals = [
  {
    name: "Hospital General La Villa",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.4314623908667!2d-99.10593802496192!3d19.48006438180944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f97fbe62b0e9%3A0xabb0609ca4bde317!2sHospital%20General%20La%20Villa!5e0!3m2!1ses-419!2smx!4v1713073283110!5m2!1ses-419!2smx",
    img: "/img/HGVilla.png",
  },
  {
    name: "Hospital General De Ticoman",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.6297161282364!2d-99.140343824961!3d19.514560381782434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f944116fa79f%3A0xff079cdbaff5ce04!2sHospital%20General%20De%20Ticoman!5e0!3m2!1ses-419!2smx!4v1713076702966!5m2!1ses-419!2smx",
    img: "/img/HGTicoman.png",
  },
  {
    name: "Hospital San Juan de Aragon",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.9425339487766!2d-99.0924246!3d19.458044299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fa5c197490df%3A0xc602e3715db042c5!2sHospital%20Pedi%C3%A1trico%20San%20Juan%20de%20Arag%C3%B3n!5e0!3m2!1ses-419!2smx!4v1713078521422!5m2!1ses-419!2smx",
    img: "/img/HPSanJuan.png",
  },
  {
    name: "Hospital Pediatrico La Villa",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.2671681558086!2d-99.1140286!3d19.4871381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f99c98b37591%3A0x66574b34d616dc59!2sHospital%20Pediatrico%20La%20Villa!5e0!3m2!1ses-419!2smx!4v1713079217884!5m2!1ses-419!2smx",
    img: "/img/HGLaVilla.png",
  },
  {
    name: "Hospital Materno Infantil Cuautepec",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.042950831159!2d-99.1413008!3d19.5397695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f82778f4eaa1%3A0xa18ad8608165970e!2sHOSPITAL%20MATERNO%20INFANTIL%20CUAUTEPEC!5e0!3m2!1ses-419!2smx!4v1713079261695!5m2!1ses-419!2smx",
    img: "/img/HMICuautepec.png",
  },
  {
    name: "Hospital General de Cuautepec",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.4044211224045!2d-99.14018109999999!3d19.5242434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92a0a030aed%3A0xd0f8717615cb942b!2sHospital%20General%20de%20Cuautepec!5e0!3m2!1ses-419!2smx!4v1713079304906!5m2!1ses-419!2smx",
    img: "/img/HGCuautepec.png",
  },
  {
    name: "Hospital General Balbuena",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7298584508953!2d-99.1150713!3d19.424074600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1feb0f53abe67%3A0x2f58c064bd172c54!2sHospital%20General%20Balbuena!5e0!3m2!1ses-419!2smx!4v1713079598519!5m2!1ses-419!2smx",
    img: "/img/HGBalbuena.png",
  },
  {
    name: "Hospital Pediátrico Moctezuma",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.528529947043!2d-99.0981259!3d19.4327665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc01003ac8ed%3A0x4ba1efdcd0fcaa05!2sHospital%20Pedi%C3%A1trico%20Moctezuma!5e0!3m2!1ses-419!2smx!4v1713079629932!5m2!1ses-419!2smx",
    img: "/img/HPMoctezuma.png",
  },
  {
    name: "Hospital Materno Infantil Inguarán",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.076990736143!2d-99.1131425!3d19.452247099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f944a78000af%3A0xcd64071d720f2427!2sHospital%20Materno%20Infantil%20Inguar%C3%A1n!5e0!3m2!1ses-419!2smx!4v1713079669494!5m2!1ses-419!2smx",
    img: "/img/HMIInguarán.png",
  },
];

export default function Nosotros() {
  const [selectedHospital, setSelectedHospital] = useState(null);

  const openModal = (hospital) => {
    setSelectedHospital(hospital);
    document.getElementById("my_modal_4").showModal();
  };

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
        <div className="w-full items-center justify-center grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 overflow-y-auto overflow-x-hidden h-[32rem]">
          <div className="flex flex-col pl-10 mt-5">
            <h1 className="text-white text-4xl font-bold mb-4">Ubicaciones</h1>
            <p className="text-white">
              Explora la ubicación exacta de los centros médicos que usan
              nuestro software, listos para proporcionarte atención
              especializada y rápida en situaciones críticas.
            </p>
          </div>
          {hospitals.map((hospital, index) => (
            <PinContainer key={index} title="Ver mapa">
              <div
                className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[9.5rem]"
                onClick={() => openModal(hospital)}
              >
                <div className="flex flex-1 w-full rounded-lg -mt-4">
                  <img className="object-cover" src={hospital.img} />
                </div>
              </div>
            </PinContainer>
          ))}
        </div>

        {/* Modal de DaisyUI */}
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            {selectedHospital ? (
              <>
                <h2 className="font-bold text-lg text-slate-300">{selectedHospital.name}</h2>
                <iframe
                  src={selectedHospital.mapUrl}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 mt-4"
                ></iframe>
              </>
            ) : (
              <p>Loading...</p>
            )}
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Cerrar</button>
              </form>
            </div>
          </div>
        </dialog>
      </main>
    </Layout>
  );
}
