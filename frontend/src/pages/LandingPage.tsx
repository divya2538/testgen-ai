import { useState } from "react"

export default function LandingPage({ onGenerate }) {

  const [openApi, setOpenApi] = useState("")
  const [jiraInput, setJiraInput] = useState("")

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl">

        {/* Badge */}
        <div className="flex justify-center mb-6">

          <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg">

            <p className="text-lg font-semibold text-gray-200">
              ✨ AI Powered QA Automation
            </p>

          </div>

        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]">

          TestGen AI

        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-300 text-xl md:text-2xl mb-14">

          Generate intelligent test cases, fuzz testing & QA analytics instantly.

        </p>

        {/* Form Container */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 md:p-12 shadow-[0_0_60px_rgba(59,130,246,0.15)]">

          {/* OpenAPI Section */}
          <div className="mb-8">

            <label className="block text-2xl font-semibold mb-4 text-cyan-300">

              OpenAPI Specification

            </label>

            <input
              type="text"
              value={openApi}
              onChange={(e) => setOpenApi(e.target.value)}
              placeholder="Paste OpenAPI URL..."
              className="w-full bg-zinc-900/80 border border-zinc-700 rounded-3xl p-5 text-lg outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all"
            />

          </div>

          {/* Jira Input */}
          <div className="mb-10">

            <label className="block text-2xl font-semibold mb-4 text-purple-300">

              Jira Requirements

            </label>

            <textarea
              rows="7"
              value={jiraInput}
              onChange={(e) => setJiraInput(e.target.value)}
              placeholder="Paste Jira requirement..."
              className="w-full bg-zinc-900/80 border border-zinc-700 rounded-3xl p-5 text-lg outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 transition-all resize-none"
            />

          </div>

          {/* Generate Button */}
          <button
            onClick={onGenerate}
            className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white text-2xl font-bold py-5 rounded-3xl shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300"
          >

            ⚡ Generate Intelligent Tests

          </button>

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl">

            <h2 className="text-4xl font-bold text-cyan-400 mb-2">
              124+
            </h2>

            <p className="text-gray-300">
              AI Tests Generated
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl">

            <h2 className="text-4xl font-bold text-purple-400 mb-2">
              87%
            </h2>

            <p className="text-gray-300">
              Coverage Accuracy
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl">

            <h2 className="text-4xl font-bold text-pink-400 mb-2">
              24/7
            </h2>

            <p className="text-gray-300">
              AI Monitoring
            </p>

          </div>

        </div>

      </div>

    </div>

  )
}