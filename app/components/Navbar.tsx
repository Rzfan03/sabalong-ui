"use client";

import { useState } from "react";
import React, { ReactNode} from "react";
import Image from "next/image";
import { Text, TextLink } from "./Text";

interface NavWrapper {
    logo?: any
    children: ReactNode;
}

export function Navbar({ logo, children }:NavWrapper) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full bg-zinc-800 border border-zinc-700 rounded-lg relative">
            <nav className="flex justify-between h-18 w-full px-4 items-center">
                <div className="flex items-center gap-2">
                    <div className="max-w-[32px]">
                        <Image src={logo} height={100} width={100} alt="logo" className="object-contain" />
                    </div>
                    <span className="text-white font-bold">logo</span>
                </div>

                <div className="hidden md:flex gap-2 items-center">
                    {children}
                </div>

                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2 focus:outline-none"
                >
                    <div className="space-y-1.5">
                        <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white ${isOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </div>
                </button>
            </nav>

            {isOpen && (
                <div className="md:hidden flex flex-col p-4 border-t border-zinc-700 bg-zinc-800 rounded-b-lg">
                    {children}
                </div>
            )}
        </div>
    );
}