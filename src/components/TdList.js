import React, { useState } from "react";
import ItemList from "./ItemList";

function TdItem() {
  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItem((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem, index) => (
            <ItemList
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TdItem;
