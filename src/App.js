import { Routes, Route } from "react-router-dom";
// core containers
import Dashboard from "./Containers/Dashboard";
import GistDetail from "./Containers/GistDetail";

// app
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/detail/:id" element={<GistDetail />} />
    </Routes>
  );
}

export default App;
