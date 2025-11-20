"use client";
import Link from "next/link";
import { FolderGit, FileUser } from "lucide-react";
import Logo from "../icons/Logo";


const NavBar = () => {

  return (
    <div className="flex items-center justify-between w-full">
      <nav className="flex gap-2 rounded-3xl py-2">
        <Link
          className=""
          href="/"
        >
          <Logo/>
        </Link>
      </nav>
      <div className="flex flex-row gap-4">
        <a href="/projects">
          <FolderGit height={20} width={20}/>
        </a>
        <a href="https://drive.google.com/file/d/1V6V-yJec4Q6S2Q5J8px2D3Z1RFfmjS2y/view?usp=sharing" download>
          <FileUser height={20} width={20}/>
        </a>
      </div>
    </div>
  );
};

export default NavBar;