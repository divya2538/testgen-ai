import { useState, useEffect } from "react"

import LandingPage from "./pages/LandingPage"
import LoadingScreen from "./components/LoadingScreen"
import Dashboard from "./pages/Dashboard"

function App() {

  const [screen, setScreen] = useState("landing")

  const [results, setResults] = useState({
    testsGenerated: 0,
    coverage: 0,
    bugsFound: 0,
    edgeCases: 0,
  })

  const handleGenerate = () => {

    setScreen("loading")

    setTimeout(() => {

      // Fake AI generated values
      setResults({
        testsGenerated: Math.floor(Math.random() * 200),
        coverage: Math.floor(Math.random() * 100),
        bugsFound: Math.floor(Math.random() * 10),
        edgeCases: Math.floor(Math.random() * 20),
      })

      setScreen("dashboard")

    }, 4000)

  }

  return (
    <>
      {screen === "landing" && (
        <LandingPage onGenerate={handleGenerate} />
      )}

      {screen === "loading" && (
        <LoadingScreen />
      )}

      {screen === "dashboard" && (
        <Dashboard results={results} />
      )}
    </>
  )
}

export default App