// context/AdminMenuContext.js
import { createContext, useState, useContext, useEffect } from "react";

const AdminMenuContext = createContext();

export function AdminMenuProvider({ children }) {
  const [isActive, setIsActive] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("adminMenuToggleState") === "active";
    }
    return false;
  });

  useEffect(() => {
    if (isActive) {
      localStorage.setItem("adminMenuToggleState", "active");
    } else {
      localStorage.setItem("adminMenuToggleState", "inactive");
    }
  }, [isActive]);

  return (
    <AdminMenuContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </AdminMenuContext.Provider>
  );
}

export function useAdminMenu() {
  return useContext(AdminMenuContext);
}
