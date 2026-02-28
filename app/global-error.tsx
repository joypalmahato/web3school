"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0A1A] text-white">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-4 max-w-md">
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-3xl">!</span>
            </div>
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p className="text-gray-400 text-sm">
              {error.message || "An unexpected error occurred."}
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-[#6C63FF] hover:bg-[#7B73FF] text-white rounded-xl font-semibold transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
