import { Dispatch, ReactNode, createContext, useReducer } from "react";
import parkingReducer, { Action } from "@/reducers/ParkingReducer";

export type Spot = {
  id: number;
  name?: string;
  plate?: string;
  status: "free" | "occupied";
  time?: string;
};

type ParkingContextType = {
  park: Spot[];
  dispatch: Dispatch<Action>;
};

export const initialState = (): Spot[] => {
  let vacancyList: Spot[] = [];
  for (let i = 1; i <= 12; i++) {
    vacancyList.push({ id: i, status: "free" });
  }
  return vacancyList;
};

export const ParkingContext = createContext<ParkingContextType>({
  park: [],
  dispatch: () => null,
});

type Props = {
  children: ReactNode;
};

export default function ParkingContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(parkingReducer, initialState());
  const value = { park: state, dispatch };

  return (
    <ParkingContext.Provider value={value}>{children}</ParkingContext.Provider>
  );
}
