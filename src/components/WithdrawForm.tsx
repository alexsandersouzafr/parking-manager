import { Spot } from "@/contexts/ParkingContext";
import { Action } from "@/reducers/ParkingReducer";
import { Dispatch } from "react";

type Props = {
  state: Spot[];
  close: () => void;
  dispatch: Dispatch<Action>;
  id: number;
};

export default function WithdrawForm({ close, dispatch, id, state }: Props) {
  return (
    <>
      <div className="modal-background"></div>
      <div className="form">
        Liberar vaga {id}?
        <div
          className="yellow-button"
          onClick={() => {
            dispatch({ type: "withdraw", payload: { ...state[id - 1] } });
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
