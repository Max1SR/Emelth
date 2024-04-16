"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HospitalDetails({ params }) {
  const [hospitalData, setHospitalData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let oldHospitalName = params.Hospital;
    let newHospitalName = oldHospitalName.replace(/%20/g, " ");

    axios
      .post("http://localhost:3001/getHospital", {
        hospitalName: newHospitalName,
      })
      .then((res) => {
        let data = res.data;
        if (data.Status === "Success") {
          setHospitalData(data.data);
        } else {
          setError(
            "Error al obtener detalles del hospital. Por favor, intente de nuevo."
          );
        }
      })
      .catch((error) => {
        console.error("Error al obtener detalles del hospital:", error);
        setError(
          "Error al obtener detalles del hospital. Por favor, intente de nuevo."
        );
      });
  }, [params.Hospital]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!hospitalData) {
    return <div className="text-gray-600">Cargando...</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHospitalData((prevData) => ({
      ...prevData,
      informacionHospital: {
        ...prevData.informacionHospital,
        [name]: value,
      },
    }));
  };

  const handleSubmit = () => {
    // Aquí puedes enviar los datos actualizados del hospital al servidor
    console.log("Datos actualizados:", hospitalData);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Especialidades:</h2>
        <ul className="list-disc pl-5">
          {hospitalData.especialidades.map((especialidad, index) => (
            <li key={index}>{especialidad}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Información del Hospital:</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Telefono:</label>
            <input
              type="text"
              name="Telefono"
              value={hospitalData.informacionHospital.Telefono}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Calle:</label>
            <input
              type="text"
              name="Calle"
              value={hospitalData.informacionHospital.Calle}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Colonia:</label>
            <input
              type="text"
              name="Colonia"
              value={hospitalData.informacionHospital.Colonia}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Código Postal:</label>
            <input
              type="text"
              name="CodigoPostal"
              value={hospitalData.informacionHospital.CodigoPostal}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Guardar cambios
      </button>
    </div>
  );
}
