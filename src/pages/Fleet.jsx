import React from 'react'
import deathStarImage from "../assets/star.png";
import starDestroyerImage from "../assets/destroyer.png";
import tieFighterImage from "../assets/tie.png";

const ships = [
  {
    name: "Gwiazda Śmierci",
    image: deathStarImage,
    description: "Stacja bojowa zdolna do niszczenia planet. Załoga: ponad 1 milion.",
    type: "Superbroń",
    weapons: "Superlaser, turbolasery, działa jonowe"
  },
  {
    name: "Imperial Star Destroyer",
    image: starDestroyerImage,
    description: "Potężny niszczyciel, trzon floty Imperium. Załoga: około 37,000.",
    type: "Okręt wojenny",
    weapons: "Turbolasery, działa jonowe, wyrzutnie rakiet"
  },
  {
    name: "TIE Fighter",
    image: tieFighterImage,
    description: "Szybki i zwrotny myśliwiec. Załoga: 1 pilot.",
    type: "Myśliwiec",
    weapons: "Lasery"
  }
]

export default function Fleet() {
  return (
    <div className="container mx-auto px-4 py-8"
    style={{ fontFamily: "Orbitron, sans-serif" }}>
      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">Flota Imperium</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ships.map((ship) => (
          <div key={ship.name} className="bg-black bg-opacity-10 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <br />
            <br />
            <img src={ship.image} alt={ship.name} className={`w-full h-80 object-contain transition-all duration-300 ${ship.name === "Gwiazda Śmierci" ? "bg-drop-blue" : ship.name === "Imperial Star Destroyer" ? "bg-drop-yellow" : ship.name === "TIE Fighter" ? "bg-drop-red" : ""}`} />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-yellow-400">{ship.name}</h2>
              <p className="text-gray-300 mb-4">{ship.description}</p>
              <p className="text-gray-400"><strong>Typ:</strong> {ship.type}</p>
              <p className="text-gray-400"><strong>Uzbrojenie:</strong> {ship.weapons}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}