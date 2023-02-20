import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Board from "@/components/Board";

describe("Board", () => {
  test("renderiza corretamente", () => {
    const { getByTestId } = render(<Board />);
    const boardElement = getByTestId("Board");
    expect(boardElement).toBeInTheDocument();
  });
});

describe("Board", () => {
  test("exibe o quadro de vagas corretamente quando o estado showHistory é false", () => {
    const { getByTestId, queryByTestId } = render(<Board />);
    const boardElement = getByTestId("board-body");
    expect(boardElement).toBeInTheDocument();
    expect(queryByTestId("history")).not.toBeInTheDocument();
  });
});
