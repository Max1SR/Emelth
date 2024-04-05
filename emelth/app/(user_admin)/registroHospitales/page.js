"use client";

import React from "react";
React.useLayoutEffect = React.useEffect;
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useState, useEffect } from "react";
import Layout from "@/components/components_usu_no_registrado/layout";
import axios from 'axios';
import Link from 'next/link';
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
    axios.post("http://localhost:3001/getHospitals")
      .then(res => {
        console.log(res.data.data);
        setHospitals(res.data.data); // Almacenar los hospitales en el estado
      })
      .catch(error => {
        console.error('Error fetching hospitals:', error);
      });
  }, []); 

  const handleSelectChange = (event) => {
    const selectedKey = event.target.value;
    const selectedHospital = hospitals.find(hospital => hospital.key === selectedKey);
    setSelectedHospital(selectedHospital); // Actualizar el estado con el hospital seleccionado
  };

  return (
    <Layout>
      <main className={`items-center justify-between px-16 py-14 ${inter.className} h-[93vh] bg-slate-100 text-slate-800`}>
        <div className="flex flex-row h-full w-full">
          <div className="w-1/2 h-full rounded-3xl p-5">
            <form  className="flex items-center space-x-3">
              <select name="mapa" id="mapaWi" onChange={handleSelectChange}>
                <option value="">Seleccionar hospital</option>
                {/* Generar opciones para cada hospital */}
                {hospitals.map(hospital => (
                  <option key={hospital.key} value={hospital.key}>{hospital.Nombre}</option>
                ))}
              </select>
             
            </form>

            <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
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
                  {hospitals.map(hospital => (
                    <Link key={hospital.key} href={`/registroHospitales/${encodeURIComponent(hospital.Nombre)}`}>
                    <tr key={hospital.key} >
                      <td>{hospital.Nombre}</td>
                      <td>{hospital.Calle}</td>
                      <td>{hospital.Colonia}</td>
                      <td>{hospital.CodigoPostal}</td>
                    </tr>
                    </Link>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

  