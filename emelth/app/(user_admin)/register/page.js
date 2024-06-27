"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/components_admin/layout";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { validateUserRegister } from "@/components/validations/user";

function Register() {
  const [hospitals, setHospitals] = useState([]);
  const [isSecondSelectDisabled, setIsSecondSelectDisabled] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rol: "0",
    hospital: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Llamada a la API para obtener los hospitales al cargar el componente
    axios
      .get("/api/hospitals")
      .then((res) => {
        console.log(res.data.message);
        setHospitals(res.data.message); // Almacenar los hospitales en el estado
      })
      .catch((error) => {
        console.error("Error fetching hospitals:", error);
      });
  }, []);

  useEffect(() => {
    // Verificar si todos los campos del formulario están llenos y son válidos
    const isFormFilled =
      formData.username !== "" &&
      formData.password !== "" &&
      formData.rol !== "0" &&
      ((!isSecondSelectDisabled && formData.hospital !== "") ||
        isSecondSelectDisabled);

    setIsFormValid(isFormFilled);
  }, [formData, isSecondSelectDisabled]);

  const handleFirstSelectChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, rol: value });

    if (value === "3") {
      setIsSecondSelectDisabled(false);
    } else {
      setIsSecondSelectDisabled(true);
      setFormData({ ...formData, hospital: "" }); // Clear hospital field if not needed
    }
  };

  const handleSecondSelectChange = (event) => {
    const selectedKey = event.target.value;
    setFormData({ ...formData, hospital: selectedKey });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit2 = (e) => {
    e.preventDefault();

    let answer = validateUserRegister(formData);
    alert(answer);

    setError("");

    // API call to register or login
  };

  return (
    <Layout>
      <main
        className={`flex min-h-screen items-center justify-between px-16 py-14 ${inter.className} bg-slate-100 text-slate-800`}
      >
        <div className="loginPage max-w-md w-full space-y-6 p-8 bg-card rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">Registro</h1>
            <p className="mt-2 text-muted-foreground">
              Añadir usuarios a mi aplicación
            </p>
          </div>
          <form onSubmit={handleFormSubmit2} className="space-y-4">
            <div>
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="username"
              >
                Usuario
              </label>
              <input
                type="text"
                name="username"
                placeholder="email@elemplo.com"
                value={formData.username}
                onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
              />
            </div>

            <div>
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                placeholder="Ingrese la contraseña"
                value={formData.password}
                onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
              />
            </div>

            <div>
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="rol"
              >
                Rol
              </label>
              <select
                name="rol"
                value={formData.rol}
                onChange={handleFirstSelectChange}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="0">Selecciona un rol</option>
                <option value="1">Paramédico</option>
                <option value="2">Admin</option>
                <option value="3">Hospital</option>
              </select>
            </div>
            <div>
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="hospital"
              >
                Hospital
              </label>
              <select
                name="hospital"
                id="hospital"
                onChange={handleSecondSelectChange}
                disabled={isSecondSelectDisabled}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Seleccione un hospital</option>
                {hospitals.map((hospital) => (
                  <option key={hospital.key} value={hospital.key}>
                    {hospital.Nombre}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            >
              Registrar
            </button>
          </form>

          {error && <p className="error">{error}</p>}
        </div>
      </main>
    </Layout>
  );
}

export default function LoginRegister() {
  return (
    <SessionProvider>
      <Register />
    </SessionProvider>
  );
}
