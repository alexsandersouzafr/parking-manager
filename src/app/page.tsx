"use client";

import Board from "@/components/Board";
import ParkingContextProvider from "@/contexts/ParkingContext";

export default function Home() {
  return (
    <ParkingContextProvider>
      <div className="container">
        <Board />
      </div>
    </ParkingContextProvider>
  );
}
