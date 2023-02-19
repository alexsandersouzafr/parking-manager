import { useContext, useState } from "react";
import ItemCard from "./ItemCard";
import { ParkingContext } from "@/contexts/ParkingContext";
import Help from "./Help";
import HistoryContextProvider from "@/contexts/HistoryContext";
import History from "./History";

export default function Board() {
  const { park } = useContext(ParkingContext);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <>
      <div className="board">
        <div className="board-header flex">
          {showHistory ? <span>HISTÓRICO</span> : <span>QUADRO DE VAGAS</span>}
          <div
            className="yellow-button"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? <span>VOLTAR</span> : <span>HISTÓRICO</span>}
          </div>
        </div>
        <HistoryContextProvider>
          <div className="board-body">
            {showHistory ? (
              <History />
            ) : (
              park.map((parkingSpace) => (
                <ItemCard
                  key={parkingSpace.id}
                  id={parkingSpace.id}
                  plate={parkingSpace.plate}
                  status={parkingSpace.status}
                  time={parkingSpace.time}
                />
              ))
            )}
          </div>
        </HistoryContextProvider>
      </div>
      {showHistory ? null : <Help />}
    </>
  );
}
