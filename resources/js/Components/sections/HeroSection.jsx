import useResponsiveWidth from "@/hooks/UseResponsiveWidth";
import { Link } from "@inertiajs/react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageSlideShow from "../common/ImageSlideShow";

const HeroSection = () => {
  const width = useResponsiveWidth();

  const { scrollY } = useScroll();
  let scrollValuePixels = [0, 100, 300, 700];
  let scrollValueOpacity = [1, 0.7, 0.5, 0];

  if (width < 769) {
    scrollValuePixels = [0, 200, 500, 1200, 1800];
    scrollValueOpacity = [1, 0.9, 0.8, 0.5, 0];
  }

  const opacityScroll = useTransform(
    scrollY,
    scrollValuePixels,
    scrollValueOpacity
  );

  return (
    <motion.header
      className="flex flex-col md:flex-row my-12 mx-auto w-[90%] max-w-7xl shadow-xl shadow-slate-700"
      style={{ opacity: opacityScroll }}
    >
      <div className="w-full h-[500px] md:w-[32rem] md:h-[32rem]">
        <ImageSlideShow />
      </div>
      <div className="px-6 bg-gradient-to-r from-slate-800 to-slate-300 rounded-tr-lg rounded-br-lg w-full">
        <div className="my-6 mt-16 xl:mt-12 lg:mt-16 md:mt-24 pl-10 text-center md:text-start text-[#ddd6cb]">
          <h1 className="my-8 text-4xl font-bold font-raleway md:tracking-[1.5rem] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-950">
            <span className="text-slate-400 font-roboto_condensed text-6xl xl:text-8xl lg:text-6xl md:text-4xl">
              Next
            </span>
            <span className="xl:text-3xl lg:text-3xl md:text-2xl font-raleway xl:tracking-[1rem] lg:tracking-[0.8rem]">
              Level Bow
            </span>
            <br />
            <span className="text-slate-400 font-roboto_condensed text-6xl xl:text-8xl lg:text-6xl md:text-4xl">
              for
            </span>
            <br />
            <span className="text-slate-400 font-roboto_condensed text-6xl xl:text-8xl lg:text-6xl md:text-4xl">
              Next
            </span>
            <span className="xl:text-3xl lg:text-3xl md:text-2xl font-raleway xl:tracking-[1rem] lg:tracking-[0.8rem]">
              Level Archer
            </span>
          </h1>
          <p className="md:text-xl">Taste and Feel Our Next Level Bow.</p>
        </div>
        {/* CTA div */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center items-center md:justify-normal pl-10">
          <Link
            className="inline-block mt-4 pl-0 py-1 text-slate-200 hover:text-slate-300 active:text-slate-200 md:text-base"
            href="#"
          >
            Join the Community
          </Link>
          <Link
            className="inline-block mt-4 md:mt-2 rounded-xl text-slate-200 py-1 px-4 font-bold bg-gradient-to-br from-slate-600 to-slate-200 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-300 md:text-base"
            href="#"
          >
            Explore Our Collections
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default HeroSection;
