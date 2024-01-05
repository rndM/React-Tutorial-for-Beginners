// import { Fragment } from "react";
// inutile si on utilise les <></> pour les fragments au lieu de <Fragment></Fragment>
import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}{" "}
      {/* renvoi la deuxieme condition si les deux conditions sont true */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
