import React from "react";
import useFetch from "../hooks/useFetch";

const User = ({ userId }) => {
  const { data, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  return (
    <div>{isLoading ? <p>Ladataan käyttäjää</p> : <h1>{data.name}</h1>}</div>
  );
};

export default User;
