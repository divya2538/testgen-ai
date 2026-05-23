export default function LoadingScreen() {

  const steps = [
    "Analyzing Requirements...",
    "Generating AI Test Cases...",
    "Running Fuzz Testing...",
    "Preparing QA Analytics...",
  ];

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle,#111827,#000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        fontFamily: "Arial",
      }}
    >

      {/* BACKGROUND GLOW */}

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#2563eb",
          filter: "blur(180px)",
          opacity: 0.2,
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          width: "700px",
          background: "rgba(15,23,42,0.7)",
          borderRadius: "35px",
          padding: "45px",
          backdropFilter: "blur(20px)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          position: "relative",
          zIndex: 2,
          boxShadow:
            "0 0 50px rgba(59,130,246,0.35)",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            fontSize: "58px",
            marginBottom: "45px",
            background:
              "linear-gradient(to right,#38bdf8,#d946ef)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          TestGen AI Processing...
        </h1>

        {steps.map((step, index) => (

          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
              color: "white",
              fontSize: "24px",
            }}
          >

            <span>{step}</span>

            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background:
                  "linear-gradient(to right,#06b6d4,#c026d3)",
                boxShadow:
                  "0 0 20px rgba(59,130,246,0.8)",
              }}
            />

          </div>

        ))}

      </div>

    </div>

  );

}