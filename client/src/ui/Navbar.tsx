import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around bg-gray-700">
      <div className="m-2 ">
        <img src="../../public/logo.png" alt="" className="rounded-md h-10 hover:cursor-pointer" />
      </div>
      <div>
        <form action="">
          <input type="text" placeholder="Search" className="outline-gray-300" />
        </form>
      </div>
      <div>
        <Button variant="secondary">Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
