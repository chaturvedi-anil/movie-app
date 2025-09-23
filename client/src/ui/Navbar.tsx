import React from "react";
import Button from "./Button";
import Input from "./Input";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around">
      <div className="m-2 ">
        <img src="../../public/logo.png" alt="" className="rounded-md h-10 hover:cursor-pointer" />
      </div>
      <div>
        <form action="">
          <Input type="text" placeholder="Search" label="Search your movies"/>
        </form>
      </div>
      <div>
        <Button variant="secondary">Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
