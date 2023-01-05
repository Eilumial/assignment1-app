import "./UserListPanel.css";
import React, { useState } from "react";
// import ExpenseList from "./ExpenseList";
// import ExpenseFilter from "./ExpenseFilter";
// import ExpensesChart from "./ExpensesChart";
import Card from "../../UI/Card";
import UserList from "./UserList";

const UserListPanel = (props) => {
  //const [filteredYear, setFilteredYear] = useState("2020");

//   const onChangeFilterHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//     props.changeFilterYear(selectedYear);
//     // const expenseData = {
//     //   ...enteredExpenseData, id: Math.random().toString()
//     // };
//     // props.onAddExpense(expenseData);
//   };

  //console.log(props.arr)

//   const filteredExpenses = props.arr.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

  // let expensesContent = <p >No expenses found</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   ));
  // }
  console.log("ULP:");
  console.log(props.arr);
  return (
    <Card className="expense-panel">
        <UserList arr={props.arr}/>
      {/* <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={onChangeFilterHandler}
      />
      {/* <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList expenses={filteredExpenses} /> */}
      {/* {filteredExpenses.map((expense) => {
        console.log("Exp:" + expense.date.getFullYear().toString());
        console.log("Filt:" + filteredYear.toString());
        if (expense.date.getFullYear().toString() === filteredYear.toString()) {
          return (
            <div>
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              ></ExpenseItem>
            </div>
          );
        } else {
          return expensesContent;
        }
      })} */}

      {/* <ExpenseItem
        title={props.arr[0].title}
        amount={props.arr[0].amount}
        date={props.arr[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.arr[1].title}
        amount={props.arr[1].amount}
        date={props.arr[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.arr[2].title}
        amount={props.arr[2].amount}
        date={props.arr[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.arr[3].title}
        amount={props.arr[3].amount}
        date={props.arr[3].date}
      ></ExpenseItem> */}
    </Card>
  );
};

export default UserListPanel;
