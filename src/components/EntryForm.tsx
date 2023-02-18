export default function EntryForm() {
  return (
    <div className="entry-form">
      <div className="grid-gap">
        <div>
          nome:
          <input type="text" />
        </div>
        <div>
          placa:
          <input type="text" />
        </div>
        <div>
          vaga:
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>

      <div className="yellow-button">DAR ENTRADA</div>
    </div>
  );
}
