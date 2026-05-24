export default function Dashboard({ results }) {

  if (!results) {
    return (
      <div style={{ padding: "40px", color: "white" }}>
        No results yet. Go back and generate tests.
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <h1>TestGen AI Dashboard 🚀</h1>

      <div style={{ marginTop: "20px" }}>
        <h2>Stats</h2>

        <p>Tests Generated: {results.testsGenerated}</p>
        <p>Coverage: {results.coverage}%</p>
        <p>Bugs Found: {results.bugsFound}</p>
        <p>Edge Cases: {results.edgeCases}</p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Generated Tests</h2>

        <pre style={{
          background: "#1e293b",
          padding: "20px",
          whiteSpace: "pre-wrap"
        }}>
          {results.rawTests}
        </pre>
      </div>

    </div>
  );
}
