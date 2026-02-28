/**
 * @component DiscoverPage
 * @part-of Web3School — AI Career Discovery
 * @design Full-screen chat interface, dark theme
 * @flow User has 10-minute AI conversation → redirected to /results
 */
import { DiscoveryChat } from "@/components/app/DiscoveryChat";

export const metadata = {
  title: "Discover Your Career Path",
};

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-navy-deep">
      <DiscoveryChat />
    </div>
  );
}
