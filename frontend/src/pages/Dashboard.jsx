export default function Dashboard({ results }) {
  return (
    <div style={{ padding: 40, color: "white", background: "#000", minHeight: "100vh" }}>
      <h1>Dashboard</h1>

      <h2>Tests Generated: {results?.tests?.length || 0}</h2>
      <h2>Coverage: {results?.coverage || 0}%</h2>
      <h2>Bugs Found: {results?.bugsFound || 0}</h2>
      <h2>Edge Cases: {results?.edgeCases || 0}</h2>

      <h3>Generated Tests:</h3>

      <pre style={{ background: "#111", padding: 20 }}>
        {results?.tests || "No tests generated yet"}
      </pre>
    </div>
  );
}
