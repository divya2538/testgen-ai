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

    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/generate-tests", {
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
      });

      const data = await response.json();

      if (data.status === "success") {
        onGenerate(data);
        navigate("/dashboard");
      } else {
        alert("Failed to generate tests");
      }
    } catch (error) {
      console.log(error);
      alert("Backend connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40, color: "white", background: "#000", minHeight: "100vh" }}>
      <h1>TestGen AI</h1>

      <input
        placeholder="OpenAPI URL"
        value={openApi}
        onChange={(e) => setOpenApi(e.target.value)}
        style={{ width: "100%", padding: 10, marginTop: 10 }}
      />

      <textarea
        placeholder="Jira Requirement"
        value={jiraInput}
        onChange={(e) => setJiraInput(e.target.value)}
        style={{ width: "100%", padding: 10, marginTop: 10, height: 150 }}
      />

      <button onClick={handleGenerate} style={{ marginTop: 20, padding: 10 }}>
        {loading ? "Generating..." : "Generate Tests"}
      </button>
    </div>
  );
}
