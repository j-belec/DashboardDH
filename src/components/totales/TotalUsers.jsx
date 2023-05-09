import { useState, useEffect } from "react";
import "./Totales.css";

function TotalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/users/all")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users.count);
      });
  }, []);

  return (
    <div className="total">
      <h2>Total de usuarios</h2>
      <h3>{users}</h3>
    </div>
  );
}

export default TotalUsers;
