import { useState } from "react";

export default function LandingPage({ onGenerate }) {
  const [jiraInput, setJiraInput] = useState("");
  const [openApi, setOpenApi] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!jiraInput) {
      alert("Please enter Jira Requirement");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/generate-tests",
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

      const data = await response.json();

      if (data.status === "success") {
        onGenerate({
          testsGenerated: 6,
          coverage: 87,
          bugsFound: 4,
          edgeCases: 3,
          raw: data.tests,
        });

        window.location.href = "/dashboard";
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
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#1e1b4b,#020617,#000)",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          background: "rgba(15,23,42,0.65)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          borderRadius: "35px",
          padding: "50px",
          boxShadow: "0 0 60px rgba(59,130,246,0.35)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>
          TestGen AI
        </h1>

        <input
          value={openApi}
          onChange={(e) => setOpenApi(e.target.value)}
          placeholder="OpenAPI URL"
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />

        <textarea
          rows={8}
          value={jiraInput}
          onChange={(e) => setJiraInput(e.target.value)}
          placeholder="Jira Requirement"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={handleGenerate}
          style={{
            width: "100%",
            padding: "20px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Generating..." : "Generate Tests"}
        </button>
      </div>
    </div>
  );
}
