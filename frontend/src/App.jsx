import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Register from './Pages/Register'
import Choose from './Pages/Choose'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Pages/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/choose" element={<Choose/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
