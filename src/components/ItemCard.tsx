type Props = {
  number: number;
  className: string;
  plate?: string;
  time?: string;
};

export default function ItemCard({ className, number, plate, time }: Props) {
  return (
    <div className={`item-card ${className}`}>
      <div className="item-number">{number}</div>
      <div>{plate}</div>
      <div>{time}</div>
    </div>
  );
}
