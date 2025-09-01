export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
            Good Morning!
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Welcome to your new Next.js application with Tailwind CSS
          </p>
        </div>
        <div className="inline-block">
          <div className="bg-white rounded-lg shadow-lg px-8 py-4 border border-gray-200">
            <p className="text-sm text-gray-500 font-medium">
              🚀 Ready to build something amazing
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}