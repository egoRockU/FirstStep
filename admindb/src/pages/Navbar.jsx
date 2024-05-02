import React from "react";
import UserNav from "./UserNav";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-secondary-100 px-4 border-b-4 border-secondary-500 rounded-b-lg">
      <div className="flex items-center space-x-4">
        <h1 className="font-bold text-primary px-20 text-3xl">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <UserNav />
      </div>
    </nav>
  );
}
