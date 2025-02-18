import fetchUsers from "../services/userService";
import { useState, useEffect } from "react";
import { User } from "../Type";
import UserDisplay from "./userDisplay";


const UserData: React.FC = () => {
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUser(data))
      .catch((error) => {
        setError(error.message || "Something went wrong");
      });
  }, []);

  return (<>
    <h1> User Details </h1>
    <UserDisplay user = {user} error = {error} />
  </>
  )
};

export default UserData;
