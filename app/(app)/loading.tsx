import { Loader2 } from "lucide-react";

export default function AppLoading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Loader2 className="w-8 h-8 text-text-muted animate-spin" />
    </div>
  );
}
