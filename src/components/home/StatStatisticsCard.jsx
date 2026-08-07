"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  Wallet,
} from "lucide-react";

const iconMap = {
  tasks: ClipboardList,
  users: Users,
  money: Wallet,
};

const StatStatisticsCard = ({
  title,
  value,
  icon,
  delay,
}) => {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="
      rounded-3xl
      border
      border-border
      bg-surface
      p-3
      md:p-8
      text-center
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-primary/30
      hover:shadow-xl
      "
    >
      <div className="mx-auto flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-primary/10">

        <Icon
          size={30}
          className="text-primary"
        />

      </div>

      <h3 className="mt-6 text-2xl md:text-4xl font-extrabold text-accent">
        {value}
      </h3>

      <p className="mt-3 text-muted">
        {title}
      </p>
    </motion.div>
  );
};

export default StatStatisticsCard;