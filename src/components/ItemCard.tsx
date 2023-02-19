import { ParkingContext } from "@/contexts/ParkingContext";
import { useContext, useState } from "react";
import EntryForm from "./EntryForm";
import WithdrawForm from "./WithdrawForm";

type Props = {
  id: number;
  plate?: string;
  time?: string;
  status: "free" | "occupied";
};

export default function ItemCard({ status, id, plate, time }: Props) {
  const { park, dispatch } = useContext(ParkingContext);
  const [showModal, setShowModal] = useState(false);
  const displayModal =
    status === "free" ? (
      <EntryForm
        close={() => setShowModal(false)}
        dispatch={(action) => dispatch(action)}
        id={id}
      />
    ) : (
      <WithdrawForm
        state={park}
        close={() => setShowModal(false)}
        dispatch={(action) => dispatch(action)}
        id={id}
      />
    );

  return (
    <>
      <div
        onClick={() => setShowModal(!showModal)}
        className={`item-card ${status}`}
      >
        <div className="item-number">{id}</div>
        <div>{plate}</div>
        <div>{time}</div>
      </div>
      {showModal ? displayModal : null}
    </>
  );
}
