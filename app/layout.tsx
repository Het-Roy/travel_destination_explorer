import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Destination - Travel Destination Explorer",
  description: "Browse curated travel places organized by geographic region and terrain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="w-[98vw] border border-slate-700 h-[7vh] flex items-center bg-slate-800">
          <Link className="w-[15%] h-[100%] flex items-center pl-[2vw] font-bold text-[1.4vw] text-cyan-400" href={"/"}>
            Travel Destination
          </Link>
          <div className="flex ml-[4vw] w-[35%] font-bold gap-[1vw] h-[100%]">
            <Link className="w-[100%] h-[100%]" href={"/"}>
              <div className="flex w-[100%] h-[100%] border-b-[0.2vw] border-cyan-500 justify-center items-center text-slate-200">
                Destinations
              </div>
            </Link>
            <Link className="w-[100%] h-[100%]" href={"/regions"}>
              <div className="flex w-[100%] h-[100%] border-b-[0.2vw] border-cyan-500 justify-center items-center text-slate-200">
                Regions
              </div>
            </Link>
            <Link className="w-[100%] h-[100%]" href={"/about"}>
              <div className="flex w-[100%] h-[100%] border-b-[0.2vw] border-cyan-500 justify-center items-center text-slate-200">
                About
              </div>
            </Link>
          </div>

          <div className="ml-auto mr-[2vw] flex items-center gap-[1vw]">
            <Link className="bg-cyan-600 text-white px-[1.2vw] py-[0.5vw] rounded-[0.5vw] font-bold text-[1vw] hover:bg-cyan-500 transition-colors" href={"/overview"}>
              Plan Trip
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
