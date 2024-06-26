"use client";

import React, { useEffect, useState } from "react";
import "@/styles/admin.css";
import Layout from "@/components/components_admin/layout";
import axios from "axios";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [requests, setRequests] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const filters = ["Sexo", "Tipo emergencia", "Edad", "Estado de petición"];

  function handleFilter(e) {
    setSelectedFilter(e.target.value);
  }

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function getData() {
    axios
      .get("/api/petitions")
      .then((res) => {
        let requests = res.data.message;
        setRequests(requests);
      })
      .catch((error) => {
        console.error("Error fetching petitions:", error);
      });
  }

  function handleButtonRestart() {
    getData();
  }

  function handleButtonClick() {
    axios
      .post("api/petitions", { value: inputText, filter: selectedFilter })
      .then((res) => {
        let requests = res.data.message;
        if (res.data.success === "success") {
          setRequests(requests);
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching petitions:", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (inputText !== "" && selectedFilter !== "0" && selectedFilter !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [inputText, selectedFilter]);

  return (
    <Layout>
      <main
        className={`min-h-screen flex-col items-center justify-between px-16 py-14 ${inter.className} h-full bg-slate-100 text-slate-800`}
      >
        <div>
          <div className="flex mb-5 bg-white h-14 p-2 rounded-lg space-x-4">
            <input
              placeholder="Ingrese el texto"
              value={inputText}
              onChange={handleInputChange}
              className="flex h-full w-4/12 rounded-md border border-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white"
            />
            <select
              name="mapa"
              id="mapaWi"
              onChange={handleFilter}
              className="flex h-10 w-4/12 items-center justify-between rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="0">Seleccione un filtro</option>
              {filters.map((filter, index) => (
                <option key={index} value={`${index + 1}`}>
                  {filter}
                </option>
              ))}
            </select>
            <button
              onClick={handleButtonClick}
              disabled={isButtonDisabled}
              className={`text-slate-50 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-indigo-500 disabled:opacity-50 h-10 px-4 py-2 w-2/12 ${
                isButtonDisabled
                  ? ""
                  : "btnGraddient bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              Submit
            </button>
            <button
              onClick={handleButtonRestart}
              className="text-slate-50 btnGraddient inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-2/12"
            >
              Restaurar filtros
            </button>
          </div>

          <table
            className="table-auto md:w-full text-sm snap-x scroll-pl-4 max-md:grid max-md:gap-x-12 max-md:overflow-x-scroll max-md:-mx-4 max-md:px-4 [&_thead]:bg-slate-50 max-md:[&_thead]:contents max-md:[&_tbody]:contents [&_tbody_tr]:border-b [&_tbody_tr]:border-slate-100 max-md:[&_tr]:contents [&_th]:text-slate-900 [&_th]:font-semibold [&_td]:text-slate-600 [&_th]:py-3 md:[&_th]:first:pl-3 [md:&_th]:last:pr-3 [&_td]:pb-3 md:[&_td]:pt-3 md:[&_td]:first:pl-3 md:[&_td]:last:pr-3 [&_tr_td:first-child]:font-medium [&_tr_td:first-child]:text-slate-900 [&_th]:whitespace-nowrap [&_td]:whitespace-normal max-md:[&_th]:min-w-[60vw] max-md:[&_td]:min-w-[60vw] max-md:[&_tr:last-child_td]:min-w-[calc(100vw-2rem)] [&_th]:text-left [&_th]:group-last:text-right [&_td]:text-left md:[&_td:last-of-type]:text-right max-md:[&_th]:sticky max-md:[&_th]:left-0 [&_td]:snap-start max-md:[&_td]:border-b max-md:[&_td:last-of-type]:border-none [&_td]:border-slate-100"
            id="dTboor"
          >
            <thead>
              <tr>
                <th className="max-md:row-start-1 max-md:col-start-1 pl-4">
                  Folio
                </th>
                <th className="max-md:row-start-3 max-md:col-start-1">
                  Nombre
                </th>
                <th className="max-md:row-start-5 max-md:col-start-1">
                  Apellido Paterno
                </th>
                <th className="max-md:row-start-7 max-md:col-start-1">
                  Apellido Materno
                </th>
                <th className="max-md:row-start-9 max-md:col-start-1">Edad</th>
                <th className="max-md:row-start-11 max-md:col-start-1">Sexo</th>
                <th className="max-md:row-start-13 max-md:col-start-1">
                  Tipo Emergencia
                </th>
                <th className="max-md:row-start-15 max-md:col-start-1 break-all max-w-48">
                  Padecimiento
                </th>
                <th className="max-md:row-start-17 max-md:col-start-1 break-all max-w-48">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {requests.map((request, index) => ( */}
              {/* Agregar el 'key={index}' a la tabla aqui abajo */}
              <tr>
                <td className="max-md:row-start-1 max-md:col-start-1">
                  {/* {request.Folio} */}
                </td>
                <td className="max-md:row-start-3 max-md:col-start-1">
                  {/* {request.Name} */}
                </td>
                <td className="max-md:row-start-5 max-md:col-start-1">
                  {/* {request.LastName} */}
                </td>
                <td className="max-md:row-start-7 max-md:col-start-1">
                  {/* {request.LastName2} */}
                </td>
                <td className="max-md:row-start-9 max-md:col-start-1">
                  {/* {request.Age} */}
                </td>
                <td className="max-md:row-start-11 max-md:col-start-1">
                  {/* {request.Sex} */}
                </td>
                <td className="max-md:row-start-13 max-md:col-start-1">
                  {/* {request.Emergency} */}
                </td>
                <td className="max-md:row-start-15 max-md:col-start-1 break-all max-w-48">
                  {/* {request.Description} */}
                </td>
                <td className="max-md:row-start-17 max-md:col-start-1 break-all max-w-48">
                  {/* {request.Estate} */}
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}
