// Import ThemeProvider at the top
import { ThemeProvider } from "./components/ui/theme-provider";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Adminprofile from "./pages/Adminprofile";
import Login from "./pages/Login";
import Viewuser from "./pages/Viewuser";
import ReplyFeedback from "./pages/ReplyFeedback";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardWithThemeProvider />} />
        <Route path="/adminprofile" element={<AdminprofileWithThemeProvider />} /> 
        <Route path="/view" element={<Viewuser />} />
        <Route path = "/reply" element={<ReplyFeedback/>} />
      </Routes>
    </Router>
  );
}

function DashboardWithThemeProvider() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Dashboard />
    </ThemeProvider>
  );
}

function AdminprofileWithThemeProvider() { 
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Adminprofile />
    </ThemeProvider>
  );
}

export default App;
