import React from "react";
import { Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout";
import Header from "@/components/components_usu_no_registrado/header";
import Escudo from "@/components/iconos/escudo";

const inter = Inter({ subsets: ["latin"] });

export default function signin_signup() {
  const handleRegister = () => {
    const container = document.getElementById("container");
    container.classList.add("active");
  };

  const handleLogin = () => {
    const container = document.getElementById("container");
    container.classList.remove("active");
  };

  return (
    <div>
      <header className="bg-white shadow text-slate-600">
        <div className="flex h-14 items-center px-10 space-x-4">
          <a href="/">
            <Escudo className="h-7 w-7"></Escudo>
          </a>
          <p className="text-xl text-gray-900 font-medium">Emelth</p>
        </div>
      </header>
      <main
        className={`items-center justify-between px-16 py-14 ${inter.className} h-[93vh] bg-slate-100 text-slate-800`}
      >
        <div className="flex flex-row h-full ">
          <div className="w-1/2 h-full bg-slate-200 p-24 px-32 rounded-l-3xl flex flex-col justify-center">
            <form className="space-y-8">
              <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-semibold">Iniciar sesión</h1>
                <p className="text-base font-medium text-slate-600">
                  Bienvenido de nuevo
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="form-heading">
                  <p className="heading-input">Correo electrónico</p>
                </div>
                <input
                  type="email"
                  placeholder="Escriba su correo electrónico"
                  className="h-9 rounded-md px-3"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="form-heading">
                  <p className="heading-input">Contraseña</p>
                </div>
                <input
                  type="password"
                  placeholder="Escriba su contraseña"
                  className="h-9 rounded-md px-3"
                />
                <a
                  href="#"
                  className="text-sm ml-auto hover:text-lime-600 text-lime-900  hover:underline"
                >
                  Olvidé mi contraseña
                </a>
              </div>
              <button className="w-full h-9 bg-green-600 rounded-md">
                Ingresar
              </button>
              <div className="flex space-x-2 text-sm">
                <h1>¿Aún no tienes una cuenta?</h1>
                <a href="/" className="hover:text-lime-600">
                  Registrate
                </a>
              </div>
            </form>
          </div>
          <div className="w-1/2 h-full bg-slate-800 text-slate-100 p-24 rounded-r-3xl flex flex-col justify-center space-y-5">
            <div className="flex space-x-2 ">
              <Escudo className="h-8 w-8"></Escudo>
              <p className="text-2xl font-medium">Emelth</p>
            </div>
            <p className="text-4xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              scelerisque pellentesque urna vel feugiat. Cras euismod hendrerit
              ligula, ut commodo massa volutpat eu. Donec at viverra nibh.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
