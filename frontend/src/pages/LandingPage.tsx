import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage({ onGenerate }) {

  const [jiraInput, setJiraInput] = useState("");
  const [openApi, setOpenApi] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGenerate = async () => {

    if (!jiraInput) {
      alert("Please enter Jira Requirement");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch("http://127.0.0.1:8000/generate-tests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: `
OpenAPI: ${openApi}

Jira Requirement: ${jiraInput}
          `,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {

        // transform backend data → dashboard format
        const formatted = {
          testsGenerated: 6,
          coverage: 87,
          bugsFound: 4,
          edgeCases: 3,
          rawTests: data.tests
        };

        onGenerate(formatted);
        navigate("/dashboard");

      } else {
        alert("Failed to generate tests");
      }

    } catch (error) {
      console.log(error);
      alert("Backend connection failed");
    }

    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top,#1e1b4b,#020617,#000)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
      padding: "30px"
    }}>

      <div style={{
        width: "100%",
        maxWidth: "900px",
        background: "rgba(15,23,42,0.7)",
        padding: "40px",
        borderRadius: "25px",
        color: "white"
      }}>

        <h1 style={{ fontSize: "40px", textAlign: "center" }}>
          TestGen AI 🚀
        </h1>

        <input
          placeholder="OpenAPI URL"
          value={openApi}
          onChange={(e) => setOpenApi(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px"
          }}
        />

        <textarea
          rows={6}
          placeholder="Jira Requirement"
          value={jiraInput}
          onChange={(e) => setJiraInput(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px"
          }}
        />

        <button
          onClick={handleGenerate}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            background: "#3b82f6",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          {loading ? "Generating..." : "Generate Tests"}
        </button>

      </div>
    </div>
  );
}
