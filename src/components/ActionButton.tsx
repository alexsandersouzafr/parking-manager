type Props = {
  text: string;
};

export default function ActionButton({ text }: Props) {
  return <div className="action-button yellow-button">{text}</div>;
}
