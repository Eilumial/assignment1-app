import "./UserList.css";
import React from "react";
import UserItem from "./UserItem";
//import ExpenseItem from "./ExpenseItem";

const UserList = (props) => {
  let expensesContent = <p>No expenses found</p>;
  console.log("UL:");
  console.log(props.arr);
  //console.log(props.expenses.length)
  //   if (props.expenses.length > 0) {
  //     expensesContent = props.expenses.map((expense) => (
  //       <div className="expenses-list">
  //         <ExpenseItem
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         ></ExpenseItem>
  //       </div>
  //     ));
  //   }

  if (props.arr.length > 0) {
    return props.arr.map((user) => (
      <div className="expenses-list">
        <UserItem key={user.id} username={user.username} age={user.age}></UserItem>
      </div>
    ));
  }
  //   } else {
  //     return <div className="expenses-list__fallback ">{expensesContent}</div>;
  //   }

  //return(<UserItem/>);
};

export default UserList;
