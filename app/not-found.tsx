import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center px-4">
      <div className="text-center space-y-4 max-w-md">
        <p className="text-6xl font-heading font-bold text-purple-primary">
          404
        </p>
        <h1 className="text-xl font-heading font-bold text-text-primary">
          Page Not Found
        </h1>
        <p className="text-text-secondary text-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-purple-primary hover:bg-purple-light text-white rounded-xl font-semibold transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
