'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HospitalDetails({ params }) {
    const [hospitalData, setHospitalData] = useState(null);
    const [especialidades, setEspecialidades] = useState([]);
    const [error, setError] = useState(null);
    const [selectedEspecialidad, setSelectedEspecialidad] = useState('');

    useEffect(() => {
        // Obtener datos del hospital
        axios.get(`/api/hospitals/${params.Hospital}`)
            .then(res => {
                let data = res.data;
                if (data.Status === "Success") {
                   
                    setHospitalData(data.data);
                    console.log(data.data);
                } else {
                    setError('Error al obtener informacion del hospital. Por favor, intente de nuevo.');
                }
            })
            .catch(error => {
                console.error('Error al obtener detalles del hospital:', error);
                setError('Error al obtener detalles del hospital. Por favor, intente de nuevo.');
            });

        // Obtener lista de especialidades
        axios.get("/api/especialidades")
            .then(res => {
                let data = res.data;
                if (data.Status === "Success") {
                    
                    setEspecialidades(data.data);
                    console.log(data.data)
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
         console.log(hospitalData)
    
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!hospitalData || especialidades.length === 0) {
      return (
        <div className="flex items-center justify-center min-h-screen min-w-screen bg-white">
          <div className="relative h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <div className="absolute text-2xl font-bold text-primary">EH</div>
        </div>
      ); // Muestra un indicador de carga mientras se realiza la comprobación
    }

    return (
      <div class="flex min-h-screen min-w-full items-center justify-center bg-white">
        <div className="flex w-7/12 flex-col space-y-4 rounded-lg bg-white p-6 shadow-md max-h-full">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Especialidades</h3>
            </div>

            <div className="grid h-14 grid-cols-1 gap-4 overflow-y-auto sm:grid-cols-3">
              <div className="bg-muted rounded-md p-4 flex items-center justify-center border border-sky-500">
                {hospitalData.especialidades.map((especialidad, index) => (
                  <span key={index} className="text-sm font-medium">
                    {especialidad}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Información del Hospital</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="telephone"
                >
                  Teléfono:
                </label>
                <input
                  type="text"
                  name="Telefono"
                  value={hospitalData.informacionHospital.Telefono}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="telephone"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="telephone"
                >
                  Calle:
                </label>
                <input
                  type="text"
                  name="Calle"
                  value={hospitalData.informacionHospital.Calle}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="telephone"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="telephone"
                >
                  Colonia:
                </label>
                <input
                  type="text"
                  name="Colonia"
                  value={hospitalData.informacionHospital.Colonia}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="telephone"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="telephone"
                >
                  Código Postal:
                </label>
                <input
                  type="text"
                  name="CodigoPostal"
                  value={hospitalData.informacionHospital.CodigoPostal}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="telephone"
                />
              </div>
            </div>
          </section>

          <button
            onClick={handleSubmit}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary border border-sky-500"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    );
}
