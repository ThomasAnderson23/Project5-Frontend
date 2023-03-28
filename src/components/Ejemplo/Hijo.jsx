import { useContext } from 'react';
import UserContext from '../../context/UserContext';

const Hijo = () => {
    const {userState} = useContext(UserContext)
    const token = userState.token;
  return (
    <div>
        <h1>{token}</h1>
    </div>
  )
}

export default Hijo;