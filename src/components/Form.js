import { useState } from "react";

export default function Form({ handleAddItems }) {
    function handleSubmit(e) {
      e.preventDefault();
      let now = new Date();
      let currentTime = now.toLocaleTimeString();
      const newItem = {
        id: currentTime,
        description: description,
        quantity: quantity,
        packed: false,
      };
      handleAddItems(newItem);
    }
  
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleDesc(em) {
      setDescription(em.target.value);
    }
  
    function handleQuan(em) {
      setQuantity(Number(em.target.value));
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select id="quantity" value={quantity} onChange={handleQuan}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input id="item" type="text" value={description} onChange={handleDesc} />
        <input type="submit" value="Add" />
      </form>
    );
  }