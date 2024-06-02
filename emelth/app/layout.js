
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Emelth',
  description: 'Emelth web',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
