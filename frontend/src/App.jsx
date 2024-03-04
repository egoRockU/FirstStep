import Choose from "./Pages/Choose";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import { useSelector } from "react-redux";
import Profilepage from "./Pages/Profilepage";
import NewLanding from "./Pages/NewLanding";
import Newlogin from "./Pages/Newlogin";
import Newregister from "./Pages/Newregister";
import Editprofilepage from "./Pages/Editprofilepage";
import CreateEmployerpage from "./Pages/Createemployerpage";
import Employerprofilepage from "./Pages/Employerprofilepage";
import Editemployerprofilepage from "./Pages/Editemployerprofile";
import Editemployerabout from "./Pages/EditEmployerabout";
import EditApplicantAbout from "./Pages/EditApplicantAbout";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
    <BrowserRouter>
      <Routes>
        {!user && (
          <>
            <Route path="/" element={<NewLanding />} />
            <Route path="/login" element={<Newlogin />} />
            <Route path="/register" element={<Newregister />} />
            <Route path="*" element={<Newlogin />} />
          </>
        )}

        {user && (
          <>
            <Route path="/" element={<NewLanding />} />
            <Route path="/create" element={<Create />} />
            <Route path="/createemployer" element={<CreateEmployerpage />} />
            <Route path="/profile" element={<Profilepage />} />
            <Route path="/employerprofile" element={<Employerprofilepage />} />

            {!user.profileType && <Route path="/choose" element={<Choose />} />}

            {user.profileType === "applicant" && (
              <>
                <Route path="/editprofile" element={<Editprofilepage />} />
                <Route
                  path="/editapplicantabout"
                  element={<EditApplicantAbout />}
                />
              </>
            )}

            {user.profileType === "employer" && (
              <>
                <Route
                  path="/editemployer"
                  element={<Editemployerprofilepage />}
                />
                <Route
                  path="/editemployerabout"
                  element={<Editemployerabout />}
                />
              </>
            )}
          </>
        )}
      </Routes>
    </BrowserRouter>
    
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
   />
</>
  );
}

export default App;
