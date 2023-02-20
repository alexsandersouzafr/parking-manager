import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EntryForm from "../src/components/EntryForm";

test("não envia quando existe campo vasio", () => {
  const dispatchMock = jest.fn();
  const addHistoryEntryMock = {};
  render(<EntryForm close={() => {}} dispatch={dispatchMock} id={1} />);
  const fillButton = screen.getByText("PREENCHER");
  userEvent.click(fillButton);
  expect(dispatchMock).not.toHaveBeenCalled();
  expect(addHistoryEntryMock).not.toHaveBeenCalled();
});
