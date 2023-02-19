import { Action } from "@/reducers/ParkingReducer";
import { Dispatch, useState } from "react";

type Props = {
  close: () => void;
  dispatch: Dispatch<Action>;
  id: number;
};

export default function EntryForm({ close, dispatch, id }: Props) {
  const [name, setName] = useState("");
  const [plate, setPlate] = useState("");

  return (
    <>
      <div className="modal-background"></div>
      <div className="form">
        <div className="grid-gap spot-number">
          Preencher a vaga {id}?
          <div>
            <input
              type="text"
              placeholder="digite aqui o seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="digite aqui a placa do carro"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-right">
          <div
            className="yellow-button"
            onClick={() => {
              plate && name
                ? (dispatch({
                    type: "fill",
                    payload: {
                      id: id,
                      name: name,
                      plate: plate,
                      status: "occupied",
                      time: new Date().toLocaleTimeString(),
                    },
                  }),
                  close())
                : null;
            }}
          >
            PREENCHER
          </div>
          <div onClick={() => close()} className="yellow-button">
            CANCELAR
          </div>
        </div>
      </div>
    </>
  );
}
