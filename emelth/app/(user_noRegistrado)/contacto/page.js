import React from "react";
import { Inter } from "next/font/google";
import Layout from "@/components/components_usu_no_registrado/layout";
import "@/styles/styles.css";
import BubbleBackground from "@/components/bubbleBackgrund";

const inter = Inter({ subsets: ["latin"] });

export default function contacto() {
  return (
    <Layout>
      <BubbleBackground />
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-16 pt-14 ${inter.className} h-full sec2 bg-slate-100 text-slate-800`}
      >
        <div className="contact-container">
          <div className="contactInfo">
            <div>
              <h2>Información de Contacto</h2>
              <ul className="info">
                <li>
                  <span>
                    <img src="img/location.png" />
                  </span>
                  <span>
                    Mar Mediterraneo 227 Col. Popotla
                    <br />
                    Miguel Hidalgo, CDMX 11400
                  </span>
                </li>
                <li>
                  <span>
                    <img src="img/mail.png" />
                  </span>
                  <span>emelth@gmail.com</span>
                </li>
                <li>
                  <span>
                    <img src="img/call.png" />
                  </span>
                  <span>5544332211</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="contactForm" id="contactForm">
            <h2>
              Tienes dudas o problemas sobre el software? Envía un mensaje...
            </h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" required />
                <span>Nombre</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required />
                <span>Apellido</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required />
                <span>Correo Electronico</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required />
                <span>Telefono</span>
              </div>
              <div className="inputBox w100">
                <textarea required></textarea>
                <span>Escribe tu mensaje aqui...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Enviar" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
