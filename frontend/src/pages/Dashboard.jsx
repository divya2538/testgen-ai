export default function Dashboard({ results }) {

  const generatedTests = [
    "✅ Valid Login API Test",
    "✅ Invalid Password Edge Case",
    "✅ SQL Injection Security Test",
    "✅ Null Input Validation Test",
    "✅ Unauthorized Access Security Test",
    "✅ Rate Limit Handling Test",
  ]

  const fuzzResults = [
    "⚠ Large Payload Crash Detected",
    "⚠ 500 Error on Invalid JSON",
    "⚠ API Timeout During Stress Test",
    "⚠ Unexpected Response Format Found",
  ]

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 mb-12">

        <div className="flex items-center justify-between flex-wrap gap-4">

          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]">
              TestGen AI Dashboard
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              AI Generated QA Analysis & Fuzz Testing Results
            </p>
          </div>

          <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
            🚀 AI Engine Active
          </div>

        </div>

      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 relative z-10">

        {/* Card 1 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.15)]">

          <h2 className="text-gray-400 mb-3 text-lg">
            Tests Generated
          </h2>

          <p className="text-5xl font-extrabold text-cyan-400">
            {results.testsGenerated}
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.15)]">

          <h2 className="text-gray-400 mb-3 text-lg">
            Coverage
          </h2>

          <p className="text-5xl font-extrabold text-purple-400">
            {results.coverage}%
          </p>
         <div className="mt-4">

         <div className="w-full bg-zinc-800 h-3 rounded-full">

       <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full w-[87%]"></div>

         </div>

       </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.15)]">

          <h2 className="text-gray-400 mb-3 text-lg">
            Bugs Found
          </h2>

          <p className="text-5xl font-extrabold text-pink-400">
            {results.bugsFound}
          </p>

        </div>

        {/* Card 4 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.15)]">

          <h2 className="text-gray-400 mb-3 text-lg">
            Edge Cases
          </h2>

          <p className="text-5xl font-extrabold text-blue-400">
            {results.edgeCases}
          </p>

        </div>

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">

        {/* Generated Test Cases */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.1)]">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-3xl font-bold text-cyan-400">
              Generated Test Cases
            </h2>

            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1 rounded-full text-sm">
              AI Generated
            </span>

          </div>

          <div className="space-y-4">

            {generatedTests.map((test, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl hover:border-cyan-500 transition-all"
              >
                {test}
              </div>
            ))}

          </div>

        </div>

        {/* Fuzz Testing Results */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.1)]">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-3xl font-bold text-purple-400">
              Fuzz Testing Results
            </h2>

            <span className="bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm">
              Security Scan
            </span>

          </div>

          <div className="space-y-4">

            {fuzzResults.map((result, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl hover:border-purple-500 transition-all"
              >
                {result}
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Bottom Status Section */}
      <div className="mt-10 relative z-10">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

          <div className="flex flex-wrap items-center justify-between gap-4">

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-2">
                CI/CD Pipeline Status
              </h2>

              <p className="text-gray-400">
                Last build completed successfully with all test suites passing.
              </p>
            </div>

            <div className="px-5 py-3 bg-green-500/20 text-green-300 rounded-2xl font-bold">
              ✅ Build Passed
            </div>

          </div>

        </div>

      </div>
<div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6">

  <h2 className="text-2xl font-bold text-green-400 mb-2">
    AI Engine Status
  </h2>

  <p className="text-gray-400">
    GPT-based intelligent test generation active.
  </p>

</div>
    </div>
  )
}