export default function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
    function Item({ description, quantity, image,  packed, handleUpdateItem, id }) {
        return (
          <div>
            <h3 style={packed === false ? { textDecoration: "line-through" } : {}}>
              <input type="checkbox" checked={packed} onChange={() => handleUpdateItem(id)}/>
               {description} ({quantity})
            </h3>
            <h4>
              <img src={image} alt={description} width="180" height="180"/>
            </h4>
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
                        image={item.image}
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