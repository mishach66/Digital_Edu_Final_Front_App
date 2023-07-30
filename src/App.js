import { Link } from 'react-router-dom';
import './App.css';
import RoutesComponent from './Routes';
import { isUserAdmin } from './helpers';
import { useUser } from './hooks';

const App = () => {
  const {userData} = useUser()

  return ( 
    <div>
      <Link to='/login'>Login</Link> <br />
      <Link to='/register'>Register</Link> <br />
      {isUserAdmin(userData) && <Link to='/products/new'>Add product</Link>}
      <RoutesComponent />
    </div>
    )
}

export default App;
