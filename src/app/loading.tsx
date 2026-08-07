export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-500">
          Raihan.dev
        </p>

        <div className="mt-6 h-1 w-56 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-slate-950" />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Preparing portfolio experience...
        </p>
      </div>
    </main>
  );
}