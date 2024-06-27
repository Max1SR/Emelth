import React from "react";
import "@/styles/admin.css";
import Layout from "@/components/components_admin/layout";

export default function page() {
  return (
    <Layout>
      <main
        className={` min-h-screen px-16 py-14 h-full bg-slate-100`}
      >
        <section id="peticiones" className="peticiones">
          <div className="recentpetitions">
            <div className="cardHeader">
              <h2>Peticiones Recientes</h2>
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
                    <span className="status aceptado">Aceptado</span>
                  </td>
                </tr>
                <tr>
                  <td>188</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status Completado">Completado</span>
                  </td>
                </tr>
                <tr>
                  <td>189</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status pendiente">Pendiente</span>
                  </td>
                </tr>
                <tr>
                  <td>190</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status aceptado">Aceptado</span>
                  </td>
                </tr>
                <tr>
                  <td>191</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status Completado">Completado</span>
                  </td>
                </tr>
                <tr>
                  <td>192</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status aceptado">Aceptado</span>
                  </td>
                </tr>
                <tr>
                  <td>193</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status pendiente">Pendiente</span>
                  </td>
                </tr>
                <tr>
                  <td>194</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status Completado">Completado</span>
                  </td>
                </tr>
                <tr>
                  <td>195</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status aceptado">Aceptado</span>
                  </td>
                </tr>
                <tr>
                  <td>196</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status Completado">Completado</span>
                  </td>
                </tr>
                <tr>
                  <td>197</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status pendiente">Pendiente</span>
                  </td>
                </tr>
                <tr>
                  <td>187</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status aceptado">Aceptado</span>
                  </td>
                </tr>
                <tr>
                  <td>188</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status Completado">Completado</span>
                  </td>
                </tr>
                <tr>
                  <td>189</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status pendiente">Pendiente</span>
                  </td>
                </tr>
                <tr>
                  <td>190</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status aceptado">Aceptado</span>
                  </td>
                </tr>
                <tr>
                  <td>191</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status Completado">Completado</span>
                  </td>
                </tr>
                <tr>
                  <td>192</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status aceptado">Aceptado</span>
                  </td>
                </tr>
                <tr>
                  <td>193</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status pendiente">Pendiente</span>
                  </td>
                </tr>
                <tr>
                  <td>194</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status Completado">Completado</span>
                  </td>
                </tr>
                <tr>
                  <td>195</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status aceptado">Aceptado</span>
                  </td>
                </tr>
                <tr>
                  <td>196</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status Completado">Completado</span>
                  </td>
                </tr>
                <tr>
                  <td>197</td>
                  <td>Gustavo A. Madero</td>
                  <td>Hospital General La Villa</td>
                  <td>
                    <span className="status pendiente">Pendiente</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </Layout>
  );
}
