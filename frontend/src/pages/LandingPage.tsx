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
        onGenerate(data);
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

      {/* BLUE GLOW */}

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#2563eb",
          filter: "blur(180px)",
          opacity: 0.25,
          top: "-100px",
          left: "-100px",
          borderRadius: "50%",
        }}
      />

      {/* PURPLE GLOW */}

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#c026d3",
          filter: "blur(180px)",
          opacity: 0.25,
          bottom: "-120px",
          right: "-120px",
          borderRadius: "50%",
        }}
      />

      {/* MAIN CARD */}

      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          background: "rgba(15,23,42,0.65)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          borderRadius: "35px",
          padding: "50px",
          boxShadow:
            "0 0 60px rgba(59,130,246,0.35)",
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* AI ONLINE */}

        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "40px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >

          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 15px #22c55e",
            }}
          />

          <span
            style={{
              color: "#cbd5e1",
              fontSize: "14px",
            }}
          >
            AI Engine Online
          </span>

        </div>

        {/* TOP BADGE */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >

          <div
            style={{
              padding: "12px 24px",
              borderRadius: "999px",
              background:
                "rgba(255,255,255,0.06)",
              color: "#e2e8f0",
              fontSize: "15px",
              border:
                "1px solid rgba(255,255,255,0.08)",
              marginBottom: "25px",
            }}
          >
            ✨ AI Powered QA Automation
          </div>

        </div>

        {/* TITLE */}

        <h1
          style={{
            textAlign: "center",
            fontSize: "90px",
            margin: 0,
            fontWeight: "900",
            lineHeight: 1,
            background:
              "linear-gradient(to right,#38bdf8,#818cf8,#d946ef)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow:
              "0 0 40px rgba(59,130,246,0.6)",
          }}
        >
          TestGen AI
        </h1>

        {/* SUBTITLE */}

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginTop: "20px",
            fontSize: "22px",
            lineHeight: 1.7,
          }}
        >
          Generate intelligent test cases, fuzz testing,
          QA analytics & automation instantly using AI.
        </p>

        {/* FEATURE BOXES */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >

          {[
            "⚡ AI Test Generation",
            "🛡 Edge Case Detection",
            "🚀 Fast QA Automation",
            "📊 Smart Coverage Reports",
          ].map((item, index) => (

            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "20px",
                borderRadius: "20px",
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                boxShadow:
                  "0 0 25px rgba(59,130,246,0.15)",
              }}
            >
              {item}
            </div>

          ))}

        </div>

        {/* FORM CARD */}

        <div
          style={{
            marginTop: "20px",
            background:
              "rgba(255,255,255,0.03)",
            borderRadius: "30px",
            padding: "35px",
            border:
              "1px solid rgba(255,255,255,0.06)",
          }}
        >

          {/* OPEN API */}

          <label
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            OpenAPI Specification
          </label>

          <input
            type="text"
            value={openApi}
            onChange={(e) => setOpenApi(e.target.value)}
            placeholder="Paste OpenAPI URL..."
            style={{
              width: "100%",
              marginTop: "12px",
              padding: "18px",
              borderRadius: "18px",
              border:
                "1px solid rgba(255,255,255,0.08)",
              background: "#0f172a",
              color: "white",
              fontSize: "16px",
              outline: "none",
              marginBottom: "30px",
            }}
          />

          {/* JIRA */}

          <label
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Jira Requirements
          </label>

          <textarea
            rows={8}
            value={jiraInput}
            onChange={(e) =>
              setJiraInput(e.target.value)
            }
            placeholder="Paste Jira requirement..."
            style={{
              width: "100%",
              marginTop: "12px",
              padding: "22px",
              borderRadius: "22px",
              border:
                "1px solid rgba(255,255,255,0.08)",
              background: "#0f172a",
              color: "white",
              fontSize: "16px",
              resize: "none",
              outline: "none",
            }}
          />

          {/* BUTTON */}

          <button
            onClick={handleGenerate}
            style={{
              width: "100%",
              marginTop: "35px",
              padding: "22px",
              border: "none",
              borderRadius: "22px",
              background:
                "linear-gradient(to right,#06b6d4,#3b82f6,#c026d3)",
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow:
                "0 0 45px rgba(59,130,246,0.65)",
            }}
            onMouseOver={(e) => {
              e.target.style.transform =
                "scale(1.02)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform =
                "scale(1)";
            }}
          >
            {loading
              ? "Generating AI Test Cases..."
              : "⚡ Generate Intelligent Tests"}
          </button>

        </div>

      </div>

    </div>

  );

}