import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {

  const [results, setResults] = useState(null);

  const handleGenerate = (data) => {

    setResults({
      tests: data.tests,
      coverage: data.coverage,
      bugsFound: data.bugsFound,
      edgeCases: data.edgeCases,
    });

  };

  return (

    <div>

      {!results ? (
        <LandingPage onGenerate={handleGenerate} />
      ) : (
        <Dashboard results={results} />
      )}

    </div>

  );

}

export default App;