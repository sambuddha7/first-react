import { useState } from "react";

interface props {
    items: string[];
    heading: string;
    onSelectItem: (item:string) => void;
}
function ListGroup({items, heading}:props) {
  const [selectedIndex, setIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item,index) => (
          <li key={item} className={selectedIndex === index ? "list-group-item active" :  "list-group-item"}
          onClick={() => {setIndex(index)}}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;