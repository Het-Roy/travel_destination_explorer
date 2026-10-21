import destinationData from "../data/destinationData";
import Link from "next/link";

function Destinations() {
  const arr = destinationData.slice(0, 6);

  return (
    <>
      <div className="w-[100vw] h-[16vw]">
        <div className="w-[100%] text-[0.9vw] pl-[10vw] pt-[2vw] text-slate-400 font-bold">
          CATALOGUE // 01 • LIVE SURVEY
        </div>
        <div className="w-[100%] pl-[10vw] flex justify-between pr-[10vw] items-center">
          <div>
            <div className="text-[2.5vw] font-bold text-slate-100">
              Explore destinations
            </div>
            <div className="text-[1.1vw] text-slate-400 mt-[0.5vw]">
              Browse curated travel places organized by geographic region and terrain.
            </div>
          </div>
          <div className="text-right">
            <div className="text-[0.8vw] text-slate-500 font-bold">
              TOTAL RECORDED ENTITIES
            </div>
            <div className="text-[1.3vw] font-bold text-slate-200">
              06 NODES ACTIVE
            </div>
          </div>
        </div>

        <div className="w-[100%] pl-[10vw] mt-[2vw] flex gap-[1vw] items-center">
          <button className="border px-[1.2vw] py-[0.4vw] rounded-[1vw] text-[0.9vw] font-bold bg-cyan-900/50 text-cyan-300 border-cyan-600">
            All Regions
          </button>
          <button className="border border-slate-600 px-[1.2vw] py-[0.4vw] rounded-[1vw] text-[0.9vw] font-bold text-slate-400 hover:border-cyan-500 hover:text-cyan-300 transition-colors">
            East Asia
          </button>
          <button className="border border-slate-600 px-[1.2vw] py-[0.4vw] rounded-[1vw] text-[0.9vw] font-bold text-slate-400 hover:border-cyan-500 hover:text-cyan-300 transition-colors">
            Southern Europe
          </button>
          <button className="border border-slate-600 px-[1.2vw] py-[0.4vw] rounded-[1vw] text-[0.9vw] font-bold text-slate-400 hover:border-cyan-500 hover:text-cyan-300 transition-colors">
            Scandinavia
          </button>
          <button className="border border-slate-600 px-[1.2vw] py-[0.4vw] rounded-[1vw] text-[0.9vw] font-bold text-slate-400 hover:border-cyan-500 hover:text-cyan-300 transition-colors">
            South America
          </button>
          <button className="border border-slate-600 px-[1.2vw] py-[0.4vw] rounded-[1vw] text-[0.9vw] font-bold text-slate-400 hover:border-cyan-500 hover:text-cyan-300 transition-colors">
            North Africa
          </button>
        </div>
      </div>

      <div className="w-[100vw] pl-[9vw] flex gap-[2vw] p-[1vw] flex-wrap mt-[2vw]">
        {arr.map((e) => {
          return (
            <div key={e.id} className="w-[28%] h-[20vw] rounded-[0.5vw] border border-slate-700 p-[1vw] flex flex-col justify-between bg-slate-800 hover:border-cyan-600 transition-colors">
              <div className="w-[100%] h-[35%] bg-slate-700/50 border border-slate-600 rounded-[0.4vw] flex justify-between items-center px-[1vw]">
                <div className="text-[0.9vw] text-slate-300 font-bold">
                  {e.loc}
                </div>
                <div className="border border-slate-500 bg-slate-800 px-[0.6vw] py-[0.2vw] text-[0.8vw] font-bold text-slate-400 rounded">
                  {e.code}
                </div>
              </div>

              <div className="w-[100%] mt-[0.8vw]">
                <div className="flex justify-between items-center">
                  <div className="text-[1.4vw] font-bold text-slate-100">
                    {e.name}
                  </div>
                  <div className="text-[0.8vw] font-bold text-slate-500">
                    {e.tag}
                  </div>
                </div>
                <div className="text-[0.9vw] text-slate-500 font-bold mt-[0.2vw]">
                  {e.country} • {e.region}
                </div>
                <div className="text-[0.9vw] text-slate-400 mt-[0.5vw] line-clamp-2">
                  {e.description}
                </div>
              </div>

              <div className="w-[100%] border-t border-slate-700 pt-[0.8vw] mt-[0.5vw]">
                <Link
                  className="text-[1vw] font-bold text-cyan-400 flex items-center justify-between hover:text-cyan-300 transition-colors"
                  href={`/destinations/${e.id}`}
                >
                  <span>{"View destination >"}</span>
                  <span className="text-slate-600">•</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-[90vw] ml-[5vw] border border-slate-700 rounded-[0.5vw] p-[1vw] mt-[3vw] mb-[4vw] flex justify-between items-center text-[0.9vw] text-slate-400 bg-slate-800/50">
        <div>
          ⓘ Destinations are systematically validated against public cartographic terrain datasets.
        </div>
        <div className="font-bold text-slate-300">
          COORDINATE FORMAT: WGS84
        </div>
      </div>
    </>
  );
}

export default Destinations;
