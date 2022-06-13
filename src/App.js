import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Page1, Page2, Page3 } from "./pages";
import { Navbar, Notification } from "./components";

import { Context } from "./context";

function App() {
  const { notification } = useContext(Context);
  return (
    <div className="h-screen w-screen text-[2rem] bg-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
    </div>
  );
}

export default App;
