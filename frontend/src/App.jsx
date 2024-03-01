import Choose from './Pages/Choose'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Pages/Create';
import { useSelector } from 'react-redux'
import Profilepage from './Pages/Profilepage';
import NewLanding from './Pages/NewLanding';
import Newlogin from './Pages/Newlogin';
import Newregister from './Pages/Newregister';
import Editprofilepage from './Pages/Editprofilepage';
import CreateEmployerpage from './Pages/Createemployerpage';
import Employerprofilepage from './Pages/Employerprofilepage';
import Editemployerprofilepage from './Pages/Editemployerprofile';
import Editemployerabout from './Pages/Editemployerabout';

function App() {

  const {user} = useSelector((state)=>state.user)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLanding />} />
        <Route path="/login" element={<Newlogin/>}/>
        <Route path="/register" element={ !user ? (<Newregister/>) : (<NewLanding />)}/>
        <Route path="/choose" element={ user ? (<Choose/>) : (<Newlogin />)}/>
        <Route path="/create" element={ user ? (<Create/>) : (<Newlogin />)}/>
        <Route path='/editprofile' element={<Editprofilepage/>} />
        <Route path='/profile' element={<Profilepage/>} />
        <Route path='/newlogin' element={<Newlogin/>} />
        <Route path='/newregister' element={<Newregister/>} />
        <Route path='/CreateEmployerpage' element={<CreateEmployerpage/>}/>
        <Route path='/employerprofile' element={<Employerprofilepage/>}/>
        <Route path='/editemployerprofilepage' element={<Editemployerprofilepage/>}/>
        <Route path='/editemployerabout' element={<Editemployerabout/>}/>
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
