'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HospitalDetails({ params }) {
    const [hospitalData, setHospitalData] = useState(null);
    const [especialidades, setEspecialidades] = useState([]);
    const [error, setError] = useState(null);
    const [selectedEspecialidad, setSelectedEspecialidad] = useState('');

    useEffect(() => {
        let oldHospitalName = params.Hospital;
        let newHospitalName = oldHospitalName.replace(/%20/g, " ");

        // Obtener datos del hospital
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

        // Obtener lista de especialidades
        axios.post("http://localhost:3001/getEsp")
            .then(res => {
                let data = res.data;
                if (data.Status === "Success") {
                    setEspecialidades(data.data);
                } else {
                    setError('Error al obtener la lista de especialidades. Por favor, intente de nuevo.');
                }
            })
            .catch(error => {
                console.error('Error al obtener la lista de especialidades:', error);
                setError('Error al obtener la lista de especialidades. Por favor, intente de nuevo.');
            });
    }, [params.Hospital]);

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

    const handleAddEspecialidad = () => {
        if (selectedEspecialidad.trim() !== '') {
            const especialidadToAdd = especialidades.find(especialidad => especialidad.esp_especialidad === selectedEspecialidad);
            if (especialidadToAdd) {
                setHospitalData(prevData => ({
                    ...prevData,
                    especialidades: [...prevData.especialidades, { id: especialidadToAdd.id_esp, nombre: especialidadToAdd.esp_especialidad }]
                }));
                setSelectedEspecialidad('');
            }
        }
    };

    const handleDeleteEspecialidad = (index) => {
        setHospitalData(prevData => ({
            ...prevData,
            especialidades: prevData.especialidades.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = () => {
        // // Transformar especialidades a una lista de ids
        // const especialidadesIds = hospitalData.especialidades.map(especialidad => especialidad.id);
         console.log(especialidades)
         console.log(hospitalData.especialidades)
        // // Crear objeto con los datos actualizados
        // const updatedHospitalData = {
        //     ...hospitalData,
        //     especialidades: especialidadesIds
        // };

        // // Enviar datos actualizados al servidor
        // axios.post("https:localhost:3001/updateHos", updatedHospitalData).then(res => {
        //     if (res.data.Status === "Success") {
        //         console.log("Succes")
        //     } else {
        //         setError('Error al obtener la lista de especialidades. Por favor, intente de nuevo.');
        //     }
        // })
        // .catch(error => {
        //     console.error('Error al obtener la lista de especialidades:', error);
        //     setError('Error al obtener la lista de especialidades. Por favor, intente de nuevo.');
        // });
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!hospitalData || especialidades.length === 0) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <div>
                <h2>Agregar especialidad</h2>
                <select value={selectedEspecialidad} onChange={(e) => setSelectedEspecialidad(e.target.value)}>
                    <option value="">Selecciona una especialidad</option>
                    {especialidades.map((especialidad, index) => (
                        <option key={especialidad.id_esp} value={especialidad.esp_especialidad}>{especialidad.esp_especialidad}</option>
                    ))}
                </select>
                <button onClick={handleAddEspecialidad}>Agregar</button>
            </div>
            <div>
                <h2>Especialidades del hospital</h2>
                <ul>
                    {hospitalData.especialidades.map((especialidad, index) => (
                        <li key={especialidad
                        
                        }>
                            {especialidad.nombre}
                            <button onClick={() => handleDeleteEspecialidad(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Información del Hospital:</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Telefono:</td>
                            <td>
                                <input
                                    type="text"
                                    name="Telefono"
                                    value={hospitalData.informacionHospital.Telefono}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Calle:</td>
                            <td>
                                <input
                                    type="text"
                                    name="Calle"
                                    value={hospitalData.informacionHospital.Calle}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Colonia:</td>
                            <td>
                                <input
                                    type="text"
                                    name="Colonia"
                                    value={hospitalData.informacionHospital.Colonia}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Código Postal:</td>
                            <td>
                                <input
                                    type="text"
                                    name="CodigoPostal"
                                    value={hospitalData.informacionHospital.CodigoPostal}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={handleSubmit}>Guardar cambios</button>
        </div>
    );
}
