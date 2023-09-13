import { useEffect, useState } from "react";
import Pcart from "../Pcart/Pcart";
import Infos from "../Info/Infos";

const Carts = () => {
  const [players, setPlayers] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const [cost, setCost] = useState(0);
  const [remaining, setRemaining] = useState(200);

  const handlePlayerName = (name, salary) => {
    const isExist = selectedNames.find((item) => item === name);

    if (isExist) {
      return alert("Already Selected This Player");
    } else {
      const newSelectedPlayer = [...selectedNames, name];
      setSelectedNames(newSelectedPlayer);
    }
    const totalCost = cost + salary;
    if (totalCost > 200) {
      return alert("You Have Not Enough Balance");
    } else {
      setCost(totalCost);
    }

    const remaining = 200 - totalCost;
    setRemaining(remaining);
  };

  useEffect(() => {
    fetch("footballers-data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <>
      <div className="flex px-28 py-20">
        <div className="w-4/6 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 md:gap-16 lg:gap-24">
          {players.map((player, index) => (
            <Pcart
              key={index}
              player={player}
              handlePlayerName={handlePlayerName}
            ></Pcart>
          ))}
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl text-white my-9">Buying information</h1>
          <h1 className="text-2xl text-white my-8 font-semibold">
            Remaining Balance: ${remaining} Million
          </h1>
          <h1 className="text-2xl text-white my-8 font-semibold">
            Total Cost: ${cost} Million
          </h1>
          <div>
            <h3 className="text-white text-2xl">Draft Players:</h3>
            {selectedNames.map((player, index) => (
              <Infos key={index} player={player}></Infos>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
