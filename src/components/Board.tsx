import BoardStatus from "./BoardStatus";
import History from "./History";
import ItemCard from "./ItemCard";

export default function Board() {
  return (
    <div className="board">
      <BoardStatus />
      <div className="board-header flex">
        QUADRO DE VAGAS <History />
      </div>
      <div className="board-body">
        <ItemCard number={1} className="free" />
        <ItemCard number={2} className="free" />
        <ItemCard
          number={3}
          plate="ABC-1234"
          time="12:24"
          className="occupied"
        />
        <ItemCard
          number={5}
          plate="ABC-1234"
          time="12:24"
          className="occupied"
        />
        <ItemCard number={4} className="free" />
        <ItemCard
          number={6}
          plate="ABC-1234"
          time="12:24"
          className="occupied"
        />
        <ItemCard number={1} className="free" />
        <ItemCard number={2} className="free" />
        <ItemCard
          number={3}
          plate="ABC-1234"
          time="12:24"
          className="occupied"
        />
        <ItemCard
          number={5}
          plate="ABC-1234"
          time="12:24"
          className="occupied"
        />
        <ItemCard number={4} className="free" />
        <ItemCard
          number={6}
          plate="ABC-1234"
          time="12:24"
          className="occupied"
        />
        <ItemCard number={1} className="free" />
        <ItemCard number={2} className="free" />
        <ItemCard
          number={3}
          plate="ABC-1234"
          time="12:24"
          className="occupied"
        />
        <ItemCard
          number={5}
          plate="ABC-1234"
          time="12:24"
          className="occupied"
        />
        <ItemCard number={4} className="free" />
        <ItemCard
          number={6}
          plate="ABC-1234"
          time="12:24"
          className="occupied"
        />
      </div>
    </div>
  );
}
