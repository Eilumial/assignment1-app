//import React, { useState } from "react";
import React from "react";
//import ExpenseDate from "./ExpenseDate";
import Card from "../../UI/Card";
import "./UserItem.css";

// function ExpenseItem
const UserItem = (props) => {
  //Create a new const which use the State of the title of props
  //const [title, setTile] = useState(props.title);

  // const clickHandler = () => {
  //   setTile("Updated");
  // };
  console.log("Inside UserItem " + props.username);
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <h2>{props.username}</h2>
        <div className="expense-item__price">{props.age}</div>
      </div>
      {/* <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div> */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default UserItem;
