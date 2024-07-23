import { Link } from "@inertiajs/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import logoImg from "../../../images/logo quwwata.png";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section className="w-full h-64 my-4">
      <div className="flex flex-col w-full h-fit px-6 mt-4 justify-center items-center bg-slate-500">
        <motion.div
          className="flex flex-row max-w-4xl mt-12"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 4 }}
        >
          <img src={logoImg} alt="Logo Quwwata" width="98px" />
          <h3 className="font-pacifico my-auto ml-4 text-xl md:text-2xl text-slate-200">
            Traditional Archery Supply
          </h3>
        </motion.div>
        <div className="flex flex-col items-center justify-center my-8 font-raleway">
          <h3 className="text-slate-200 text-center">
            For daily updates, follow along on Instagram
          </h3>
          <FaInstagramSquare color="#ccccd0" className="w-10 h-10 my-4" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 font-raleway  text-slate-200">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Term and Condition</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </div>
        <div className="flex flex-col md:flex-row w-full max-w-7xl border-t border-t-slate-200 items-center justify-between gap-8 p-8 font-raleway  text-slate-200">
          <h3>
            Powered By <b>F.L.I.R.T</b> Stack
          </h3>
          <h3>
            Copyright &copy; {new Date().getFullYear()} Quwwata. All Rights
          </h3>
          <h3>
            Design By <b>yhoyo-stelk08</b>
          </h3>
        </div>
      </div>
    </section>
  );
};
export default FooterSection;
