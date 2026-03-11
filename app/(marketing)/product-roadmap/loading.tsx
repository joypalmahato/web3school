export default function RoadmapLoading() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="h-12 w-48 bg-white/[0.04] rounded-xl animate-pulse mx-auto" />
        <div className="h-6 w-96 bg-white/[0.04] rounded-lg animate-pulse mx-auto" />
        <div className="h-[400px] bg-white/[0.04] rounded-2xl animate-pulse mt-12" />
        <div className="h-[300px] bg-white/[0.04] rounded-2xl animate-pulse" />
      </div>
    </div>
  );
}
