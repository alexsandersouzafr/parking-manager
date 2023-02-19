import { Spot } from "@/contexts/ParkingContext";

export type Action = {
  type: "fill" | "withdraw";
  payload: Spot;
};

export default function parkingReducer(state: Spot[], action: Action): Spot[] {
  switch (action.type) {
    case "fill":
      return state.map((spot) => {
        return spot.id === action.payload.id
          ? { ...spot, ...action.payload }
          : spot;
      });
    case "withdraw":
      return state.map((spot) => {
        return spot.id === action.payload.id
          ? { id: spot.id, status: "free" }
          : spot;
      });
    default:
      return state;
  }
}
