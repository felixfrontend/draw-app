import { BrowserRouter, Route, Routes } from "react-router-dom";
import DockView from "./components/DockVIew/DockView";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<DockView />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}
