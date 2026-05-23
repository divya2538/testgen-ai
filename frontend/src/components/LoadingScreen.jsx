export default function LoadingScreen() {

  return (

    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-zinc-900 p-10 rounded-3xl w-[700px]">

        <h1 className="text-5xl font-bold text-cyan-400 text-center mb-8">
          TestGen AI Processing...
        </h1>

        {/* Progress Bar */}
        <div className="w-full bg-zinc-800 rounded-full h-4 mb-8 overflow-hidden">

          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full w-[80%] animate-pulse rounded-full"></div>

        </div>

        <div className="space-y-6">

          <div className="flex items-center justify-between">

            <p className="text-2xl">
              Analyzing Requirements...
            </p>

            <div className="w-5 h-5 rounded-full bg-cyan-400 animate-pulse"></div>

          </div>

          <div className="flex items-center justify-between">

            <p className="text-2xl">
              Generating Test Cases...
            </p>

            <div className="w-5 h-5 rounded-full bg-blue-500 animate-pulse"></div>

          </div>

          <div className="flex items-center justify-between">

            <p className="text-2xl">
              Running Fuzz Testing...
            </p>

            <div className="w-5 h-5 rounded-full bg-purple-500 animate-pulse"></div>

          </div>

          <div className="flex items-center justify-between">

            <p className="text-2xl">
              Preparing Coverage Report...
            </p>

            <div className="w-5 h-5 rounded-full bg-pink-500 animate-pulse"></div>

          </div>

        </div>

      </div>

    </div>

  )
}