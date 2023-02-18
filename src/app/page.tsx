import ActionButton from "@/components/ActionButton";
import Board from "@/components/Board";
import EntryForm from "@/components/EntryForm";
import WithdrawForm from "@/components/WithdrawForm";

export default function Home() {
  return (
    <main>
      <Board />
      <div className="flex-center">
        <ActionButton text="ENTRADA" />
        <ActionButton text="SAÍDA" />
      </div>
      <EntryForm />
      <WithdrawForm />
    </main>
  );
}
