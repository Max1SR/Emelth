"use client";

import React, { useRef, useEffect } from "react";
import { Inter } from "next/font/google";
import "@/styles/iniciarsesion.css";
import BubbleBackground from "@/components/bubbleBackgrund";


const inter = Inter({ subsets: ["latin"] });

export default function SignInSignUp() {
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);
  const closeBtnRef = useRef(null);
  const closeBtn2Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const registerBtn = registerBtnRef.current;
    const loginBtn = loginBtnRef.current;
    const closeBtn = closeBtnRef.current;
    const closeBtn2 = closeBtn2Ref.current;

    const handleRegisterClick = () => {
      container.classList.add("active");
    };

    const handleLoginClick = () => {
      container.classList.remove("active");
    };

    const handleCloseClick = () => {
      window.location.href = "/";
    };

    registerBtn.addEventListener("click", handleRegisterClick);
    loginBtn.addEventListener("click", handleLoginClick);
    closeBtn.addEventListener("click", handleCloseClick);
    closeBtn2.addEventListener("click", handleCloseClick);

    // Cleanup event listeners on component unmount
    return () => {
      registerBtn.removeEventListener("click", handleRegisterClick);
      loginBtn.removeEventListener("click", handleLoginClick);
      closeBtn.removeEventListener("click", handleCloseClick);
      closeBtn2.removeEventListener("click", handleCloseClick);
    };
  }, []);

  return (
    <main>
      <div className="-ml-96">
        <BubbleBackground />
      </div>
      <div className="pop-up" id="pop-up" ref={containerRef}>
        <div className="form-container sign-up ">
          <div className="close-btn" ref={closeBtnRef}>
            &times;
          </div>
          <form>
            <h1 className="text-3xl font-bold text-slate-900">
              Crea una cuenta
            </h1>
            <span className="text-slate-900">
              Registra tu nombre, email y una contraseña
            </span>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <button>Registrate</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1 className="text-3xl font-bold text-slate-900">
              Iniciar Sesión
            </h1>
            <span className="text-xl text-slate-900">
              Ingresa tu email y contraseña para iniciar sesión
            </span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <a href="#">Olvidaste tu contraseña?</a>
            <button>Iniciar Sesión</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="close-btn2" ref={closeBtn2Ref}>
            &times;
          </div>
          <div className="toggle1">
            <div className="toggle-panel toggle-left">
              <h1 className="text-3xl font-bold">Bienvenido de Nuevo!</h1>
              <p>
                Ingrese sus datos personales para utilizar todas las funciones
                del sitio
              </p>
              <button className="hidde" id="login" ref={loginBtnRef}>
                Inicia Sesión
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1 className="text-3xl font-bold">Hola, bienvenid@!</h1>
              <p>
                Regístrese con sus datos personales para utilizar todas las
                funciones del sitio
              </p>
              <button className="hidde" id="register" ref={registerBtnRef}>
                Registrate
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
