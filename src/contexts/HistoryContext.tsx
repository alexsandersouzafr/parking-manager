import { createContext, ReactNode, useState } from "react";

export type HistoryEntry = {
  id: number;
  name?: string;
  plate?: string;
  action: "entrada" | "saída";
  time: string;
};

export type HistoryView = {
  history: HistoryEntry[];
  addHistoryEntry: (entry: HistoryEntry) => void;
};

export const HistoryContext = createContext<HistoryView>({
  history: [],
  addHistoryEntry: () => {},
});

const initialState: HistoryView = { history: [], addHistoryEntry: () => {} };

type Props = {
  children: ReactNode;
};

export default function HistoryContextProvider({ children }: Props) {
  const [history, setHistory] = useState<HistoryView>(initialState);
  const addHistoryEntry = (entry: HistoryEntry) => {
    setHistory({ ...history, history: [...history.history, entry] });
  };

  return (
    <HistoryContext.Provider
      value={{ history: history.history, addHistoryEntry: addHistoryEntry }}
    >
      {children}
    </HistoryContext.Provider>
  );
}
