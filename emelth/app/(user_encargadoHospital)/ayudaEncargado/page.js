"use client";
import React, { useState } from "react";
import "@/styles/admin.css";
import Layout from "@/components/components_encargado/layout";
import { IoMedical, IoChatbubbles, IoMedkit } from "react-icons/io5";

export default function Ayuda() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabIndex) => {
    if (activeTab === tabIndex) {
      setActiveTab(null);
    } else {
      setActiveTab(tabIndex);
    }
  };

  return (
    <Layout>
      <main className={`min-h-screen h-full bg-slate-100 text-slate-800`}>
        <section id="help" className=" h-full relative">
          <div className="popup-container2" id="blur2">
            <div className="cardbox">
              <div className="card" onClick={() => toggleTab(1)}>
                <div>
                  <div className="numbers">Ambulancia</div>
                  <div className="cardName">Video Tutorial</div>
                </div>
                <div className="iconBx">
                  <IoMedical />
                </div>
              </div>
              <div className="card" onClick={() => toggleTab(2)}>
                <div>
                  <div className="numbers">Hospitales</div>
                  <div className="cardName">Video Tutorial</div>
                </div>
                <div className="iconBx">
                  <IoMedkit />
                </div>
              </div>
              <div className="card" onClick={() => toggleTab(3)}>
                <div>
                  <div className="numbers">Peticiones</div>
                  <div className="cardName">Video Tutorial</div>
                </div>
                <div className="iconBx">
                  <IoChatbubbles />
                </div>
              </div>
            </div>
            
            <h1 className="ml-11 font-bold text-4xl text-zinc-500">
              Preguntas Frecuentes
            </h1>
            <div class="details2">
              <div class="contenedor">
                <div class="tab1">
                  <input type="radio" name="acc" id="acc1" />
                  <label for="acc1">
                    <h2 className="h-full">01</h2>
                    <h3>Pregunta 1?</h3>
                  </label>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut faucibus felis vestibulum, bibendum erat eu, egestas
                      massa. Pellentesque eu gravida massa. Quisque ac magna
                      laoreet, mattis mi non, placerat erat. Nunc sagittis arcu
                      ut justo interdum, porta semper purus tempus. Suspendisse
                      potenti. Sed viverra magna eu libero sagittis eleifend.
                      Proin at felis at ex eleifend tristique sed at lacus. Sed
                      vehicula nulla sed ipsum tincidunt efficitur.
                    </p>
                  </div>
                </div>
                <div class="tab1">
                  <input type="radio" name="acc" id="acc2" />
                  <label for="acc2">
                    <h2>02</h2>
                    <h3>Pregunta 2?</h3>
                  </label>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut faucibus felis vestibulum, bibendum erat eu, egestas
                      massa. Pellentesque eu gravida massa. Quisque ac magna
                      laoreet, mattis mi non, placerat erat. Nunc sagittis arcu
                      ut justo interdum, porta semper purus tempus. Suspendisse
                      potenti. Sed viverra magna eu libero sagittis eleifend.
                      Proin at felis at ex eleifend tristique sed at lacus. Sed
                      vehicula nulla sed ipsum tincidunt efficitur. Etiam
                      dapibus quis erat in suscipit. Suspendisse tortor risus,
                      semper sit amet volutpat non, imperdiet vel libero. Ut
                      vitae sollicitudin eros, sed viverra tortor. Praesent
                      sapien sapien, pulvinar eget magna vitae, tempus dictum
                      arcu. Phasellus ut elit maximus, vestibulum purus quis,
                      commodo mauris.
                    </p>
                  </div>
                </div>
                <div class="tab1">
                  <input type="radio" name="acc" id="acc3" />
                  <label for="acc3">
                    <h2>03</h2>
                    <h3>Pregunta 3?</h3>
                  </label>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut faucibus felis vestibulum, bibendum erat eu, egestas
                      massa. Pellentesque eu gravida massa. Quisque ac magna
                      laoreet, mattis mi non, placerat erat. Nunc sagittis arcu
                      ut justo interdum, porta semper purus tempus. Suspendisse
                      potenti. Sed viverra magna eu libero sagittis eleifend.
                      Proin at felis at ex eleifend tristique sed at lacus. Sed
                      vehicula nulla sed ipsum tincidunt efficitur.
                    </p>
                  </div>
                </div>
                <div class="tab1">
                  <input type="radio" name="acc" id="acc4" />
                  <label for="acc4">
                    <h2>04</h2>
                    <h3>Pregunta 4?</h3>
                  </label>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut faucibus felis vestibulum, bibendum erat eu, egestas
                      massa. Pellentesque eu gravida massa.{" "}
                    </p>
                  </div>
                </div>
                <div class="tab1">
                  <input type="radio" name="acc" id="acc5" />
                  <label for="acc5">
                    <h2>05</h2>
                    <h3>Pregunta 5?</h3>
                  </label>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut faucibus felis vestibulum, bibendum erat eu, egestas
                      massa. Pellentesque eu gravida massa.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
