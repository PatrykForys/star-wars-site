import React from 'react'
import tatooineImage from "../assets/tatooine.png";
import hothImage from "../assets/hoth.png";
import mustafarImage from "../assets/mustafar.png";

const planets = [
  
  {
    name: "Hoth",
    image: hothImage,
    description: "Lodowa planeta, miejsce dawnej bazy Rebelii. Obecnie pod ścisłą kontrolą Imperium.",
    significance: "Baza wypadowa do operacji w Nieznanych Regionach"
  },
  {
    name: "Tatooine",
    image: tatooineImage,
    description: "Pustynna planeta na Zewnętrznych Rubieżach. Ważny punkt kontroli handlu i przemytu.",
    significance: "Strategiczny punkt kontroli Zewnętrznych Rubieży"
  },
  {
    name: "Mustafar",
    image: mustafarImage,
    description: "Wulkaniczna planeta, miejsce tajnych operacji Imperium i siedziba Lorda Vadera.",
    significance: "Centrum tajnych badań i szkolenia Inkwizytorów"
  }
]

export default function Planets() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-yellow-400">Planety Imperium</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {planets.map((planet) => (
          <div key={planet.name} className="bg-black bg-opacity-10 rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105">
            <br />
            <br />
            <br />
            <img src={planet.image} alt={planet.name} className={`w-full h-80 object-contain transition duration-300 ${planet.name === "Hoth" ? "bg-drop-blue" : planet.name === "Tatooine" ? "bg-drop-yellow" : planet.name === "Mustafar" ? "bg-drop-red" : ""}`} />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-yellow-400">{planet.name}</h2>
              <p className="text-gray-300 mb-4">{planet.description}</p>
              <p className="text-gray-400"><strong>Znaczenie:</strong> {planet.significance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}