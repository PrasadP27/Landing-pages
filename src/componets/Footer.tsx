import CustomButton from "./ui/CustomButton";
import footerImg from "../assets/VERTX.png";
import Seprator from "./ui/Seprator";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function Footer() {
  const translateRef = useRef(null);

  // translateDown
  const { scrollYProgress: translateDownYProgress } = useScroll({
    target: translateRef,
    offset: ["start end", "end start"],
  });
  const transalteDownAni = useTransform(
    translateDownYProgress,
    [0, 1],
    [-100, 100],
  );
  return (
    <footer className="w-full text-center">
      <motion.div
        ref={translateRef}
        style={{ y: transalteDownAni }}
        className="max-width py-8"
      >
        <div className="flex items-center justify-between py-12">
          <p className="text-lightgray">Prasad Panchal @ 2026</p>

          <CustomButton data="Order now" type="dark" />
        </div>

        <div className="mb-20">
          <Seprator />
        </div>
        <img src={footerImg} alt="VERTX" className="w-full" />
      </motion.div>
    </footer>
  );
}

export default Footer;
