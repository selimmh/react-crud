import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Page1, Page2, Page3 } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen text-[2rem] bg-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
