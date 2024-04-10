"use client";

import React from "react";
React.useLayoutEffect = React.useEffect;
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useState, useEffect } from "react";
import Layout from "@/components/components_admin/layout";
import axios from "axios";
import Link from "next/link";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";
export default function Maps() {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    // Llamada a la API para obtener los hospitales al cargar el componente
    axios
      .post("http://localhost:3001/getHospitals")
      .then((res) => {
        console.log(res.data.data);
        setHospitals(res.data.data); // Almacenar los hospitales en el estado
      })
      .catch((error) => {
        console.error("Error fetching hospitals:", error);
      });
  }, []);

  const handleSelectChange = (event) => {
    const selectedKey = event.target.value;
    const selectedHospital = hospitals.find(
      (hospital) => hospital.key === selectedKey
    );
    setSelectedHospital(selectedHospital); // Actualizar el estado con el hospital seleccionado
  };

  return (
    <Layout>
      <main
        className={`min-h-screen flex-col items-center justify-between px-16 py-14 ${inter.className} h-full bg-slate-100 text-slate-800`}
      >
        <div className="flex flex-row h-full w-full">
          <div className="w-full h-full rounded-3xl p-5">
            <form className="flex items-center space-x-3">
              <select name="mapa" id="mapaWi" onChange={handleSelectChange}>
                <option value="">Seleccionar hospital</option>
                {/* Generar opciones para cada hospital */}
                {hospitals.map((hospital) => (
                  <option key={hospital.key} value={hospital.key}>
                    {hospital.Nombre}
                  </option>
                ))}
              </select>
            </form>

            {/* <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
              <span className="Info">Lista de hospitales registrados:</span>
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Calle</th>
                    <th>Colonia</th>
                    <th>Código Postal</th>
                  </tr>
                </thead>
                <tbody>
                  {hospitals.map((hospital) => (
                    <tr
                      key={hospital.key}
                      className="hover:bg-lime-500 transition-color duration-200"
                    >
                      <td>
                        <Link
                          key={hospital.key}
                          href={`/registroHospitales/${encodeURIComponent(
                            hospital.Nombre
                          )}`}
                        >
                          {hospital.Nombre}
                        </Link>
                      </td>
                      <td>
                        <Link
                          key={hospital.key}
                          href={`/registroHospitales/${encodeURIComponent(
                            hospital.Nombre
                          )}`}
                        >
                          {hospital.Calle}
                        </Link>
                      </td>
                      <td>
                        <Link
                          key={hospital.key}
                          href={`/registroHospitales/${encodeURIComponent(
                            hospital.Nombre
                          )}`}
                        >
                          {hospital.Colonia}
                        </Link>
                      </td>
                      <td>
                        <Link
                          key={hospital.key}
                          href={`/registroHospitales/${encodeURIComponent(
                            hospital.Nombre
                          )}`}
                        >
                          {hospital.CodigoPostal}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}

            <div className=" grid grid-cols-4 gap-10 mt-6 mx-auto">
              {hospitals.map((hospital) => (
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    class="w-full"
                    src="https://centrourbano.com/revista/wp-content/uploads/hospitaldexoco_g-1.jpg"
                    alt="Sunset in the mountains"
                  ></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{hospital.Nombre}</div>
                    <p class="text-gray-700 text-base">{hospital.Calle}</p>
                    <p class="text-gray-700 text-base">{hospital.Colonia}</p>
                    <p class="text-gray-700 text-base">
                      {hospital.CodigoPostal}
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
