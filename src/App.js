import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Users,
  Messages,
  Branches,
  Info,
  Components,
  Settings,
  Error,
} from "./pages";
import { Sidebar, Alert } from "./components";

import { Context } from "./context";

function App() {
  const { alert } = useContext(Context);
  return (
    <div className="h-screen w-screen bg-gray-100 text-gray-600 overflow-hidden">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/info" element={<Info />} />
          <Route path="/components" element={<Components />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      {alert && <Alert type={alert.type} message={alert.message} />}
    </div>
  );
}

export default App;
