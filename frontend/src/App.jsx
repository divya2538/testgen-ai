import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {

  const [results, setResults] = useState(null);

  const handleGenerate = (data) => {

    setResults({
      testsGenerated: 24,
      coverage: 87,
      bugsFound: 6,
      edgeCases: 14,
      generatedCode: data.tests,
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
