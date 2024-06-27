// components/Header.js
import { useRef, useEffect, useState } from "react";
import "@/styles/admin.css";
import {
  IoHomeOutline,
  IoHelpOutline,
  IoLogOutOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { TbTableHeart } from "react-icons/tb";

import { BsBuildingCheck } from "react-icons/bs";

import Logoutbutton from '../signoutButton'

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
          <a href="/home">
            <span className="icon flex items-center justify-center">
              <IoHomeOutline size={"1.5em"} />
            </span>
            <span className="title">Home</span>
          </a>
        </li>
        <li>
          <a href="/gestionPeticiones">
            <span className="icon flex items-center justify-center ">
              <TbTableHeart size={"1.5em"} />
            </span>
            <span className="title">Gestión de peticiones</span>
          </a>
        </li>
        <li>
          <a href="/aceptadas">
            <span className="icon flex items-center justify-center">
              <BsBuildingCheck size={"1.5em"} />
            </span>
            <span className="title">Peticiones aceptadas</span>
          </a>
        </li>
        <li>
          <a href="/ayudaEncargado">
            <span className="icon flex items-center justify-center">
              <IoHelpOutline size={"1.5em"} />
            </span>
            <span className="title">Ayuda</span>
          </a>
        </li>

        <li>
          <div>
            <Logoutbutton>
              <span className="icon flex items-center justify-center">
                <IoLogOutOutline size={"1.5em"} />
              </span>

              <span className="title">Cerrar sesión</span>
            </Logoutbutton>
          </div>
        </li>
      </ul>

      <div className="toggle1">
        <IoMenuOutline />
      </div>
    </div>
  );
}
