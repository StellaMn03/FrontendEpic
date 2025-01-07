import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUserData } from "../types";

export const UserList = () => {
  const [users, setUsers] = useState<IUserData[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border-b py-2">
            <Link
              to={`/user/${user.id}`}
              className="text-indigo-600 hover:underline"
            >
              {user.name} {user.surname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
