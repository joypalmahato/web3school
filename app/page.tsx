/**
 * @component RootPage
 * @part-of Web3School — Landing Page
 * @design Dark theme, navy bg, purple accents
 * @flow Redirects to marketing landing page
 */
export default function RootPage() {
  return (
    <main className="min-h-screen bg-navy-deep flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-heading font-bold text-text-primary">
          Web3School
        </h1>
        <p className="text-text-secondary">
          AI-Powered Web3 Career Discovery Platform
        </p>
      </div>
    </main>
  );
}
