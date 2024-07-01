"use client";
import { Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout.js";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import "../styles/styles.css";
import AnimatedBackground from "@/components/components_usu_no_registrado/fondoCuadros.jsx";

function Home() {
  const router = useRouter();

  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      const rol = session.user?.name;
      console.log(rol);
      if (rol === "3") {
        router.push("/home");
      }
      if (rol === "1") {
        router.push("/crear");
      }

      // Finaliza la carga cuando se ha realizado la comprobación
    }
  }, [session, status]);

  const [textoH, setTextoH] = useState("AGILIZA EL TRASLADO EN");
  const [textoPe, setTextoPe] = useState("MOMENTOS CRÍTICOS");
  const [textoPt, setTextoPt] = useState(
    "En el corazón de las operaciones de emergencia, el sistema Emelth acelera el proceso de traslado de pacientes, asegurando una coordinación sin intermediarios y una llegada más rápida a las instalaciones adecuadas. Al analizar la ubicación y las necesidades específicas del paciente en tiempo real, facilitamos que los paramédicos encuentren el hospital más cercano y mejor equipado para cada caso, mejorando significativamente las posibilidades de recuperación."
  );
  const [colorFondo, setColorFondo] = useState("bg-emelth");
  const [imgDemos, setImgDemos] = useState(
    "/img/—Pngtree—3d cute icon element ambulance_14132745 (1).png"
  );
  const changeBlockColor = useRef(null); // Definimos changeBlockColor como useRef

  const cambiarTexto = (opcion) => {
    switch (opcion) {
      case 1:
        setTextoH("AGILIZA EL TRASLADO EN");
        setTextoPe("MOMENTOS CRÍTICOS");
        setTextoPt(
          "En el corazón de las operaciones de emergencia, el sistema Emelth acelera el proceso de traslado de pacientes, asegurando una coordinación sin intermediarios y una llegada más rápida a las instalaciones adecuadas. Al analizar la ubicación y las necesidades específicas del paciente en tiempo real, facilitamos que los paramédicos encuentren el hospital más cercano y mejor equipado para cada caso, mejorando significativamente las posibilidades de recuperación."
        );
        setColorFondo("bg-emelth");
        setImgDemos(
          "/img/—Pngtree—3d cute icon element ambulance_14132745 (1).png"
        );
        if (changeBlockColor.current) changeBlockColor.current("#14b8a6");
        break;
      case 2:
        setTextoH("CONECTANDO VIDAS EN");
        setTextoPe("TIEMPO REAL");
        setTextoPt(
          "Con la premisa de que cada segundo cuenta, nuestro software crea una línea de comunicación directa y en tiempo real entre paramédicos y hospitales. Esta conexión inmediata permite el envío de información vital del paciente y los detalles del incidente en el momento crítico, preparando al equipo hospitalario antes de la llegada del paciente y asegurando una respuesta médica rápida y eficaz."
        );
        setColorFondo("bg-pink-600");
        setImgDemos("/img/Healthcare@2x.webp");
        if (changeBlockColor.current) changeBlockColor.current("#db2777");
        break;
      case 3:
        setTextoH("ATENCIÓN A MEDIDA");
        setTextoPe("SOLUCIONES PRECISAS");
        setTextoPt(
          "Reconociendo la unicidad de cada emergencia, nuestro sistema proporciona soluciones personalizadas basadas en la evaluación precisa del estado del paciente. A través de un sofisticado algoritmo, determinamos el destino más adecuado para el paciente, considerando factores como la especialidad médica necesaria y la gravedad de la situación, para ofrecer una atención médica exacta y personalizada."
        );
        setColorFondo("bg-amber-500");
        setImgDemos(
          "/img/—Pngtree—3dc4d three-dimensional medical mobile terminal_8636386 (1).png"
        );
        if (changeBlockColor.current) changeBlockColor.current("#f59e0b");
        break;
      default:
        setTextoH("AGILIZA EL TRASLADO EN");
        setTextoPe("MOMENTOS CRÍTICOS");
        setTextoPt(
          "En el corazón de las operaciones de emergencia, el sistema Emelth acelera el proceso de traslado de pacientes, asegurando una coordinación sin intermediarios y una llegada más rápida a las instalaciones adecuadas. Al analizar la ubicación y las necesidades específicas del paciente en tiempo real, facilitamos que los paramédicos encuentren el hospital más cercano y mejor equipado para cada caso, mejorando significativamente las posibilidades de recuperación."
        );
        setColorFondo("bg-emelth");
        setImgDemos(
          "/img/—Pngtree—3d cute icon element ambulance_14132745 (1).png"
        );
        if (changeBlockColor.current) changeBlockColor.current("#14b8a6");
        break;
    }
  };

  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-center -px-8 pt-44 ${inter.className}  text-slate-800 ${colorFondo} `}
        //className={`flex min-h-[calc(100vh-48px)] flex-col items-center justify-between px-16 py-14 ${inter.className} h-full bg-slate-100 text-slate-800`}
      >
        <AnimatedBackground changeBlockColor={changeBlockColor} />
        <div className=" w-5/6 mb-10 z-10">
          {/* Esto es para web*/}
          <div className="flex flex-col space-y-10 lg:-mt-8">
            <div className="hidden md:flex justify-between 2xl:mb-5 md:mb-8">
              <div className="space-y-5 w-6/12 flex flex-col justify-center">
                <div>
                  <p className="md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-2 font-bold text-slate-100 ">
                    {textoH}
                  </p>
                  <p className="ml-0.5 font-bold text-slate-100  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                    {textoPe}
                  </p>
                </div>

                <p className="w-10/12 md:text-sm  xl:text-base text-slate-100">
                  {textoPt}
                </p>
              </div>

              <img
                className="h-3/12 w-6/12 object-cover min-w-14 max-w-[500px]"
                src={imgDemos}
              ></img>
            </div>
            <div className="hidden md:flex space-x-10 justify-center">
              <button
                onClick={() => cambiarTexto(1)}
                className="h-12 w-12 hover:-translate-y-5 ease-out duration-500"
              >
                <img src="/img/—Pngtree—3d cute icon element ambulance_14132745 (1).png"></img>
              </button>
              <button
                onClick={() => cambiarTexto(2)}
                className="h-12 w-12 hover:-translate-y-5 ease-out duration-500"
              >
                <img src="/img/Healthcare@2x.webp"></img>
              </button>
              <button
                onClick={() => cambiarTexto(3)}
                className="h-12 w-12 hover:-translate-y-5 ease-out duration-500"
              >
                <img src="/img/—Pngtree—3dc4d three-dimensional medical mobile terminal_8636386 (1).png"></img>
              </button>
            </div>
          </div>
          {/* Cierra web */}

          {/* Esto es para movil-Primer div*/}
          <div className=" flex flex-col md:hidden -mt-[4rem] justify-center">
            <div className="justify-between flex flex-col-reverse items-center">
              <div className="space-y-5 w-full flex flex-col items-center">
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 font-bold text-slate-100 text-center">
                    {textoH}
                  </p>
                  <p className="-mx-2 font-bold text-slate-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
                    {textoPe}
                  </p>
                </div>

                <p className="w-11/12 text-sm md:text-base lg:text-lg text-slate-100 text-center ">
                  {textoPt}
                </p>
              </div>

              <img
                className="h-full w-6/12 object-cover min-h-60 min-w-52"
                src={imgDemos}
              ></img>
            </div>
            <div className="space-x-10 justify-center mt-10 flex ">
              <button
                onClick={() => cambiarTexto(1)}
                className="h-12 w-12 hover:-translate-y-5 ease-out duration-500"
              >
                <img src="/img/—Pngtree—3d cute icon element ambulance_14132745 (1).png"></img>
              </button>
              <button
                onClick={() => cambiarTexto(2)}
                className="h-12 w-12 hover:-translate-y-5 ease-out duration-500"
              >
                <img src="/img/Healthcare@2x.webp"></img>
              </button>
              <button
                onClick={() => cambiarTexto(3)}
                className="h-12 w-12 hover:-translate-y-5 ease-out duration-500"
              >
                <img src="/img/—Pngtree—3dc4d three-dimensional medical mobile terminal_8636386 (1).png"></img>
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default function HomeAll() {
  return (
    <SessionProvider>
      <Home />
    </SessionProvider>
  );
}
