import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Register from './Pages/Register'
import Choose from './Pages/Choose'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

function App() {

  const {user} = useSelector((state)=>state.user)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/choose" element={ user ? (<Choose/>) : (<Login />)}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
