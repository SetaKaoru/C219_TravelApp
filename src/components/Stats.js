export default function Stats({items}) {
    const quantity = items.length
    const pack = (items.filter((item) => item.packed === true)).length
    const packPercent = ((pack/quantity) * 100).toFixed(2)
    return (
      <footer className="stats">
        <em>
          You have {quantity} items in the list. You already packed {pack} ({packPercent}%).
          { packPercent === 100. ? " YOU'VE PACKED EVERTHING!" : ""}
        </em>
      </footer>
    );
  }