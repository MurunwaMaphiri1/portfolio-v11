"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type navigationItems = {
    name: string;
    href: string;
}[];

const navigationItems: navigationItems = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/aboutme" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
];

export default function Navmenu() {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
        <>
                {isOpen && (
                <div className="fixed w-2xs h-full bg-black z-1000">
                    <ul>
                        <li>
                        {navigationItems.map((item) => (
                            <Link className="text-gray-300 hover:text-white text-xl py-2"
                                key={item.name}
                                href={item.href}
                            >
                            {item.name}
                            </Link>
                    ))}
                        </li>
                    </ul>
                </div>
                )}
        </>
    )
}