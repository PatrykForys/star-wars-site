import React from "react";
import { Link } from "react-router-dom";
import flotaImage from "../assets/flota.png";
import vaderImage from "../assets/vader.png";
import tatooineImage from "../assets/tatooine.png";

export default function Home() {
  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      <h1 className="text-4xl font-bold text-center mb-12">
        <span className="drop-blue transition-all duration-300">Witaj w Galaktycznej</span>{" "}
        <span className="drop-red transition-all duration-300">Flocie Imperium</span>
      </h1>
      <div className="p-6 rounded-lg shadow-lg mb-8 bg-black bg-opacity-10">
        <p className="text-lg mb-4 text-white">
          Imperium Galaktyczne to potężna siła rządząca galaktyką. Nasza flota,
          dowódcy i kontrolowane planety stanowią trzon naszej potęgi i
          gwarantują porządek w całym kosmosie.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/fleet"
          className="group bg-black bg-opacity-10 p-6 rounded-lg transition duration-300 flex flex-col items-center hover:scale-105"
        >
          <h2 className="text-2xl text-center font-bold mb-2 text-yellow-400">Flota</h2>
          <p className="mb-4 text-white">
            Odkryj potęgę naszych statków kosmicznych, od niszczycieli
            gwiezdnych po myśliwce TIE.
          </p>
          <img
            src={flotaImage}
            alt="Flota"
            className="rounded transition-all duration-300 bg-drop-blue group-hover:drop-shadow-custom"
          />
        </Link>

        <Link
          to="/planets"
          className="group bg-black bg-opacity-10 p-6 rounded-lg transition duration-300 flex flex-col items-center hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">Planety</h2>
          <p className="mb-4">
            Zobacz światy pod kontrolą Imperium, kluczowe dla naszej
            galaktycznej dominacji.
          </p>
          <img
            src={tatooineImage}
            alt="Planety"
            className="rounded transition-all duration-300 bg-drop-yellow group-hover:drop-shadow-custom"
          />
        </Link>

        <Link
          to="/commanders"
          className="group bg-black bg-opacity-10 p-6 rounded-lg transition duration-300 flex flex-col items-center hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">Dowódcy</h2>
          <p className="mb-4">
            Poznaj naszych najwybitniejszych dowódców, którzy prowadzą Imperium
            ku chwale.
          </p>
          <img
            src={vaderImage}
            alt="Dowódcy"
            className="transition-all duration-300 bg-drop-red group-hover:drop-shadow-custom"
          />
        </Link>
      </div>
    </div>
  );
}