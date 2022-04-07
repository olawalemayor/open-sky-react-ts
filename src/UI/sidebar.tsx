import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const setActiveClass = (route: string) => {
    return route === pathname ? "sidebar-item active" : "sidebar-item";
  };

  return (
    <div className="app-sidebar">
      <div className={setActiveClass("/")} onClick={() => navigate("/")}>
        Dashboard
      </div>
      <div
        className={setActiveClass("/emp")}
        onClick={() => navigate("/empty")}
      >
        Sidebar Item
      </div>
      <div
        className={setActiveClass("/emp")}
        onClick={() => navigate("/empty")}
      >
        Sidebar Item
      </div>
      <div
        className={setActiveClass("/emp")}
        onClick={() => navigate("/empty")}
      >
        Sidebar Item
      </div>
      <div
        className={setActiveClass("/emp")}
        onClick={() => navigate("/empty")}
      >
        Sidebar Item
      </div>
    </div>
  );
}
