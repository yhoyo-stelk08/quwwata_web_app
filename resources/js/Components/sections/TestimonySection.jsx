import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TestimonySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      className="flex w-full items-center justify-center"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full p-12 text-center max-w-5xl">
        <swiper-container
          class="mySwiper"
          pagination="true"
          pagination-clickable="true"
          // navigation="true"
          loop="true"
          space-between="30"
          centered-slides="true"
          autoplay-delay="5000"
          autoplay-disable-on-interaction="false"
          style={{
            "--swiper-pagination-color": "#cdd4cf",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          <swiper-slide>
            <div className="flex flex-col text-lg items-center text-slate-200 justify-center h-32 my-8 italic">
              <p>
                "The Turkish Laminated Bow improved my accuracy and helped me
                secure first place at the national championships. It's a
                must-have for serious archers"
              </p>
              <h3 className="my-4 py-8 text-slate-800">Sarah Thompson</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="flex flex-col text-lg items-center text-slate-200 justify-center h-32 my-8 italic">
              <p>
                "The Tartar Laminated Bow is both authentic and high-performing.
                It drew admiration at our reenactment event and feels like a
                piece of history in my hands"
              </p>
              <h3 className="my-4 py-8 text-slate-800">Michael Johnson</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="flex flex-col text-lg items-center text-slate-200 justify-center h-32 my-8 italic">
              <p>
                "The Turkish Flat Fiber Bow made learning archery enjoyable. Its
                ease of handling and accuracy have significantly improved my aim
                and control."
              </p>
              <h3 className="my-4 py-8 text-slate-800">Emily Davis</h3>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="flex flex-col text-lg items-center text-slate-200 justify-center h-32 my-8 italic">
              <p>
                "The Cremean Laminated Bow is powerful and precise. It helped me
                take down a deer with a single shot last season, making it
                essential for serious bowhunters."
              </p>
              <h3 className="my-4 py-8 text-slate-800">Robert Martinez</h3>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </motion.div>
  );
};
export default TestimonySection;
