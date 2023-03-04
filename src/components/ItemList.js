import React from "react";

function ItemList(props) {
  return (
    <div>
      <li>
        {props.text}
        <button
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default ItemList;
