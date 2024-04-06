"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HospitalDetails({ params }) {
    const [hospitalData, setHospitalData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let oldHospitalName = params.Hospital;
        let newHospitalName = oldHospitalName.replace(/%20/g, " ");

        axios.post("http://localhost:3001/getHospital", { hospitalName: newHospitalName })
            .then(res => {
                let data = res.data;
                if (data.Status === "Success") {
                    setHospitalData(data.data);
                } else {
                    setError('Error al obtener detalles del hospital. Por favor, intente de nuevo.');
                }
            })
            .catch(error => {
                console.error('Error al obtener detalles del hospital:', error);
                setError('Error al obtener detalles del hospital. Por favor, intente de nuevo.');
            });
    }, [params.Hospital]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!hospitalData) {
        return <div>Cargando...</div>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHospitalData(prevData => ({
            ...prevData,
            informacionHospital: {
                ...prevData.informacionHospital,
                [name]: value
            }
        }));
    };

    const handleSubmit = () => {
        // Aquí puedes enviar los datos actualizados del hospital al servidor
        console.log("Datos actualizados:", hospitalData);
    };

    return (
        <div>
         
            <div>
                <h2>Especialidades:</h2>
                <ul>
                    {hospitalData.especialidades.map((especialidad, index) => (
                        <li key={index}>{especialidad}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Información del Hospital:</h2>
                <div>
                    <label>Telefono:</label>
                    <input
                        type="text"
                        name="Telefono"
                        value={hospitalData.informacionHospital.Telefono}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Calle:</label>
                    <input
                        type="text"
                        name="Calle"
                        value={hospitalData.informacionHospital.Calle}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Colonia:</label>
                    <input
                        type="text"
                        name="Colonia"
                        value={hospitalData.informacionHospital.Colonia}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Código Postal:</label>
                    <input
                        type="text"
                        name="CodigoPostal"
                        value={hospitalData.informacionHospital.CodigoPostal}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <button onClick={handleSubmit}>Guardar cambios</button>
        </div>
    );
}
