import Link from "next/link";

export default function About() {
  return (
    <div className="w-[100vw] flex flex-col items-center pt-[4vw] pb-[5vw]">
      <div className="w-[70vw] border border-slate-700 rounded-[0.5vw] p-[2.5vw] bg-slate-800">
        <div className="text-[2.5vw] font-bold text-slate-100">About Wayfinder</div>
        <div className="text-[1.1vw] text-slate-400 mt-[1vw] leading-relaxed">
          Wayfinder is a spatial exploration index cataloging curated global travel destinations, regional hierarchies, and transit networks.
        </div>

        <div className="border-t border-slate-700 mt-[2vw] pt-[1.5vw] flex gap-[1vw]">
          <Link
            href={"/"}
            className="border border-cyan-700 px-[1vw] py-[0.5vw] rounded font-bold text-[0.95vw] bg-cyan-900/40 text-cyan-300 hover:bg-cyan-800/50 transition-colors"
          >
            Explore Destinations
          </Link>
          <Link
            href={"/regions"}
            className="border border-slate-600 px-[1vw] py-[0.5vw] rounded font-bold text-[0.95vw] bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors"
          >
            Browse Regions
          </Link>
        </div>
      </div>
    </div>
  );
}
