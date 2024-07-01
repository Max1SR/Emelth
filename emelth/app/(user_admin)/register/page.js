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
      (formData.rol !== "3" || formData.hospital !== "");

    setIsFormValid(isFormFilled);
  }, [formData]);

  const handleFirstSelectChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      rol: value,
      hospital: value !== "3" ? "" : prevData.hospital, // Clear hospital if role is not Hospital
    }));

    setIsSecondSelectDisabled(value !== "3");
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
        <div className="w-5/12 space-y-6 p-8 bg-card rounded-l-lg shadow-lg h-[38rem] flex flex-col justify-center">
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
              className={`inline-flex items-center text-slate-50 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full ${
                isFormValid
                  ? "btnGraddient bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              Registrar
            </button>
          </form>

          {error && <p className="error">{error}</p>}
        </div>

        <div class="flex flex-col gap-4 rounded-r-lg bg-primary p-12 md:p-10 h-[38rem] w-7/12 text-white shadow-lg justify-center">
          <h3 class="text-lg 2xl:text-2xl font-bold">
            Por favor, complete todos los campos obligatorios del formulario.
            Asegúrese de proporcionar información precisa y actualizada para
            evitar problemas futuros.
          </h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mt-1 h-[20px] w-[20px]"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <div>
                <p class="font-semibold 2xl:text-base text-sm">
                  Nombre Completo:
                </p>
                <p class="2xl:text-base text-sm">
                  Ingrese el nombre y apellido del usuario.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mt-1 h-[20px] w-[20px]"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <div>
                <p class="font-semibold 2xl:text-base text-sm">
                  Correo Electrónico:
                </p>
                <p class="2xl:text-base text-sm">
                  Proporcione una dirección de correo electrónico válida.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mt-1 h-[20px] w-[20px]"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <div>
                <p class="font-semibold 2xl:text-base text-sm">Contraseña:</p>
                <p class="2xl:text-base text-sm">
                  La contraseña debe tener al menos 8 caracteres, incluyendo una
                  letra mayúscula, una minúscula y un número.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mt-1 h-[20px] w-[20px]"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <div>
                <p class="font-semibold 2xl:text-base text-xs">Rol:</p>
                <p class="2xl:text-base text-sm">
                  Seleccione el rol correspondiente para el usuario (Ej:
                  Paramédico, Administrador, Encargado de Hospital).
                </p>
              </div>
            </div>
          </div>
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
