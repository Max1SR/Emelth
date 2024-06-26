"use client";

import React, { useState, useRef, useEffect } from "react";
import { Asap_Condensed, Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout";
import "@/styles/styles.css";
import { Player } from "@lottiefiles/react-lottie-player";
import BubbleBackground from "@/components/bubbleBackgrund";

const inter = Inter({ subsets: ["latin"] });

export default function Nosotros() {
  const slideRefs = useRef([]);
  const btnRefs = useRef([]);

  useEffect(() => {
    let currentSlide = 0;

    // Javascript for image slider manual navigation
    const manualNav = (manual) => {
      slideRefs.current.forEach((slide, i) => {
        if (slide) {
          slide.classList.remove("activo");
        }
        if (btnRefs.current[i]) {
          btnRefs.current[i].classList.remove("activo");
        }
        if (i === manual) {
          if (slide) {
            slide.classList.add("activo");
          }
          if (btnRefs.current[i]) {
            btnRefs.current[i].classList.add("activo");
          }
        }
      });
    };

    btnRefs.current.forEach((btn, i) => {
      if (btn) {
        btn.addEventListener("click", () => {
          manualNav(i);
          currentSlide = i;
        });
      }
    });

    // Javascript for image slider autoplay navigation
    const repeat = () => {
      let i = 0;
      const repeater = () => {
        setTimeout(() => {
          const activo = document.getElementsByClassName("activo");
          [...activo].forEach((activoSlide) => {
            activoSlide.classList.remove("activo");
          });
          if (slideRefs.current[i]) {
            slideRefs.current[i].classList.add("activo");
          }
          if (btnRefs.current[i]) {
            btnRefs.current[i].classList.add("activo");
          }
          i++;
          if (i === slideRefs.current.length) {
            i = 0;
          }
          if (i < slideRefs.current.length) {
            repeater();
          }
        }, 10000);
      };
      repeater();
    };
    repeat();

    // Clean up event listeners on component unmount
    return () => {
      btnRefs.current.forEach((btn, i) => {
        if (btn) {
          btn.removeEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
          });
        }
      });
    };
  }, []);

  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center px-16 py-14 ${inter.className} h-full sec2 text-slate-800 `}
      >
        <div className="z-0 absolute">
          <BubbleBackground />
        </div>
        <div className="img-slider z-10">
          <div
            className="slide activo"
            ref={(el) => (slideRefs.current[0] = el)}
          >
            <img src="1.jpg" alt="" />
            <div className="info">
              <h2>Nuestra Misión</h2>
              <p>
                "Salvar vidas a través de la innovación."
                <br />
                Nuestra misión es revolucionar la manera en que los servicios de
                emergencia responden a las crisis. Desarrollamos soluciones
                tecnológicas que aceleran la comunicación y coordinación entre
                paramédicos y hospitales, asegurando que cada paciente reciba la
                atención rápida y especializada que necesita en momentos
                críticos.
              </p>
            </div>
            <Player
              className="animationdot1"
              src="https://lottie.host/d200cbba-5dab-4256-ba61-ed7eb8422af7/rb5JaJMaXL.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></Player>
          </div>
          <div className="slide" ref={(el) => (slideRefs.current[1] = el)}>
            <img src="2.jpg" alt="" />
            <div className="info">
              <h2>Nuestra Visión</h2>
              <p>
                En Emelth, aspiramos a ser pioneros en la integración de
                soluciones tecnológicas en el campo de la atención médica de
                emergencia, no solo en nuestras comunidades locales de Gustavo
                A. Madero y Venustiano Carranza, sino a nivel nacional.
                Visualizamos un mundo en el que cada llamada de emergencia se
                responde con la velocidad y precisión que la tecnología avanzada
                proporciona.
              </p>
            </div>
            <Player
              className="animationdot2"
              src="https://lottie.host/1c64c34b-1eeb-450f-b811-c513c67bd0ba/kVK6bkmuHA.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></Player>
          </div>
          <div className="slide" ref={(el) => (slideRefs.current[2] = el)}>
            <img src="3.jpg" alt="" />
            <div className="info">
              <h2>Innovación que cura</h2>
              <p>
                En Emelth, creemos que la tecnología tiene el poder de
                transformar radicalmente la atención en emergencias médicas.
                Nuestra empresa fue fundada con la visión de salvar vidas
                mediante el uso de soluciones tecnológicas avanzadas que
                optimizan y agilizan la comunicación entre los equipos de
                emergencia y las instituciones hospitalarias.
              </p>
            </div>
            <Player
              className="animationdot3"
              src="https://lottie.host/e8f7dc27-e068-4419-bb27-8eb9eef463c4/7MN2AfzPkj.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></Player>
          </div>
          <div className="slide" ref={(el) => (slideRefs.current[3] = el)}>
            <img src="4.jpg" alt="" />
            <div className="info">
              <h2>Ubicando la ayuda</h2>
              <p className="responsive-text1">
                Utilizamos las últimas innovaciones en geolocalización para
                desarrollar un software que no solo responde eficazmente en
                momentos críticos, sino que eleva la calidad del cuidado médico
                al conectar de manera más efectiva a paramédicos y hospitales.
                Nuestra plataforma asegura que cada paciente reciba la atención
                adecuada rápidamente, en el lugar correcto y en el momento
                preciso.
              </p>
            </div>
            <Player
              className="animationdot4"
              src="https://lottie.host/43409ce2-23e6-443f-b449-99e86304d804/L9FfxkhoW3.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></Player>
            <Player
              className="animationdot5"
              src="https://lottie.host/a1053985-c1d4-4121-9e19-1f74b363dc3b/Rcsk2J4xpq.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></Player>
          </div>
          <div className="slide" ref={(el) => (slideRefs.current[4] = el)}>
            <img src="5.jpg" alt="" />
            <div className="info">
              <h2>Mirando hacia el Futuro</h2>
              <p className="responsive-text2">
                Con cada actualización de nuestro software y cada nuevo servicio
                que implementamos, nos esforzamos por estar a la vanguardia de
                la tecnología médica de emergencia. Mientras expandimos nuestra
                cobertura y capacidad, nuestro objetivo sigue siendo claro:
                innovar para mejorar la vida de las personas en sus momentos más
                vulnerables. En Emelth buscamos crear un futuro donde la
                atención médica de emergencia sea más rápida, segura y eficaz.
              </p>
              <Player
                className="animationdot6"
                src="https://lottie.host/225e3f4f-ed5a-420a-883c-4304397c60f2/CU5Qji6Sbz.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></Player>
            </div>
          </div>
          <div className="navigation">
            <div
              className="btn-slide activo"
              ref={(el) => (btnRefs.current[0] = el)}
            ></div>
            <div
              className="btn-slide"
              ref={(el) => (btnRefs.current[1] = el)}
            ></div>
            <div
              className="btn-slide"
              ref={(el) => (btnRefs.current[2] = el)}
            ></div>
            <div
              className="btn-slide"
              ref={(el) => (btnRefs.current[3] = el)}
            ></div>
            <div
              className="btn-slide"
              ref={(el) => (btnRefs.current[4] = el)}
            ></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
