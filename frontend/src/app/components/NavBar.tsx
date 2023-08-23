import React from "react";
import Image from "next/image";
export const NavBar = () => {
  return (
    <nav className="bg-blue flex mx-auto px-6 absolute top-0 w-full h-16 items-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={200}
        className="mr-[6rem]"
      />
      <div className="flex items-center w-[50vw] ">
        <input
          type="text"
          className="w-full rounded-md px-3 py-2 text-sm font-normal "
          placeholder="Insira o nome ou endereço do seu evento por aqui!"
        />
      </div>
    </nav>
  );
};
