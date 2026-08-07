"use client";

import { motion } from "framer-motion";

import {
  FileText,
  MessagesSquare,
  CreditCard,
} from "lucide-react";

const StepCard = ({ step, index }) => {

  const iconMap = {
    "01": FileText,
    "02": MessagesSquare,
    "03": CreditCard,
  };

  const Icon = iconMap[step.id];

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
        duration: 0.5,
        delay: index * 0.2,
      }}
      className="
      relative
      rounded-3xl
      border
      border-border
      bg-surface
      p-8
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-primary/30
      hover:shadow-xl
      "
    >
      {/* Step Number */}

      <div className="absolute right-6 top-6 text-5xl font-extrabold text-accent/10">
        {step.id}
      </div>

      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

        <Icon
          size={30}
          className="text-primary"
        />

      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold text-foreground">
        {step.title}
      </h3>

      {/* Description */}

      <p className="mt-4 leading-7 text-muted">
        {step.description}
      </p>

    </motion.div>
  );
};

export default StepCard;