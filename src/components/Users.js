import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import User from "./User";

const Users = ({ todo, remove, edit }) => {
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [userId, setUserId] = useState(null);

  return (
    <div>
      {isLoading ? (
        <p>Ladataan</p>
      ) : (
        <ul>
          {data.map(u => (
            <li key={u.id} onClick={() => setUserId(u.id)}>
              {u.name}
            </li>
          ))}
        </ul>
      )}
      <div>{userId && <User userId={userId} />}</div>
    </div>
  );
};

export default Users;
