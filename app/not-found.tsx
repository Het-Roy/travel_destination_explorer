import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-[100vw] flex flex-col items-center pt-[3vw] pb-[5vw]">
      <div className="w-[70vw] border border-slate-700 rounded-[0.5vw] p-[2.5vw] bg-slate-800">
        <div className="flex justify-between items-center text-[0.85vw]">
          <span className="border border-slate-600 px-[0.8vw] py-[0.2vw] rounded-full bg-slate-700 text-slate-300 font-bold">
            • 404 • Unresolved Destination Path
          </span>
          <span className="font-mono text-slate-500">REF: ERR_PATH_UNRESOLVED</span>
        </div>

        <div className="mt-[2vw]">
          <div className="text-[2.5vw] font-bold text-slate-100">
            Destination or region not found
          </div>
          <div className="text-[1.1vw] text-slate-400 mt-[0.8vw] leading-relaxed max-w-[50vw]">
            The requested geographic route identifier could not be resolved within the Wayfinder spatial database. The path may have changed or the slug syntax is invalid.
          </div>
        </div>

        <div className="flex gap-[1.5vw] mt-[2vw]">
          <Link
            href={"/"}
            className="bg-cyan-600 text-white font-bold px-[1.5vw] py-[0.8vw] rounded-[0.4vw] text-[0.95vw] hover:bg-cyan-500 transition-colors"
          >
            ↗ Return to Destinations
          </Link>
          <Link
            href={"/regions"}
            className="border border-slate-600 font-bold text-slate-200 px-[1.5vw] py-[0.8vw] rounded-[0.4vw] text-[0.95vw] bg-slate-700 hover:bg-slate-600 transition-colors"
          >
            ▦ Browse All Regions
          </Link>
        </div>

        <div className="border-t border-slate-700 mt-[2.5vw] pt-[1.5vw]">
          <div className="flex justify-between items-center text-[0.8vw] font-bold text-slate-500">
            <span>Suggested Directory Shortcuts</span>
            <span>SPATIAL INDEX VERIFIED</span>
          </div>

          <div className="mt-[1vw] border border-slate-700 rounded divide-y divide-slate-700">
            <Link
              href={"/destinations/1"}
              className="flex justify-between items-center p-[0.8vw] text-[0.95vw] hover:bg-slate-700/50 text-slate-200 transition-colors"
            >
              <span className="font-bold">Kyoto, Japan</span>
              <span className="text-slate-500 font-mono text-[0.85vw]">/destinations/1 →</span>
            </Link>
            <Link
              href={"/destinations/2"}
              className="flex justify-between items-center p-[0.8vw] text-[0.95vw] hover:bg-slate-700/50 text-slate-200 transition-colors"
            >
              <span className="font-bold">Bergen, Norway</span>
              <span className="text-slate-500 font-mono text-[0.85vw]">/destinations/2 →</span>
            </Link>
            <Link
              href={"/regions/asia/japan/kansai"}
              className="flex justify-between items-center p-[0.8vw] text-[0.95vw] hover:bg-slate-700/50 text-slate-200 transition-colors"
            >
              <span className="font-bold">Kansai Region</span>
              <span className="text-slate-500 font-mono text-[0.85vw]">/regions/asia/japan/kansai →</span>
            </Link>
          </div>
        </div>

        <div className="border border-slate-700 rounded-[0.4vw] p-[1vw] mt-[2vw] bg-slate-900/50 font-mono text-[0.8vw] text-slate-400">
          <div className="font-bold text-slate-200 mb-[0.4vw]">ROUTER DIAGNOSTIC NOTE</div>
          <div>query_target: srcdoc</div>
          <div>resolution_tree: null [index match fail at root:destinations/]</div>
          <div>dispatch_timestamp: 2026-10-19T16:55:00.000Z</div>
        </div>
      </div>
    </div>
  );
}
