import React from "react";
import Button from "./Button";
import Input from "./Input";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around bg-black">
      <div className="m-2 ">
        <img src="/logo.png" alt="" className="rounded-md h-10 hover:cursor-pointer" />
      </div>
      <div>
        <form action="">
          <Input type="text" placeholder="Search..." className="bg-white"/>
        </form>
      </div>
      <div>
        <Button variant="primary">Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
