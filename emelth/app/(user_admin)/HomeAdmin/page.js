"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

import Layout from "@/components/components_admin/layout";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
//import Avvatars from "avvvatars-react";
import "@/styles/admin.css";

const inter = Inter({ subsets: ["latin"] });

function Homepage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true); // Estado de carga
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      const rol = session.user?.name;
      console.log(session.user);
      if (rol === "3") {
      }
      if (rol === "1") {
        setLoading(false);
      } else if (rol !== "3" && rol !== "1") {
      } else {
      }

      // Finaliza la carga cuando se ha realizado la comprobación
    } else if (status === "unauthenticated") {
      router.push("/signIn");
    }
  }, [session, status]);
  // if (loading) {
  //   return <div>Cargando...</div>; // Muestra un indicador de carga mientras se realiza la comprobación
  // }
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col  ${inter.className} h-full bg-slate-100 text-slate-800`}
      >
        <section id="principal" class="main">
          <div class="topbar">
            {/* <!--Busqueda--> */}
            <div class="search">
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>
            {/* <!--Imagen de Perfil--> */}
            {/* <div class="user">
              <img src="assets/user.jpg" />
            </div> */}
          </div>

          <div class="details">
            {/* <!--Lista Peticiones--> */}
            <div class="recentpetitions">
              <div class="cardHeader">
                <h2>Peticiones Recientes</h2>
                <a href="#peticiones" class="btn">
                  Ver todo
                </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>ID Ambulancia</td>
                    <td>Zona geográfica</td>
                    <td>Hospital</td>
                    <td>Estatus</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>187</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status aceptado">Aceptado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>188</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status Completado">Completado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>189</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status pendiente">Pendiente</span>
                    </td>
                  </tr>
                  <tr>
                    <td>190</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status aceptado">Aceptado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>191</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status Completado">Completado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>192</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status aceptado">Aceptado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>193</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status pendiente">Pendiente</span>
                    </td>
                  </tr>
                  <tr>
                    <td>194</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status Completado">Completado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>195</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status aceptado">Aceptado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>196</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status Completado">Completado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>197</td>
                    <td>Gustavo A. Madero</td>
                    <td>Hospital General La Villa</td>
                    <td>
                      <span class="status pendiente">Pendiente</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export default function page() {
  return (
    <SessionProvider>
      <Homepage />
    </SessionProvider>
  );
}
