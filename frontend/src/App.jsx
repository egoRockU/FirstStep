import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Register from './Pages/Register'
import Choose from './Pages/Choose'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Pages/Create';
import { useSelector } from 'react-redux'
import Profilepage from './Pages/Profilepage';

function App() {

  const {user} = useSelector((state)=>state.user)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={ !user ? (<Register/>) : (<Landing />)}/>
          <Route path="/choose" element={ user ? (<Choose/>) : (<Login />)}/>
          <Route path="/create" element={ user ? (<Create/>) : (<Login />)}/>
          <Route path='/profile' element={<Profilepage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
