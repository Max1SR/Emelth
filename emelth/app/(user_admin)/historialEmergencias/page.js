import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/components_admin/layout";


const inter = Inter({ subsets: ["latin"] });

export default function page() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-16 py-14 ${inter.className} h-full bg-slate-100 text-slate-800`}
      >
        <div>
          <p>Historial</p>
        </div>
      </main>
    </Layout>
  );
}
