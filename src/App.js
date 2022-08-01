import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from 'react'

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (userAge, userName) => {
    setUserList((prevState) => {
      return [...prevState, { name: userAge, age: userName, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
