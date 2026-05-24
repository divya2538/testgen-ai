import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const [results, setResults] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage onGenerate={setResults} />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard results={results} />}
      />
    </Routes>
  );
}

export default App;
