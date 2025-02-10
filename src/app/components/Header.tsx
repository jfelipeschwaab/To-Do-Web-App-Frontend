// components/Header.tsx
import Link from "next/link";
import { FaTasks } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { FaCheck } from "react-icons/fa"; // Importe o ícone de check
import { FaCheckSquare } from "react-icons/fa"; // Importe o ícone de checkbox marcado


export default function Header() {
  return (
    <header className="bg-slate-900 shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <h1 className="font-serif text-4xl">
            Online to-do Application
        </h1>
        <FaCheckSquare className="mr-2 text-3xl text-green-500" /> {/* Ícone de checkbox marcado */}

        

      </div>
    </header>
  );
}