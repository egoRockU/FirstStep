import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Create from './Pages/Create'
import Choose from './Pages/Choose'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/choose" element={<Choose/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
