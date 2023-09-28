import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

//Imports pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Tracker from "./pages/tracker/Tracker";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { ProtectedRoute } from "./Components/ProtectedRoute";

import { AuthContextProvider } from "../context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="App">
          <BrowserRouter>
            <Sidebar />
            <div className="container">
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/projects/:id" element={<Project />} />
                <Route path="/ptotracker" element={<Tracker />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </AuthContextProvider>
    </>
  );
}
export default App;
