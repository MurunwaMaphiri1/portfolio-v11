"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, FolderGit, NotebookPen, UserRound } from "lucide-react";
import  Navmenu  from "./navmenu";
import { useState } from "react";

type navItems = {
  name: string;
  href: string;
}[];

const navItems: navItems = [
  { name: "$", href: "/" },
  // { name: "work", href: "/work" },
  // { name: "notes", href: "/notes" },
];

const NavBar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <nav className="flex gap-2 rounded-3xl px-1 py-2">
        {navItems.map(({ name, href }) => (
          <div key={name.charCodeAt(0)}>
            <Link
              className={
                "relative transition-all transform-gpu rounded-full px-3 py-2 " +
                (path == href ? "" : "hover:opacity-50")
              }
              href={href}
            >
              {path == href && (
                <motion.div
                  layoutId="active"
                  className="backdrop-blur-sm bg-[#f5f5f5] dark:bg-black/30 absolute inset-0"
                  style={{
                    borderRadius: 9999,
                  }}
                  transition={{ type: "spring", duration: "0.6" }}
                />
              )}
              <span className="relative z-10">{name}</span>
            </Link>
          </div>
        ))}
      </nav>
      
      {/* Hamburger Menu Icon (ChartNoAxesGantt) */}
      {/* <button onClick={() => Navmenu}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        aria-label="Menu"
      >
        <Menu className="w-5 h-5" />
      </button> */}
      <div className="flex flex-row gap-4">
        <a href="/aboutme">
          <UserRound height={20} width={20}/>
        </a>
        <a href="/notes">
          <NotebookPen height={20} width={20}/>
        </a>
        <a href="/projects">
          <FolderGit height={20} width={20}/>
        </a>
      </div>
    </div>
  );
};

export default NavBar;