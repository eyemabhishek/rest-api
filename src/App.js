import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const f_data = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  useEffect(() => {
    f_data();
  }, []);
  return (
    <div className="App">
      <h1> Dsiplaying list of all user's!!!</h1>
      <small>using rest-api</small>
      <div className="User_container">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <img key={user.avatar} src={user.avatar} alt="user_image" />
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
