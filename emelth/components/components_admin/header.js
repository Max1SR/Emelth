// components/Header.js
import { useRef, useEffect, useState } from "react";
import "@/styles/admin.css";
import {
  IoHomeOutline,
  IoMedkitOutline,
  IoChatbubbleOutline,
  IoHelpOutline,
  IoLogOutOutline,
  IoMenuOutline,
} from "react-icons/io5";

import { TbUsersPlus } from "react-icons/tb";

export default function Header({ setIsNavbarHovered }) {
  const navigationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
      setIsNavbarHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setIsNavbarHovered(false);
    };

    if (navigationRef.current) {
      navigationRef.current.addEventListener("mouseenter", handleMouseEnter);
      navigationRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (navigationRef.current) {
        navigationRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        navigationRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
    };
  }, [setIsNavbarHovered]);

  return (
    <div
      ref={navigationRef}
      className={`navigation ${isHovered ? "" : "active"}`}
    >
      <ul>
        <li>
          <a href="#">
            <span className="title">Emelth</span>
          </a>
        </li>
        <li>
          <a href="/HomeAdmin">
            <span className="icon flex items-center justify-center">
              <IoHomeOutline size={"1.5em"} />
            </span>
            <span className="title">Inicio</span>
          </a>
        </li>
        <li>
          <a href="/registroHospitales">
            <span className="icon flex items-center justify-center ">
              <IoMedkitOutline size={"1.5em"} />
            </span>
            <span className="title">Hospitales</span>
          </a>
        </li>
        <li>
          <a href="/historialEmergencias">
            <span className="icon flex items-center justify-center">
              <IoChatbubbleOutline size={"1.5em"} />
            </span>
            <span className="title">Peticiones</span>
          </a>
        </li>
        <li>
          <a href="/register">
            <span className="icon flex items-center justify-center">
              <TbUsersPlus size={"1.5em"} />
            </span>
            <span className="title">Registrar Usuarios</span>
          </a>
        </li>
        <li>
          <a href="/Ayuda">
            <span className="icon flex items-center justify-center">
              <IoHelpOutline size={"1.5em"} />
            </span>
            <span className="title">Ayuda</span>
          </a>
        </li>

        <li>
          <a href="/">
            <span className="icon flex items-center justify-center">
              <IoLogOutOutline size={"1.5em"} />
            </span>
            <span className="title">Cerrar sesión</span>
          </a>
        </li>
      </ul>

      <div className="toggle1">
        <IoMenuOutline />
      </div>
    </div>
  );
}
