import React, { useState } from "react";
import RegisterPanel from "./component/Register/RegisterPanel";
import UserListPanel from "./component/UserList/UserListPanel";
const DUMMY_USERS = [
  {
    id: "1",
    username: "abc",
    age: 100,
  },
];

const MAX_AGE = 50;
function App() {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];

      //Adds to end of expenses list
      //return [...prevExpenses, expense];
    });
  };
  console.log("App:");
  console.log(users);
  return (
    <div>
      <RegisterPanel arr={users} maxAge={MAX_AGE}
      onAddUser={addUserHandler}/>
      <UserListPanel arr={users}/>
    </div>    
  );
}

export default App;
