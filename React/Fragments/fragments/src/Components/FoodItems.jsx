import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ Items }) => {
  const [activeItems, setActiveItems] = useState([]);

  function buyBtn(item) {
    if (activeItems.includes(item)) {
      // If item is already active, remove it
      const newActiveItems = activeItems.filter((activeItem) => activeItem !== item);
      setActiveItems(newActiveItems);
    } else {
      // If item is not active, add it
      setActiveItems((prevActiveItems) => [...prevActiveItems, item]);
    }
  }

  return (
    <ul className="list-group">
      {Items.map((item) => (
        <Item
          key={item}
          item={item}
          bought={activeItems.includes(item)}
          buyBtn={() => buyBtn(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
