"use client";

import React from "react";
React.useLayoutEffect = React.useEffect;
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useState, useEffect } from "react";
import Layout from "@/components/components_usu_no_registrado/layout";
import axios from 'axios';
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

export default function maps() {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    // Llamada a la API para obtener los hospitales al cargar el componente
    axios.post("http://localhost:3001/getHospitals")
      .then(res => {
        console.log(res.data.data)
        setHospitals(res.data.data); // Almacenar los hospitales en el estado
       
      })
      .catch(error => {
        console.error('Error fetching hospitals:', error);
      });
  }, []); 

  const position = { lat: 19.359695, lng: -99.163181 };

  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <main
        className={`items-center justify-between px-16 py-14 ${inter.className} h-[93vh] bg-slate-100 text-slate-800`}
      >
        <div className="flex flex-row h-full w-full">
         {/* <APIProvider apiKey="AIzaSyC_z2uZ1nenzsSEqwKEOA8BIpTl5Dl-XSs">
            <div
              className="w-1/2 h-full rounded-3xl"
              style={{ height: "80vh", width: "50%" }}
            >
              <Map
                zoom={15}
                center={position}
                // mapId={process.env.NEXT_PUBLIC_MAP_ID}
              >
                 <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                <Pin
                  background={"grey"}
                  borderColor={"green"}
                  glyphColor={"purple"}
                />
              </AdvancedMarker>
              {open && (
                <InfoWindow
                  position={position}
                  onCloseClick={() => setOpen(false)}
                >
                  <p>I'm in Hamburg</p>
                </InfoWindow>
              )} 
              </Map>
            </div>
              </APIProvider>*/}

          <div className="w-1/2 h-full rounded-3xl p-5">
            <form
              action="ServMap"
              method="post"
              className="flex items-center space-x-3"
            >
              <select name="mapa" id="mapaWi">
                 {/* Generar opciones para cada hospital */}
                 {hospitals.map(hospital => (
                  <option key={hospital.key} value={hospital.key}>{hospital.Nombre}</option>
                ))}
              </select>
              <input type="submit" value="Actualizar" />
            </form>

            <div className="flex flex-col space-y-4 p-5">
              <span class="Info">Informacion de hospitales</span>
              <div className="flex flex-row space-x-4">
                <p className="w-1/6">Nombre</p>
                <p>Nombre del hospital</p>
              </div>
              <div className="flex flex-row space-x-4">
                <p className="w-1/6">Calle</p>
                <p>Calle del hospital</p>
              </div>
              <div className="flex flex-row space-x-4">
                <p className="w-1/6">Colonia</p>
                <p>Colonia del hospital</p>
              </div>
              <div className="flex flex-row space-x-4">
                <p className="w-1/6">Codigo Postal</p>
                <p>Codigo Postal del hospital</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
