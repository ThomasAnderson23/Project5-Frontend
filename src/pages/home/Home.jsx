import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Home = () => {
 
  const { userState } = useContext(UserContext);
  console.log(userState)
  const user = userState.infoUser

  return (
    <div>
     <h1>Bienvenido, {user.email}</h1>
    </div>
  )
}

export default Home;