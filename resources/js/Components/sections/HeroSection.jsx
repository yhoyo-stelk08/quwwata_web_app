import { Link } from "@inertiajs/react";
import ImageSlideShow from "../common/ImageSlideShow";

const HeroSection = () => {
  return (
    <header className="flex my-12 mx-auto w-[90%] max-w-7xl shadow-xl shadow-slate-700">
      <div className="w-[30rem] h-[32rem]">
        <ImageSlideShow />
      </div>
      <div className="px-6 bg-gradient-to-r from-slate-800  to-slate-300  rounded-tr-lg rounded-br-lg w-full">
        <div className="my-6 mt-32 text-2xl text-[#ddd6cb]">
          <h1 className="my-8 text-4xl font-bold font-raleway tracking-[1.5rem] uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-950 ">
            <span className="text-slate-400 font-roboto_condensed text-6xl">
              Next
            </span>{" "}
            Level Bow <br />
            <span className="text-slate-400 font-roboto_condensed text-6xl">
              for
            </span>{" "}
            <br />
            <span className="text-slate-400 font-roboto_condensed text-6xl">
              Next
            </span>{" "}
            Level Archer
          </h1>
          <p>Taste and Feel Our Next Level Bow.</p>
        </div>
        {/* CTA div */}
        <div className="flex gap-4 text-2xl">
          <Link
            className="inline-block mt-4 pl-0 py-1 text-slate-200 hover:text-slate-300 active:text-slate-200"
            href="#"
          >
            Join the Community
          </Link>
          <Link
            className="inline-block mt-4 rounded-xl text-slate-200 py-1 px-4 font-bold bg-gradient-to-br from-slate-600 to-slate-200 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-300"
            href="#"
          >
            Explore Our Collections
          </Link>
        </div>
      </div>
    </header>
  );
};
export default HeroSection;
