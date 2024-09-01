import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import {useSelector} from 'react-redux';
import Spinner from './components/spinners';

function App() {
  const {loading} = useSelector(state => state.alerts);
  return ( 
    <>
      <BrowserRouter>
      {loading  ? (<Spinner/>) :
      (<Routes>
        <Route path = '/' element={<Homepage/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/register' element={<Register/>}/>
      </Routes>
      )};
      
      </BrowserRouter>
    </>
  );
}

export default App;
