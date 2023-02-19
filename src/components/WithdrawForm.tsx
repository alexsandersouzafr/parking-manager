import { HistoryContext, HistoryEntry } from "@/contexts/HistoryContext";
import { Spot } from "@/contexts/ParkingContext";
import { Action } from "@/reducers/ParkingReducer";
import { Dispatch, useContext } from "react";

type Props = {
  state: Spot[];
  close: () => void;
  dispatch: Dispatch<Action>;
  id: number;
};

export default function WithdrawForm({ close, dispatch, id, state }: Props) {
  const { history, addHistoryEntry } = useContext(HistoryContext);
  const spot = state[id - 1];

  return (
    <>
      <div className="modal-background"></div>
      <div className="modal">
        Liberar vaga {id}?
        <div
          className="yellow-button"
          onClick={() => {
            dispatch({ type: "withdraw", payload: { ...spot } });
            addHistoryEntry({
              id: spot.id,
              name: spot.name,
              plate: spot.plate,
              action: "saída",
              time: new Date().toLocaleTimeString(),
            });

            close();
          }}
        >
          LIBERAR
        </div>
        <div
          className="yellow-button"
          onClick={() => {
            close();
          }}
        >
          CANCELAR
        </div>
      </div>
    </>
  );
}
