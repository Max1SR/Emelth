import Link from "next/link";
import Escudo from "./iconos/escudo";

export default function Footer() {
  return (
    <footer>
      <div className="bg-slate-700 h-38 space-y-3 py-5">
        <span className="flex items-center justify-center space-x-1">
          <Escudo className="h-6 w-6"></Escudo>
          <span className="text-lg">Emelth</span>
        </span>
        <div className="text-center text-sm text-slate-200">
          © 2024 Emerald Health Inc. Todos los derechos reservados
        </div>

        <div className="flex flex-row space-x-6 justify-center">
          <Link href="/">Terminos y Condiciones</Link>
          <span>|</span>
          <Link href="/">Nosotros</Link>
          <span>|</span>
          <Link href="/">Ayuda</Link>
        </div>
      </div>
    </footer>
  );
}
