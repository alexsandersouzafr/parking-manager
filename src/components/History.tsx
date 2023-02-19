import { HistoryContext } from "@/contexts/HistoryContext";
import { useContext } from "react";

export default function History() {
  const { history } = useContext(HistoryContext);

  return (
    <div>
      {!history.length ? (
        <span>
          Sem histórico. Movimente as vagas do estacionamento para gerar
          automaticamente entradas no histórico.
        </span>
      ) : (
        <table>
          <thead>
            <tr>
              <th>VAGA</th>
              <th>PLACA</th>
              <th>NOME</th>
              <th>HORA</th>
              <th>AÇÃO</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => (
              <tr key={Math.random()}>
                <td>{entry.id}</td>
                <td>{entry.plate}</td>
                <td>{entry.name}</td>
                <td>{entry.time}</td>
                <td>{entry.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
