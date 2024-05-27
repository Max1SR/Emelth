"use client";

import React, { useEffect, useCallback, useRef } from "react";
import "../../styles/styles.css";
import anime from "../../lib/anims/anime.min.js";
// import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
// import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
// import "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";


export default function page() {
  // Animación de barra de navegación
  const markerRef = useRef(null);
  const navRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const marker = markerRef.current;
    const nav = navRef.current;
    const items = itemRefs.current;

    nav.onclick = function () {
      marker.classList.toggle("change");
    };

    function indicator(e) {
      marker.style.left = e.offsetLeft + "px";
      marker.style.width = e.offsetWidth + "px";
      marker.style.display = "block";
    }

    items.forEach((link) => {
      link.addEventListener("click", (e) => {
        indicator(e.target);
        changeMarkerColor();
      });
    });

    function addActiveClass() {
      items.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    }

    items.forEach((i) => i.addEventListener("click", addActiveClass));
    let colors = [
      "#FEA807",
      "#E53A76",
      "#1AB7BC",
      "#ED8200",
      "#CB2361",
      "#0C849A",
      "#96DCF8",
    ];

    function changeMarkerColor() {
      let root = document.documentElement; // Accede al root del documento
      let newColor = colors[Math.floor(Math.random() * colors.length)]; // Selecciona un nuevo color de la lista
      root.style.setProperty("--green", newColor);
    }
  }, []);

  // Animacion slides
  const slideRefs = useRef([]);
  const btnRefs = useRef([]);

  useEffect(() => {
    let currentSlide = 0;

    // Javascript for image slider manual navigation
    var manualNav = function (manual) {
      slideRefs.current.forEach((slide, i) => {
        slide.classList.remove("activo");
        btnRefs.current[i].classList.remove("activo");
        if (i === manual) {
          slide.classList.add("activo");
          btnRefs.current[i].classList.add("activo");
        }
      });
    };

    btnRefs.current.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function (activoClass) {
      let i = 0;
      var repeater = () => {
        setTimeout(function () {
          slideRefs.current[i].classList.remove("activo");
          btnRefs.current[i].classList.remove("activo");
          i++;
          if (slideRefs.current.length === i) {
            i = 0;
          }
          if (i >= slideRefs.current.length) {
            return;
          }
          repeater();
        }, 10000);
      };
      repeater();
    };
    repeat();
  }, []);

  //Animación de cursor
  useEffect(() => {
    let body = document.querySelector("body");
    body.addEventListener(
      "click",
      function (event) {
        let spark = document.createElement("div");
        spark.classList.add("spark");
        body.appendChild(spark);

        spark.style.top = event.clientY - body.offsetTop + "px";
        spark.style.left = event.clientX - body.offsetLeft + "px";
        spark.style.filter = "hue-rotate(" + Math.random() * 360 + "deg)";

        for (var s = 0; s <= 7; s++) {
          let span = document.createElement("span");
          span.style.transform = "rotate(" + s * 45 + "deg)";
          spark.appendChild(span);
        }

        setTimeout(function () {
          spark.remove();
        }, 1000);
      },
      true
    );
  });

  //Animación de barra de slides pantalla principal
    const doctorRef = useRef(null);
    const secRef = useRef(null);
    const toggleMenuRef = useRef(null);
    const navigationRef = useRef(null);
    const textBoxRef = useRef(null);

    function imgSlider(anything) {
      doctorRef.current.src = anything;
    }

    function changeBgColor(color) {
      secRef.current.style.background = color;
    }

    function changestyle(width, height) {
      doctorRef.current.style.width = width;
      doctorRef.current.style.height = height;
    }

    function menuToggle() {
      toggleMenuRef.current.classList.toggle("active");
      navigationRef.current.classList.toggle("active");
    }

    function changeTextContent(h2Text, spanText, pText) {
      useEffect(() => {
        // Cambia el texto principal del h2, excluyendo el span
        const h2 = document.querySelector(".textBox h2");
        if (h2) {
          h2.childNodes[0].nodeValue = h2Text + " ";
        }

        // Cambia el texto del span dentro del h2
        const span = document.querySelector(".textBox h2 span");
        if (span) {
          span.innerText = spanText;
        }

        // Cambia el texto del párrafo
        const p = document.querySelector(".textBox p");
        if (p) {
          p.innerHTML = pText;
        }
      }, []); // El segundo argumento vacío asegura que se ejecute solo una vez al montar el componente
    }
    

    
  // const doctorRef = useRef(null);
  // function imgSlider(anything) {
  //     doctorRef.current.src = anything;
  // }

  // const changeBgColor = useCallback((color) => {
  //   const sec = document.querySelector(".sec");
  //   sec.style.background = color;
  // }, []);

  // const changestyle = useCallback((width, height) => {
  //   const img = document.querySelector(".doctor");
  //   img.style.width = width;
  //   img.style.height = height;
  // }, []);

  // const menuToggle = useCallback(() => {
  //   const toggleMenu = document.querySelector(".toggleMenu");
  //   const navigation = document.querySelector(".navigation");
  //   toggleMenu.classList.toggle("active");
  //   navigation.classList.toggle("active");
  // }, []);

  // const changeTextContent = useCallback((h2Text, spanText, pText) => {
  //   // Cambia el texto principal del h2, excluyendo el span
  //   let h2 = document.querySelector(".textBox h2");
  //   h2.childNodes[0].nodeValue = h2Text + " ";

  //   // Cambia el texto del span dentro del h2
  //   document.querySelector(".textBox h2 span").innerText = spanText;

  //   // Cambia el texto del párrafo
  //   document.querySelector(".textBox p").innerHTML = pText;
  // }, []);

  //Animación de fondo animado de pantalla principal
  const containerRef = useRef(null);
  const blocks = []; 

  useEffect(() => {
    const container = containerRef.current;

    for (var a = 0; a <= 50; a++) {
      const block = document.createElement("div");
      block.classList.add("block");

      if (window.innerWidth > 1920) {
        block.style.left = "1150px";
        block.style.top = "350px";
      } else {
        block.style.left = (window.innerWidth / 1920) * 1450 + "px";
        block.style.top = (window.innerWidth / 1920) * 450 + "px";
      }

      container.appendChild(block);
      blocks.push(block);
    }

    function animateBlocks() {
      anime({
        targets: blocks,
        translateX: function () {
          return anime.random(-1100, 300);
        },
        translateY: function () {
          return anime.random(-500, 500);
        },
        scale: function () {
          return anime.random(1, 5);
        },

        easing: "linear",
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks,
      });
    }
    animateBlocks();

    // Función para cambiar el color de los bloques
  }, []);
  function changeBlockColor(color) {
    blocks.forEach((bloque) => {
      bloque.style.transition = "background-color 0.5s"; // Agregamos la transición
      bloque.style.backgroundColor = color;
    });
  }

  //Animación de pop up de hospitales
  const blurRef = useRef(null);
  const popupRef = useRef(null);

  // useEffect(() => {
  //   function toggle() {
  //     blurRef.current.classList.toggle("active");
  //     popupRef.current.classList.toggle("active");
  //   }
  //   toggle();
  // }, []);

  return (
    <body>
      <section classlist="sec" id="Home" ref={secRef}>
        <div classlist="container" ref={containerRef}></div>

        <header>
          <div classlist="logo">
            {/* <img
              alt="logo del software"
              src="/img/logogris.png"
            /> */}
          </div>
          <nav ref={navRef}>
            <div id="indicator" ref={markerRef}></div>
            <a href="#Home" ref={(el) => (itemRefs.current[0] = el)}>
              Inicio
            </a>
            <a href="#maphospitals" ref={(el) => (itemRefs.current[1] = el)}>
              Hospitales
            </a>
            <a href="#info" ref={(el) => (itemRefs.current[2] = el)}>
              Nosotros
            </a>
            <a href="#contact" ref={(el) => (itemRefs.current[3] = el)}>
              Contacto
            </a>
            <button classlist="Perfil">
              <a
                href="IniciarSesion.html"
                ref={(el) => (itemRefs.current[4] = el)}
              >
                Perfil
              </a>
            </button>
          </nav>
        </header>

        <div classlist="content">
          <div classlist="textBox">
            <h2>
              Agiliza el traslado en
              <br />
              <span>momentos críticos.</span>
            </h2>
            <p>
              En el corazón de las operaciones de emergencia, el sistema Emelth
              acelera el proceso de traslado de pacientes, asegurando una
              coordinación sin intermediarios y una llegada más rápida a las
              instalaciones adecuadas. Al analizar la ubicación y las
              necesidades específicas del paciente en tiempo real, facilitamos
              que los paramédicos encuentren el hospital más cercano y mejor
              equipado para cada caso, mejorando significativamente las
              posibilidades de recuperación.
            </p>
          </div>
          <div classlist="imgBox">
            <img
              src="/img/—Pngtree—3d cute icon element ambulance_14132745 (1).png"
              classlist="doctor"
              ref={doctorRef}
            />
          </div>
        </div>
        <ul classlist="thumb">
          <li>
            <img
              src="/img/—Pngtree—3d cute icon element ambulance_14132745 (1).png"
              onClick={() => {
                imgSlider(
                  "/img/—Pngtree—3d cute icon element ambulance_14132745 (1).png"
                );
                changeBgColor("#1AB7BC");
                changestyle("560px", "560px");
                changeBlockColor("#1AB7BC");
                changeTextContent(
                  "Agiliza el traslado en",
                  "momentos críticos.",
                  "En el corazón de las operaciones de emergencia, nuestro sistema acelera el proceso de traslado de pacientes, asegurando una coordinación sin intermediarios y una llegada más rápida a las instalaciones adecuadas. Al analizar la ubicación y las necesidades específicas del paciente en tiempo real, facilitamos que los paramédicos encuentren el hospital más cercano y mejor equipado para cada caso, mejorando significativamente las posibilidades de recuperación."
                );
              }}
            />
          </li>
          <li>
            <img
              src="/img/Healthcare@2x.webp"
              onClick={() => {
                imgSlider("/img/Healthcare@2x.webp");
                changeBgColor("#E53A76");
                changestyle("460px", "460px");
                changeBlockColor("#E53A76");
                changeTextContent(
                  "Conectando Vidas en",
                  "Tiempo Real.",
                  "Con la premisa de que cada segundo cuenta, nuestro software crea una línea de comunicación directa y en tiempo real entre paramédicos y hospitales. Esta conexión inmediata permite el envío de información vital del paciente y los detalles del incidente en el momento crítico, preparando al equipo hospitalario antes de la llegada del paciente y asegurando una respuesta médica rápida y eficaz."
                );
              }}
            />
          </li>
          <li>
            <img
              src="/img/—Pngtree—3dc4d three-dimensional medical mobile terminal_8636386 (1).png"
              onClick={() => {
                imgSlider(
                  "/img/—Pngtree—3dc4d three-dimensional medical mobile terminal_8636386 (1).png"
                );
                changeBgColor("#FEA807");
                changestyle("560px", "560px");
                changeBlockColor("#FEA807");
                changeTextContent(
                  "Atención a medida",
                  "soluciones precisas.",
                  "Reconociendo la unicidad de cada emergencia, nuestro sistema proporciona soluciones personalizadas basadas en la evaluación precisa del estado del paciente. A través de un sofisticado algoritmo, determinamos el destino más adecuado para el paciente, considerando factores como la especialidad médica necesaria y la gravedad de la situación, para ofrecer una atención médica exacta y personalizada."
                );
              }}
            />
          </li>
        </ul>
      </section>

      <section classlist="sec2" id="maphospitals">
        <div classlist="popup-container" id="blur">
          <div classlist="bubble-container">
            <div classlist="particles">
              <span particle="--i:11;"></span>
              <span particle="--i:12;"></span>
              <span particle="--i:24;"></span>
              <span particle="--i:10;"></span>
              <span particle="--i:14;"></span>
              <span particle="--i:23;"></span>
              <span particle="--i:18;"></span>
              <span particle="--i:16;"></span>
              <span particle="--i:19;"></span>
              <span particle="--i:20;"></span>
              <span particle="--i:22;"></span>
              <span particle="--i:25;"></span>
              <span particle="--i:18;"></span>
              <span particle="--i:21;"></span>
              <span particle="--i:13;"></span>
              <span particle="--i:15;"></span>
              <span particle="--i:26;"></span>
              <span particle="--i:17;"></span>
              <span particle="--i:13;"></span>
              <span particle="--i:28;"></span>
              <span particle="--i:11;"></span>
              <span particle="--i:12;"></span>
              <span particle="--i:24;"></span>
              <span particle="--i:10;"></span>
              <span particle="--i:14;"></span>
              <span particle="--i:23;"></span>
              <span particle="--i:18;"></span>
              <span particle="--i:16;"></span>
              <span particle="--i:19;"></span>
              <span particle="--i:20;"></span>
              <span particle="--i:22;"></span>
              <span particle="--i:25;"></span>
              <span particle="--i:18;"></span>
              <span particle="--i:21;"></span>
              <span particle="--i:13;"></span>
              <span particle="--i:15;"></span>
              <span particle="--i:26;"></span>
              <span particle="--i:17;"></span>
              <span particle="--i:13;"></span>
              <span particle="--i:28;"></span>
            </div>
          </div>
          <div classlist="concept concept-five">
            <h1 classlist="word">
              <span classlist="char">H</span>
              <span classlist="char">O</span>
              <span classlist="char">S</span>
              <span classlist="char">P</span>
              <span classlist="char">I</span>
              <span classlist="char">T</span>
              <span classlist="char">A</span>
              <span classlist="char">L</span>
              <span classlist="char">E</span>
              <span classlist="char">S</span>
            </h1>
          </div>

          <div classlist="cards">
            <div classlist="card">
              <div classlist="face explanation">
                <div classlist="contenido">
                  <h1>Ubicaciones</h1>
                  <p>
                    Explora la ubicación exacta de los centros médicos que usan
                    nuestro software, listos para proporcionarte atención
                    especializada y rápida en situaciones críticas.
                  </p>
                </div>
              </div>
            </div>

            <div classlist="card">
              <div classlist="face face1">
                <div classlist="contenido">
                  <img src="/img/HGVilla.png" />
                </div>
              </div>
              <div classlist="face face2">
                <div classlist="contenido">
                  <h3>
                    Hospital General
                    <br />
                    La Villa
                  </h3>
                  <button
                    onClick={() => {
                      toggle("blur", "popup1");
                    }}
                  >
                    Ver Mapa
                  </button>
                </div>
              </div>
            </div>

            <div classlist="card">
              <div classlist="face face1">
                <div classlist="contenido">
                  <img src="/img/HGTicoman.png" />
                </div>
              </div>
              <div classlist="face face2">
                <div classlist="contenido">
                  <h3>Hospital General De Ticoman</h3>
                  <button
                    onClick={() => {
                      toggle("blur", "popup2");
                    }}
                  >
                    Ver Mapa
                  </button>
                </div>
              </div>
            </div>

            <div classlist="card">
              <div classlist="face face1">
                <div classlist="contenido">
                  <img src="/img/HPSanJuan.png" />
                </div>
              </div>
              <div classlist="face face2">
                <div classlist="contenido">
                  <h3>Hospital San Juan de Aragon</h3>
                  <button
                    onClick={() => {
                      toggle("blur", "popup3");
                    }}
                  >
                    Ver Mapa
                  </button>
                </div>
              </div>
            </div>

            <div classlist="card">
              <div classlist="face face1">
                <div classlist="contenido">
                  <img src="/img/HGLaVilla.png" />
                </div>
              </div>
              <div classlist="face face2">
                <div classlist="contenido">
                  <h3>
                    Hospital Pediatrico <br />
                    La Villa
                  </h3>
                  <button
                    onClick={() => {
                      toggle("blur", "popup4");
                    }}
                  >
                    Ver Mapa
                  </button>
                </div>
              </div>
            </div>

            <div classlist="card">
              <div classlist="face face1">
                <div classlist="contenido">
                  <img src="/img/HMICuautepec.png" />
                </div>
              </div>
              <div classlist="face face2">
                <div classlist="contenido">
                  <h3>Hospital Materno Infantil Cuautepec</h3>
                  <button
                    onClick={() => {
                      toggle("blur", "popup5");
                    }}
                  >
                    Ver Mapa
                  </button>
                </div>
              </div>
            </div>

            <div classlist="card">
              <div classlist="face face1">
                <div classlist="contenido">
                  <img src="/img/HGCuautepec.png" />
                </div>
              </div>
              <div classlist="face face2">
                <div classlist="contenido">
                  <h3>Hospital General de Cuautepec</h3>
                  <button
                    onClick={() => {
                      toggle("blur", "popup6");
                    }}
                  >
                    Ver Mapa
                  </button>
                </div>
              </div>
            </div>

            <div classlist="card">
              <div classlist="face face1">
                <div classlist="contenido">
                  <img src="/img/HGBalbuena.png" />
                </div>
              </div>
              <div classlist="face face2">
                <div classlist="contenido">
                  <h3>Hospital General Balbuena</h3>
                  <button
                    onClick={() => {
                      toggle("blur", "popup7");
                    }}
                  >
                    Ver Mapa
                  </button>
                </div>
              </div>
            </div>

            <div classlist="card">
              <div classlist="face face1">
                <div classlist="contenido">
                  <img src="/img/HPMoctezuma.png" />
                </div>
              </div>
              <div classlist="face face2">
                <div classlist="contenido">
                  <h3>Hospital Pediátrico Moctezuma</h3>
                  <button
                    onClick={() => {
                      toggle("blur", "popup8");
                    }}
                  >
                    Ver Mapa
                  </button>
                </div>
              </div>
            </div>

            <div classlist="card">
              <div classlist="face face1">
                <div classlist="contenido">
                  <img src="/img/HMIInguarán.png" />
                </div>
              </div>
              <div classlist="face face2">
                <div classlist="contenido">
                  <h3>Hospital Materno Infantil Inguarán</h3>
                  <button
                    onClick={() => {
                      toggle("blur", "popup9");
                    }}
                  >
                    Ver Mapa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="popup1">
          <h2>Hospital General La Villa</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.4314623908667!2d-99.10593802496192!3d19.48006438180944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f97fbe62b0e9%3A0xabb0609ca4bde317!2sHospital%20General%20La%20Villa!5e0!3m2!1ses-419!2smx!4v1713073283110!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="#maphospitals"
            onClick={() => {
              toggle("blur", "popup1");
            }}
          >
            Close
          </a>
        </div>

        <div id="popup2">
          <h2>Hospital General De Ticoman</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.6297161282364!2d-99.140343824961!3d19.514560381782434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f944116fa79f%3A0xff079cdbaff5ce04!2sHospital%20General%20De%20Ticoman!5e0!3m2!1ses-419!2smx!4v1713076702966!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="#maphospitals"
            onClick={() => {
              toggle("blur", "popup2");
            }}
          >
            Close
          </a>
        </div>

        <div id="popup3">
          <h2>Hospital San Juan de Aragon</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.9425339487766!2d-99.0924246!3d19.458044299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fa5c197490df%3A0xc602e3715db042c5!2sHospital%20Pedi%C3%A1trico%20San%20Juan%20de%20Arag%C3%B3n!5e0!3m2!1ses-419!2smx!4v1713078521422!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="#maphospitals"
            onClick={() => {
              toggle("blur", "popup3");
            }}
          >
            Close
          </a>
        </div>

        <div id="popup4">
          <h2>Hospital Pedriatico La Villa</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.2671681558086!2d-99.1140286!3d19.4871381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f99c98b37591%3A0x66574b34d616dc59!2sHospital%20Pediatrico%20La%20Villa!5e0!3m2!1ses-419!2smx!4v1713079217884!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="#maphospitals"
            onClick={() => {
              toggle("blur", "popup4");
            }}
          >
            Close
          </a>
        </div>

        <div id="popup5">
          <h2>Hospital Materno Infantil Cuautepec</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.042950831159!2d-99.1413008!3d19.5397695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f82778f4eaa1%3A0xa18ad8608165970e!2sHOSPITAL%20MATERNO%20INFANTIL%20CUAUTEPEC!5e0!3m2!1ses-419!2smx!4v1713079261695!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="#maphospitals"
            onClick={() => {
              toggle("blur", "popup5");
            }}
          >
            Close
          </a>
        </div>

        <div id="popup6">
          <h2>Hospital General de Cuautepec</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.4044211224045!2d-99.14018109999999!3d19.5242434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92a0a030aed%3A0xd0f8717615cb942b!2sHospital%20General%20de%20Cuautepec!5e0!3m2!1ses-419!2smx!4v1713079304906!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="#maphospitals"
            onClick={() => {
              toggle("blur", "popup6");
            }}
          >
            Close
          </a>
        </div>

        <div id="popup7">
          <h2>Hospital General Balbuena</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7298584508953!2d-99.1150713!3d19.424074600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1feb0f53abe67%3A0x2f58c064bd172c54!2sHospital%20General%20Balbuena!5e0!3m2!1ses-419!2smx!4v1713079598519!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="#maphospitals"
            onClick={() => {
              toggle("blur", "popup7");
            }}
          >
            Close
          </a>
        </div>

        <div id="popup8">
          <h2>Hospital Pediátrico Moctezuma</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.528529947043!2d-99.0981259!3d19.4327665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc01003ac8ed%3A0x4ba1efdcd0fcaa05!2sHospital%20Pedi%C3%A1trico%20Moctezuma!5e0!3m2!1ses-419!2smx!4v1713079629932!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="#maphospitals"
            onClick={() => {
              toggle("blur", "popup8");
            }}
          >
            Close
          </a>
        </div>

        <div id="popup9">
          <h2>Hospital Materno Infantil Inguarán</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.076990736143!2d-99.1131425!3d19.452247099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f944a78000af%3A0xcd64071d720f2427!2sHospital%20Materno%20Infantil%20Inguar%C3%A1n!5e0!3m2!1ses-419!2smx!4v1713079669494!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="#maphospitals"
            onClick={() => {
              toggle("blur", "popup9");
            }}
          >
            Close
          </a>
        </div>
      </section>

      <section classlist="sec3" id="info">
        <div classlist="bubble-container">
          <div classlist="particles">
            <span particle="--i:11;"></span>
            <span particle="--i:12;"></span>
            <span particle="--i:24;"></span>
            <span particle="--i:10;"></span>
            <span particle="--i:14;"></span>
            <span particle="--i:23;"></span>
            <span particle="--i:18;"></span>
            <span particle="--i:16;"></span>
            <span particle="--i:19;"></span>
            <span particle="--i:20;"></span>
            <span particle="--i:22;"></span>
            <span particle="--i:25;"></span>
            <span particle="--i:18;"></span>
            <span particle="--i:21;"></span>
            <span particle="--i:13;"></span>
            <span particle="--i:15;"></span>
            <span particle="--i:26;"></span>
            <span particle="--i:17;"></span>
            <span particle="--i:13;"></span>
            <span particle="--i:28;"></span>
            <span particle="--i:11;"></span>
            <span particle="--i:12;"></span>
            <span particle="--i:24;"></span>
            <span particle="--i:10;"></span>
            <span particle="--i:14;"></span>
            <span particle="--i:23;"></span>
            <span particle="--i:18;"></span>
            <span particle="--i:16;"></span>
            <span particle="--i:19;"></span>
            <span particle="--i:20;"></span>
            <span particle="--i:22;"></span>
            <span particle="--i:25;"></span>
            <span particle="--i:18;"></span>
            <span particle="--i:21;"></span>
            <span particle="--i:13;"></span>
            <span particle="--i:15;"></span>
            <span particle="--i:26;"></span>
            <span particle="--i:17;"></span>
            <span particle="--i:13;"></span>
            <span particle="--i:28;"></span>
          </div>
        </div>

        <div classlist="superinfo"></div>

        <div classlist="img-slider">
          <div
            classlist="slide activo"
            ref={(el) => (slideRefs.current[0] = el)}
          >
            <img src="1.jpg" alt="" />
            <div classlist="info">
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
            <dotlottie-player
              classlist="animationdot1"
              src="https://lottie.host/d200cbba-5dab-4256-ba61-ed7eb8422af7/rb5JaJMaXL.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div classlist="slide" ref={(el) => (slideRefs.current[1] = el)}>
            <img src="2.jpg" alt="" />
            <div classlist="info">
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
            <dotlottie-player
              classlist="animationdot2"
              src="https://lottie.host/1c64c34b-1eeb-450f-b811-c513c67bd0ba/kVK6bkmuHA.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div classlist="slide" ref={(el) => (slideRefs.current[2] = el)}>
            <img src="3.jpg" alt="" />
            <div classlist="info">
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
            <dotlottie-player
              classlist="animationdot3"
              src="https://lottie.host/e8f7dc27-e068-4419-bb27-8eb9eef463c4/7MN2AfzPkj.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div classlist="slide" ref={(el) => (slideRefs.current[3] = el)}>
            <img src="4.jpg" alt="" />
            <div classlist="info">
              <h2>Ubicando la ayuda</h2>
              <p classlist="responsive-text1">
                Utilizamos las últimas innovaciones en geolocalización para
                desarrollar un software que no solo responde eficazmente en
                momentos críticos, sino que eleva la calidad del cuidado médico
                al conectar de manera más efectiva a paramédicos y hospitales.
                Nuestra plataforma asegura que cada paciente reciba la atención
                adecuada rápidamente, en el lugar correcto y en el momento
                preciso.
              </p>
            </div>
            <dotlottie-player
              classlist="animationdot4"
              src="https://lottie.host/43409ce2-23e6-443f-b449-99e86304d804/L9FfxkhoW3.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
            <dotlottie-player
              classlist="animationdot5"
              src="https://lottie.host/a1053985-c1d4-4121-9e19-1f74b363dc3b/Rcsk2J4xpq.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div classlist="slide" ref={(el) => (slideRefs.current[4] = el)}>
            <img src="5.jpg" alt="" />
            <div classlist="info">
              <h2>Mirando hacia el Futuro</h2>
              <p classlist="responsive-text2">
                Con cada actualización de nuestro software y cada nuevo servicio
                que implementamos, nos esforzamos por estar a la vanguardia de
                la tecnología médica de emergencia. Mientras expandimos nuestra
                cobertura y capacidad, nuestro objetivo sigue siendo claro:
                innovar para mejorar la vida de las personas en sus momentos más
                vulnerables. En Emelth buscamos crear un futuro donde la
                atención médica de emergencia sea más rápida, segura y eficaz.
              </p>
              <dotlottie-player
                classlist="animationdot6"
                src="https://lottie.host/225e3f4f-ed5a-420a-883c-4304397c60f2/CU5Qji6Sbz.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
          <div classlist="navigation">
            <div
              classlist="btn-slide activo"
              ref={(el) => (btnRefs.current[0] = el)}
            ></div>
            <div
              classlist="btn-slide"
              ref={(el) => (btnRefs.current[1] = el)}
            ></div>
            <div
              classlist="btn-slide"
              ref={(el) => (btnRefs.current[2] = el)}
            ></div>
            <div
              classlist="btn-slide"
              ref={(el) => (btnRefs.current[3] = el)}
            ></div>
            <div
              classlist="btn-slide"
              ref={(el) => (btnRefs.current[4] = el)}
            ></div>
          </div>
        </div>
      </section>

      <section classlist="sec4" id="contact">
        <div classlist="bubble-container">
          <div classlist="particles">
            <span particle="--i:11;"></span>
            <span particle="--i:12;"></span>
            <span particle="--i:24;"></span>
            <span particle="--i:10;"></span>
            <span particle="--i:14;"></span>
            <span particle="--i:23;"></span>
            <span particle="--i:18;"></span>
            <span particle="--i:16;"></span>
            <span particle="--i:19;"></span>
            <span particle="--i:20;"></span>
            <span particle="--i:22;"></span>
            <span particle="--i:25;"></span>
            <span particle="--i:18;"></span>
            <span particle="--i:21;"></span>
            <span particle="--i:13;"></span>
            <span particle="--i:15;"></span>
            <span particle="--i:26;"></span>
            <span particle="--i:17;"></span>
            <span particle="--i:13;"></span>
            <span particle="--i:28;"></span>
            <span particle="--i:11;"></span>
            <span particle="--i:12;"></span>
            <span particle="--i:24;"></span>
            <span particle="--i:10;"></span>
            <span particle="--i:14;"></span>
            <span particle="--i:23;"></span>
            <span particle="--i:18;"></span>
            <span particle="--i:16;"></span>
            <span particle="--i:19;"></span>
            <span particle="--i:20;"></span>
            <span particle="--i:22;"></span>
            <span particle="--i:25;"></span>
            <span particle="--i:18;"></span>
            <span particle="--i:21;"></span>
            <span particle="--i:13;"></span>
            <span particle="--i:15;"></span>
            <span particle="--i:26;"></span>
            <span particle="--i:17;"></span>
            <span particle="--i:13;"></span>
            <span particle="--i:28;"></span>
          </div>
        </div>

        <div classlist="contact-container">
          <div classlist="contactInfo">
            <div>
              <h2>Información de Contacto</h2>
              <ul classlist="info">
                <li>
                  <span>
                    <img src="/img/location.png" />
                  </span>
                  <span>
                    Mar Mediterraneo 227 Col. Popotla
                    <br />
                    Miguel Hidalgo, CDMX 11400
                  </span>
                </li>
                <li>
                  <span>
                    <img src="/img/mail.png" />
                  </span>
                  <span>emelth@gmail.com</span>
                </li>
                <li>
                  <span>
                    <img src="/img/call.png" />
                  </span>
                  <span>5544332211</span>
                </li>
              </ul>
            </div>
          </div>
          <div classlist="contactForm" id="contactForm">
            <h2>
              Tienes dudas o problemas sobre el software? Envía un mensaje...
            </h2>
            <div classlist="formBox">
              <div classlist="inputBox w50">
                <input type="text" required></input>
                <span>Nombre</span>
              </div>
              <div classlist="inputBox w50">
                <input type="text" required />
                <span>Apellido</span>
              </div>
              <div classlist="inputBox w50">
                <input type="text" required />
                <span>Correo Electronico</span>
              </div>
              <div classlist="inputBox w50">
                <input type="text" required />
                <span>Telefono</span>
              </div>
              <div classlist="inputBox w100">
                <textarea required></textarea>
                <span>Escribe tu mensaje aqui...</span>
              </div>
              <div classlist="inputBox w100">
                <input type="submit" value="Enviar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
      <script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      ></script>
    </body>
  );
}
