import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Profile from "./pages/profile/Profile";
import Setting from "./pages/setting/Setting";
import Community from "./pages/community/Community";
import Error404 from "./pages/error404/Error404";
import Login from "./pages/login/Login";

/**
 * Component React containing Routes path for navigation
 * @component
 */
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage/:userID" element={<Homepage />} />
        <Route path="/profile/:userID" element={<Profile />} />
        <Route path="/setting/:userID" element={<Setting />} />
        <Route path="/community/:userID" element={<Community />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
