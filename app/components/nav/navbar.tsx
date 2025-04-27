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
        <a href="./Resume/Murunwa Maphiri Fullstack Developer CV (1).pdf" download>
          <FileUser height={20} width={20}/>
        </a>
      </div>
    </div>
  );
};

export default NavBar;