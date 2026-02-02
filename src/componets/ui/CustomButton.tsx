import { motion } from "motion/react";

function CustomButton({ data }: { data: string }) {
  return (
    <motion.button
      initial={{ borderRadius: 16 }}
      whileHover={{
        borderRadius: 100,
        transition: { duration: 1, ease: "linear" },
      }}
      transition={{ duration: 0.5 }}
      className="border-gray cursor-pointer rounded-2xl border-2 px-8 py-5 font-semibold tracking-widest uppercase"
    >
      {data}
    </motion.button>
  );
}

export default CustomButton;
