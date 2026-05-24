export default function Dashboard({ results }) {

  return (

    <div className="dashboard">

      <div className="particles"></div>

      <div className="dashboard-header">

        <div>
          <h1>TestGen AI Dashboard</h1>

          <p>
            Autonomous QA Test Generation System
          </p>
        </div>

        <div className="status-box">
          <div className="status-dot"></div>
          <span className="live-status">
            AI Engine Active
          </span>
        </div>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>{results?.tests?.length || 0}</h2>
          <p>Tests Generated</p>
        </div>

        <div className="stat-card">
          <h2>{results?.coverage || 0}%</h2>
          <p>Coverage</p>
        </div>

        <div className="stat-card">
          <h2>{results?.bugsFound || 0}</h2>
          <p>Bugs Found</p>
        </div>

        <div className="stat-card">
          <h2>{results?.edgeCases || 0}</h2>
          <p>Edge Cases</p>
        </div>

      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}
      >

        <a
          href="http://127.0.0.1:8000/export/pytest"
          target="_blank"
          rel="noreferrer"
        >
          <button className="generate-btn">
            Download Pytest
          </button>
        </a>

        <a
          href="http://127.0.0.1:8000/export/playwright"
          target="_blank"
          rel="noreferrer"
        >
          <button className="generate-btn">
            Download Playwright
          </button>
        </a>

      </div>

      <div className="glass-card">

        <h2>Generated AI Test Cases</h2>

        {results?.tests?.length > 0 ? (

          <div className="test-list">

            {results.tests.map((test, index) => (

              <div
                key={index}
                className="test-card"
              >

                <h3
                  style={{
                    color: "#38bdf8",
                    marginBottom: "15px"
                  }}
                >
                  {test.title}
                </h3>

                <p style={{ marginBottom: "10px" }}>
                  <strong>Category:</strong>{" "}
                  {test.category}
                </p>

                <p style={{ marginBottom: "10px" }}>
                  <strong>Priority:</strong>{" "}
                  {test.priority}
                </p>

                <div style={{ marginBottom: "15px" }}>

                  <strong>Steps:</strong>

                  <ul
                    style={{
                      marginTop: "10px",
                      paddingLeft: "20px",
                      color: "#cbd5e1"
                    }}
                  >

                    {test.steps?.map((step, i) => (

                      <li
                        key={i}
                        style={{ marginBottom: "6px" }}
                      >
                        {step}
                      </li>

                    ))}

                  </ul>

                </div>

                <p
                  style={{
                    color: "#94a3b8",
                    lineHeight: "1.6"
                  }}
                >
                  <strong>Expected:</strong>{" "}
                  {test.expected}
                </p>

              </div>

            ))}

          </div>

        ) : (

          <p className="empty-text">
            No tests generated yet
          </p>

        )}

      </div>

      <div className="footer">

        <p>
          TestGen AI • Autonomous QA Agent •
          AI-Powered Testing Platform
        </p>

      </div>

    </div>

  );

}