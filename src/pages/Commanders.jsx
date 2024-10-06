import React from 'react'
import darthVaderImage from "../assets/vader-commander.png";
import moffTarkinImage from "../assets/moff-tarkin.png";

const commanders = [
  
  {
    name: "Wielki Moff Tarkin",
    image: moffTarkinImage,
    bio: "Gubernator Zewnętrznych Rubieży. Nadzorował budowę i dowodził pierwszą Gwiazdą Śmierci.",
    rank: "Wielki Moff",
    ship: "Gwiazda Śmierci"
  },
  {
    name: "Darth Vader",
    image: darthVaderImage,
    bio: "Prawa ręka Imperatora, Lord Sith. Dowodzi flotą z pokładu Super Star Destroyera 'Executor'.",
    rank: "Naczelny Dowódca",
    ship: "Super Star Destroyer 'Executor'"
  },
]

export default function Commanders() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">Dowódcy Imperium</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {commanders.map((commander) => (
          <div key={commander.name} className="bg-black bg-opacity-10 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <br />
            <br />
            <br />
            <img src={commander.image} alt={commander.name} className={`w-full object-contain mx-auto transition-all duration-300 ${commander.name === "Wielki Moff Tarkin" ? "bg-drop-blue" : commander.name === "Darth Vader" ? "bg-drop-red" : ""}`} style={{height: "450px", width: "432px"}}/>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-yellow-400">{commander.name}</h2>
              <p className="text-gray-300 mb-4">{commander.bio}</p>
              <p className="text-gray-400"><strong>Ranga:</strong> {commander.rank}</p>
              <p className="text-gray-400"><strong>Statek:</strong> {commander.ship}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}