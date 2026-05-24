import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage({ onGenerate }) {

  const [jiraInput, setJiraInput] = useState("");
  const [openApi, setOpenApi] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGenerate = async () => {

    if (!jiraInput.trim()) {

      alert("Please enter Jira Requirement");
      return;
    }

    try {

      setLoading(true);

      console.log("Sending request to backend...");

      const response = await fetch(
        "https://testgen-ai-backend.onrender.com/generate-tests",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            code: `
OpenAPI:
${openApi}

Jira Requirement:
${jiraInput}
            `,
          }),
        }
      );

      console.log("Response Status:", response.status);

      // BACKEND FAILED
      if (!response.ok) {

        const errorText = await response.text();

        console.log("Backend Error:", errorText);

        alert(errorText);

        return;
      }

      // PARSE RESPONSE
      const data = await response.json();

      console.log("Backend Data:", data);

      // SUCCESS
      if (data.status === "success") {

        onGenerate({
          tests: data.tests || [],
          coverage: data.coverage || 0,
          bugsFound: data.bugsFound || 0,
          edgeCases: data.edgeCases || 0,
        });

        navigate("/dashboard");

      } else {

        console.log("FULL BACKEND RESPONSE:", data);

        alert(data.message || "Failed to generate tests");
      }

    } catch (error) {

      console.log("Frontend Error:", error);

      alert(error.message || "Backend connection failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="landing-container">

      <div className="particles"></div>

      <div className="navbar">
        <h1 className="logo">TestGen AI</h1>
      </div>

      <div className="hero-section">

        <div className="badge">
          Autonomous QA Generation Platform
        </div>

        <h1 className="hero-title">
          AI Powered <span className="gradient-text">Test Generation</span>
        </h1>

        <p className="hero-description">
          Generate unit tests, API tests, edge cases,
          Playwright suites, and security checks
          automatically using AI.
        </p>

      </div>

      <div className="glass-panel">

        <h2 className="panel-title">
          Generate AI Tests
        </h2>

        <input
          placeholder="OpenAPI URL"
          value={openApi}
          onChange={(e) => setOpenApi(e.target.value)}
          className="ai-input"
        />

        <textarea
          placeholder="Enter Jira Requirement"
          value={jiraInput}
          onChange={(e) => setJiraInput(e.target.value)}
          className="ai-textarea"
        />

        <button
          onClick={handleGenerate}
          className="primary-btn generate-btn pulse-btn"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Tests"}
        </button>

      </div>

    </div>
  );
}
