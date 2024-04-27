import React from "react";
 import { Inter } from "next/font/google";

 const inter = Inter({ subsets: ["latin"] });
export default function page() {
  return (
    <div>
      <main
        className={` min-h-screen flex-col items-center justify-between px-16 py-14 ${inter.className} h-full bg-slate-100 text-slate-800`}
      >
        <div class="bg-gray-200 p-4">
          <div class="fill-blue-500 spinner"></div>
          <p class="text-sm text-gray-600">Loading content...</p>
        </div>
      </main>
    </div>
  );
}
