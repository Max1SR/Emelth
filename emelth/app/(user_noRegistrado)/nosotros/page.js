"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout";
import "@/styles/styles.css";
import { Carousel } from "flowbite-react";
import BubbleBackground from "@/components/bubbleBackgrund";

const inter = Inter({ subsets: ["latin"] });

export default function Nosotros() {

  return (
    <Layout>
      <BubbleBackground />
      <main
        className={`flex min-h-screen flex-col items-center px-16 py-14 ${inter.className} h-full sec2 text-slate-800`}
      >
        <div class="img-slider">
        <div class="slide activo">
          <img src="1.jpg" alt="" />
          <div class="info">
            <h2>Nuestra Misión</h2>
            <p>
              "Salvar vidas a través de la innovación."<br />Nuestra misión es
              revolucionar la manera en que los servicios de emergencia
              responden a las crisis. Desarrollamos soluciones tecnológicas que
              aceleran la comunicación y coordinación entre paramédicos y
              hospitales, asegurando que cada paciente reciba la atención rápida
              y especializada que necesita en momentos críticos.
            </p>
          </div>
          <dotlottie-player
            class="animationdot1"
            src="https://lottie.host/d200cbba-5dab-4256-ba61-ed7eb8422af7/rb5JaJMaXL.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div class="slide">
          <img src="2.jpg" alt="" />
          <div class="info">
            <h2>Nuestra Visión</h2>
            <p>
              En Emelth, aspiramos a ser pioneros en la integración de
              soluciones tecnológicas en el campo de la atención médica de
              emergencia, no solo en nuestras comunidades locales de Gustavo A.
              Madero y Venustiano Carranza, sino a nivel nacional. Visualizamos
              un mundo en el que cada llamada de emergencia se responde con la
              velocidad y precisión que la tecnología avanzada proporciona.
            </p>
          </div>
          <dotlottie-player
            class="animationdot2"
            src="https://lottie.host/1c64c34b-1eeb-450f-b811-c513c67bd0ba/kVK6bkmuHA.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div class="slide">
          <img src="3.jpg" alt="" />
          <div class="info">
            <h2>Innovación que cura</h2>
            <p>
              En Emelth, creemos que la tecnología tiene el poder de transformar
              radicalmente la atención en emergencias médicas. Nuestra empresa
              fue fundada con la visión de salvar vidas mediante el uso de
              soluciones tecnológicas avanzadas que optimizan y agilizan la
              comunicación entre los equipos de emergencia y las instituciones
              hospitalarias.
            </p>
          </div>
          <dotlottie-player
            class="animationdot3"
            src="https://lottie.host/e8f7dc27-e068-4419-bb27-8eb9eef463c4/7MN2AfzPkj.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div class="slide">
          <img src="4.jpg" alt="" />
          <div class="info">
            <h2>Ubicando la ayuda</h2>
            <p class="responsive-text1">
              Utilizamos las últimas innovaciones en geolocalización para
              desarrollar un software que no solo responde eficazmente en
              momentos críticos, sino que eleva la calidad del cuidado médico al
              conectar de manera más efectiva a paramédicos y hospitales.
              Nuestra plataforma asegura que cada paciente reciba la atención
              adecuada rápidamente, en el lugar correcto y en el momento
              preciso.
            </p>
          </div>
          <dotlottie-player
            class="animationdot4"
            src="https://lottie.host/43409ce2-23e6-443f-b449-99e86304d804/L9FfxkhoW3.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
          <dotlottie-player
            class="animationdot5"
            src="https://lottie.host/a1053985-c1d4-4121-9e19-1f74b363dc3b/Rcsk2J4xpq.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div class="slide">
          <img src="5.jpg" alt="" />
          <div class="info">
            <h2>Mirando hacia el Futuro</h2>
            <p class="responsive-text2">
              Con cada actualización de nuestro software y cada nuevo servicio
              que implementamos, nos esforzamos por estar a la vanguardia de la
              tecnología médica de emergencia. Mientras expandimos nuestra
              cobertura y capacidad, nuestro objetivo sigue siendo claro:
              innovar para mejorar la vida de las personas en sus momentos más
              vulnerables. En Emelth buscamos crear un futuro donde la atención
              médica de emergencia sea más rápida, segura y eficaz.
            </p>
            <dotlottie-player
              class="animationdot6"
              src="https://lottie.host/225e3f4f-ed5a-420a-883c-4304397c60f2/CU5Qji6Sbz.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
        <div class="navigation">
          <div class="btn-slide activo"></div>
          <div class="btn-slide"></div>
          <div class="btn-slide"></div>
          <div class="btn-slide"></div>
          <div class="btn-slide"></div>
        </div>
      </div>
      </main>
    </Layout>
  );
}
