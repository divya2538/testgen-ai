import { Routes, Route } from "react-router-dom";
import { useState } from "react";
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
        element={
          <Dashboard
            results={
              results || {
                testsGenerated: 0,
                coverage: 0,
                bugsFound: 0,
                edgeCases: 0,
              }
            }
          />
        }
      />
    </Routes>
  );
}

export default App;
