import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const User1 = () => {

  const { users } = useContext(UserContext);

  return <div></div>;
};

export default User1;
