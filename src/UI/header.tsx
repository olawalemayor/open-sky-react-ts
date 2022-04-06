import React from "react";
import { NavLink } from "react-router-dom";

import { HiMenuAlt1 } from "react-icons/hi";

interface HeaderProps {
  username: string;
  setIsToggled: any;
  toggled: boolean;
}

export default function Header({
  username,
  setIsToggled,
  toggled,
}: HeaderProps) {
  return (
    <header>
      <div className="app-header">
        <div className="toggle-sidebar" onClick={() => setIsToggled(!toggled)}>
          <HiMenuAlt1 />
        </div>
        <div className="app-brand text-sm-center">
          <NavLink to="/">My-Open-Sea</NavLink>
        </div>
        <div className="header-options">{username}</div>
      </div>
    </header>
  );
}
