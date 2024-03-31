import Choose from "./Pages/Choose";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import { useSelector } from "react-redux";
import Profilepage from "./Pages/Profilepage";
import NewLanding from "./Pages/NewLanding";
import Newlogin from "./Pages/Newlogin";
import Newregister from "./Pages/Newregister";
import Editprofilepage from "./Pages/Editprofilepage";
import CreateEmployerpage from "./Pages/CreateEmployerpage";
import Employerprofilepage from "./Pages/Employerprofilepage";
import Editemployerprofilepage from "./Pages/EditEmployerprofile";
import Editemployerabout from "./Pages/EditEmployerabout";
import EditApplicantAbout from "./Pages/EditApplicantAbout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chooseresume from "./Pages/Chooseresume";
import Createresume from "./Pages/Createresume";
import Generatedresume from "./Pages/Generatedresume";
import Createportfolio from "./Pages/Createportfolio";
import Chooseportfolio from "./Pages/Chooseportfolio";
import Generatedportfolio from "./Pages/Generatedportfolio";
import NotFound from "./Pages/NotFound";

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
              <Route path="/profile" element={<Profilepage />} />
              <Route
                path="/employerprofile"
                element={<Employerprofilepage />}
              />
              <Route path="*" element={<NotFound />} />

              {!user.profileType && (
                <>
                  <Route path="/choose" element={<Choose />} />
                  <Route path="/create" element={<Create />} />
                  <Route
                    path="/createemployer"
                    element={<CreateEmployerpage />}
                  />
                </>
              )}

              {user.profileType === "applicant" && (
                <>
                  <Route path="/editprofile" element={<Editprofilepage />} />
                  <Route
                    path="/editapplicantabout"
                    element={<EditApplicantAbout />}
                  />
                  <Route path="/chooseresume" element={<Chooseresume />} />
                  <Route path="/createresume" element={<Createresume />} />
                  <Route
                    path="/resume/:templateId/:resumeId"
                    element={<Generatedresume />}
                  />
                  <Route
                    path="/createportfolio"
                    element={<Createportfolio />}
                  />
                  <Route
                    path="/chooseportfolio"
                    element={<Chooseportfolio />}
                  />
                  <Route
                    path="/portfolio/:templateId/:portfolioId"
                    element={<Generatedportfolio />}
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
        theme="colored"
      />
    </>
  );
}

export default App;
