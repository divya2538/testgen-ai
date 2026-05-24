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
        element={<LandingPage onGenerate={(data) => setResults(data)} />}
      />

      <Route
        path="/dashboard"
        element={
          <Dashboard
            results={
              results || {
                tests: [],
                coverage: 87,
                bugsFound: 4,
                edgeCases: 6,
              }
            }
          />
        }
      />
    </Routes>
  );
}

export default App;
