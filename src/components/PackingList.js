export default function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
    function Item({ description, quantity, packed, handleUpdateItem, id }) {
        return (
          <div>
            <h3 style={packed === false ? { textDecoration: "line-through" } : {}}>
              <input type="checkbox" checked={packed} onChange={() => handleUpdateItem(id)}/>
               {description} ({quantity})
            </h3>
          </div>
        );
      }
    return (
        <div className="list">
            <ul>
            {items.map((item, index) => (
                    <li>
                        <Item
                        key={item.id}
                        description={item.description}
                        quantity={item.quantity}
                        packed={item.packed}
                        id={item.id}
                        handleUpdateItem={handleUpdateItem}
                        />
                        <img src="delete.png" alt="Delete" width="30" onClick={() => handleDeleteItem(index)}></img>
                    </li>
                ))}
            </ul>
        </div>
    );
  }