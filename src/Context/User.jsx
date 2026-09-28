import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const User = () => {

  const { users } = useContext(UserContext);

  return <div></div>;
};

export default User;
