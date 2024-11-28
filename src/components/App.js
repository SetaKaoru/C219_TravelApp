import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleDeleteItem(targetIndex) {
    setItems((prevItems) => prevItems.filter((_, index) => index !== targetIndex));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
