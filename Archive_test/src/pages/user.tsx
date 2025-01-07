import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUserData } from "../types";

export const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUserData | null>(null);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <p>undefined</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">
        {user.name} {user.surname}
      </h1>
      <p>Age: {user.age}</p>
      <p>Salary: ${user.salary}</p>
    </div>
  );
};
