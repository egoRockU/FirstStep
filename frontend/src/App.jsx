import Login from './Pages/Login';
import Register from './Pages/Register'
import Choose from './Pages/Choose'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Pages/Create';
import { useSelector } from 'react-redux'
import Profilepage from './Pages/Profilepage';
import NewLanding from './Pages/NewLanding';
import Newlogin from './Pages/Newlogin';
import Newregister from './Pages/Newregister';
import Editprofilepage from './Pages/Editprofilepage';
import Awards from './Modals/Edit Profile/Editawards';

function App() {

  const {user} = useSelector((state)=>state.user)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLanding />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={ !user ? (<Register/>) : (<NewLanding />)}/>
        <Route path="/choose" element={ user ? (<Choose/>) : (<Login />)}/>
        <Route path="/create" element={ user ? (<Create/>) : (<Login />)}/>
        <Route path='/editprofile' element={<Editprofilepage/>} />
        <Route path='/profile' element={<Profilepage/>} />
        <Route path='/newlogin' element={<Newlogin/>} />
        <Route path='/newregister' element={<Newregister/>} />
        <Route path='/awards' element={<Awards/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
