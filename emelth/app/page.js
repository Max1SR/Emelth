'use client'

import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout.js";
// import Galerialoca from "@/apppcomponents/galerialoca";
import Carrusel from "@/components/carrusel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-16 py-14 ${inter.className} h-full bg-slate-100 text-slate-800`}
      >
        <div className="jusity-center w-5/6">
          {/* Esto es para web-Primer div*/}
          <div className=" hidden lg:flex mb-24 space-x-14 justify-center">
            <div className="w-2/5 space-y-5  flex flex-col justify-center">
              <div>
                <p className="text-5xl  mb-2 font-semibold text-slate-700">
                  Emerald Health
                </p>
                <p className=" ml-0.5 font-semibold text-slate-600 text-xl ">
                  Emelth
                </p>
              </div>

              <p className="text-x ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                scelerisque pellentesque urna vel feugiat. Cras euismod
                hendrerit ligula, ut commodo massa volutpat eu. Donec at viverra
                nibh.{" "}
              </p>
              <button className="bg-green-400 p-2 px-4 items-center rounded-2xl w-32 mx-auto">
                Registrarse
              </button>
            </div>
            {/* <div className="min-h-96 min-w-72 h-1/5 w-2/4 bg-slate-600 rounded-lg"></div> */}
            <div className="min-h-[96] min-w-72  w-3/5 ">
              <img
                className="h-full w-full object-cover rounded-lg"
                src="https://cdn.bmeditores.mx/2019/12/WQHZA3YTYZE7TLW734FJ5AGPDI-696x375.jpg"
              ></img>
            </div>
          </div>
          {/* Cierra web */}

          {/* Esto es para movil-Primer div*/}
          <div className=" justify-between flex flex-col lg:hidden -mx-16 mb-20">
            <div className="w-full space-y-5  flex flex-col items-center mb-14">
              <div className="flex flex-col items-center">
                <p className="text-5xl  mb-2 font-semibold text-slate-700 text-center">
                  Emerald Health
                </p>
                <p className=" ml-0.5 font-semibold text-slate-600 text-xl ">
                  Emelth
                </p>
              </div>

              <p className="text-x text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                scelerisque pellentesque urna vel feugiat. Cras euismod
                hendrerit ligula, ut commodo massa volutpat eu. Donec at viverra
                nibh.{" "}
              </p>
              <button className="bg-green-400 p-2 px-4 items-center rounded-2xl w-32 mx-auto">
                Registrarse
              </button>
            </div>

            <img
              className="w-full h-72 object-cover rounded-lg"
              src="https://cdn.bmeditores.mx/2019/12/WQHZA3YTYZE7TLW734FJ5AGPDI-696x375.jpg"
            ></img>
          </div>
        </div>

        {/* Se supone que el carrusel es el div 4 */}
        <Carrusel className="mb-20"></Carrusel>

        <div className="">
          {/* Web - Div 3*/}
          <div className="justify-between hidden lg:flex mb-24 mt-24 -mx-16">
            <div className="min-h-96 min-w-72  w-2/4 ">
              <img
                className="h-full w-full object-cover rounded-l-lg"
                src="https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2023-08%2Fcheems-memes-perro.jpg%3Fitok%3DVKUSRRie&w=1920&q=80"
              ></img>
            </div>
            <div className="w-2/4 space-y-5  flex flex-col p-12 bg-slate-400 rounded-r-lg justify-center">
              <p className="text-3xl font-semibold	">¿Qué hacemos?</p>
              <div className="bg-slate-800 h-[3px] w-32"></div>
              <p className="text-balance text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                scelerisque pellentesque urna vel feugiat. Cras euismod
                hendrerit ligula, ut commodo massa volutpat eu. Donec at viverra
                nibh. Aenean luctus, enim eget eleifend blandit, nulla lectus
                sollicitudin arcu, finibus tempus lectus diam vel felis. Aliquam
                a placerat diam.{" "}
              </p>
            </div>
          </div>

          {/* Movil-Div 3 */}
          <div className="flex flex-col lg:hidden mb-20  mt-24 -mx-11 ">
            <div className="w-full ">
              <img
                className="h-1/2 w-full object-cover rounded-t-lg"
                src="https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2023-08%2Fcheems-memes-perro.jpg%3Fitok%3DVKUSRRie&w=1920&q=80"
              ></img>
            </div>
            <div className=" space-y-5  flex flex-col p-12 bg-slate-400 rounded-b-lg justify-center w-full h-1/2 ">
              <p className="text-xl font-semibold	">¿Qué hacemos?</p>
              <div className="bg-slate-800 h-[3px] w-32"></div>
              <p className="text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                scelerisque pellentesque urna vel feugiat. Cras euismod
                hendrerit ligula, ut commodo massa volutpat eu. Donec at viverra
                nibh. Aenean luctus, enim eget eleifend blandit, nulla lectus
                sollicitudin arcu, finibus tempus lectus diam vel felis. Aliquam
                a placerat diam.{" "}
              </p>
            </div>
          </div>

          <div className="text-xl items-center flex flex-col space-y-14 mb-24">
            <p className="text-4xl font-bold">¿Cómo funciona EMELTH?</p>
            <p className="w-1/2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              scelerisque pellentesque urna vel feugiat. Cras euismod hendrerit
              ligula, ut commodo massa volutpat eu. Donec at viverra nibh.
            </p>

            {/* <Galerialoca></Galerialoca> */}
          </div>

          <div className="">
            <div className=" items-center flex flex-col justify-center space-y-12 ">
              <p className="text-4xl font-bold">¡Comienza ahora!</p>
              <p className="w-1/2 break-words text-center text-xl">
                Texto tipo slogan sobre la transformación de nuestro proyecto.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-green-400 text-white p-2 rounded-2xl w-32 ">
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}