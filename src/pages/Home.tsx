import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from "../componets/ui/CustomButton";
import Seprator from "../componets/ui/Seprator";
import { cards, settings, testimonials } from "../data/data";
import { motion } from "motion/react";

function Home() {
  return (
    <>
      {/* hero section  */}
      <section
        id="#home"
        className="bg-lightgray relative rounded-b-[3rem] p-8 pt-44"
      >
        <div className="max-width text-center">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(3px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="text-dark mb-8 text-center text-[5rem] leading-24 font-medium tracking-tight uppercase"
          >
            Build for Speed <br />
            Designed for freedom
          </motion.h1>

          <CustomButton data="Explore" />

          <motion.img
            initial={{ opacity: "0%" }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            src="https://www.yt-industries.com/_ipx/f_webp&s_2300x1400/https://www.yt-industries.com/media/be/1b/b1/1747664007/JEFFSY-29-CF-MY25-Core4-FogGreen_Side.png%3Fts=1747664007%3Fwidth=1000%26fit=crop,smart"
            alt=""
            className="mx-auto w-[60%]"
          />
        </div>
      </section>

      <section className="p-8 py-36 text-center">
        <div className="max-width">
          <span className="text-text-light text-lg"> The Concept </span>

          <motion.h3
            initial={{ opacity: 0, filter: "blur(3px)", y: 30 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="text-text-light mx-auto mt-8 w-[80%] text-5xl leading-15 tracking-tight"
          >
            The Vertx combines cutting-edge design with rugged trail capability.
            Crafted with an advanced carbon frame and high-performance
            components, it’s engineered to deliver confidence and control across
            every terrain from steep climbs to fast descents
          </motion.h3>
        </div>
      </section>

      <Seprator />

      <section className="p-8 py-36">
        <div className="max-width">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(3px)", y: 30 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="mb-8 text-center text-[5rem] leading-24 font-medium tracking-tight text-white uppercase"
          >
            Core features
          </motion.h1>

          <div className="mx-auto mt-28 max-w-7xl px-4 text-white">
            <div className="grid grid-cols-1 gap-32 md:grid-cols-2">
              {cards.map((card, index) => (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(3px)", y: 30 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  key={index}
                  className="w-full"
                >
                  <img
                    src={card.defaultImg}
                    alt={card.title}
                    className="h-auto w-full rounded-4xl object-cover"
                  />

                  <h4 className="mt-4 text-2xl leading-tight font-medium tracking-tight md:text-3xl">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-base text-gray-400">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Seprator />

      <section className="p-8 py-36">
        <div className="max-width">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(3px)", y: 30 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="mb-8 text-center text-[5rem] leading-24 font-medium tracking-tight text-white uppercase"
          >
            What our customers say
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, filter: "blur(3px)", y: 30 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="slider-container py-8"
          >
            <Slider {...settings}>
              {testimonials.map((data) => (
                <div className="rounded-3xl bg-[#ffffff0d] p-8 text-white">
                  <img src={data.img} alt="" className="size-14 rounded-full" />
                  <p className="py-12 text-[1.2rem] font-light">
                    {data.review}
                  </p>

                  <p className="text-lightgray">{data.name}</p>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      <section className="bg-lightgray relative rounded-[3rem] p-8 pb-16 text-center">
        <div className="max-width relative text-center">
          <motion.img
            initial={{ opacity: "0%" }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            src="https://www.yt-industries.com/thumbnail/bd/c9/c1/1738833154/JEFFSY-29-CF-MY25-Core4-FogGreen_RearND.png_1280x1280.png?ts=1738833304"
            alt=""
            className="mx-auto w-[60%]"
          />
          <h1 className="text-dark mb-8 text-center text-[5rem] leading-24 font-medium tracking-tight uppercase">
            Book your Vertx now
          </h1>

          <CustomButton data="book now" />
        </div>
      </section>
    </>
  );
}

export default Home;
