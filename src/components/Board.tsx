import { useContext } from "react";
import History from "./History";
import ItemCard from "./ItemCard";
import { ParkingContext } from "@/contexts/ParkingContext";
import Help from "./Help";

export default function Board() {
  const { park } = useContext(ParkingContext);

  return (
    <>
      <div className="board">
        <div className="board-header flex">
          QUADRO DE VAGAS <History />
        </div>
        <div className="board-body">
          {park.map((parkingSpace) => (
            <ItemCard
              key={parkingSpace.id}
              id={parkingSpace.id}
              plate={parkingSpace.plate}
              status={parkingSpace.status}
              time={parkingSpace.time}
            />
          ))}
        </div>
      </div>
      <Help />
    </>
  );
}
