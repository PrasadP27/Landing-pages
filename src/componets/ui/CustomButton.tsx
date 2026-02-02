import { motion } from "motion/react";

type ButtonType = "light" | "dark";

function CustomButton({
  data,
  type = "light",
}: {
  data: string;
  type?: ButtonType;
}) {
  const baseClasses =
    "cursor-pointer rounded-2xl border-2 px-8 py-5 font-semibold tracking-widest uppercase";

  const variantClasses =
    type === "dark" ? "border-gray text-lightgray" : "border-gray text-dark";

  return (
    <motion.button
      initial={{ borderRadius: 16 }}
      whileHover={{
        borderRadius: 100,
        transition: { duration: 1, ease: "linear" },
      }}
      transition={{ duration: 0.5 }}
      className={`${baseClasses} ${variantClasses}`}
    >
      {data}
    </motion.button>
  );
}

export default CustomButton;
