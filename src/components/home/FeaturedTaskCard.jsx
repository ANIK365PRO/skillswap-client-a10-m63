import Link from "next/link";

import { Card } from "@heroui/react";

import {
  CircleDollar,
  Calendar,
  Layers3Diagonal,
  Person,
} from "@gravity-ui/icons";

import { ArrowRight } from "lucide-react";

const FeaturedTaskCard = ({ task }) => {
  return (
    <Card className="group h-full rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">

      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {task.category}
        </span>

        <CircleDollar
          aria-label="Budget"
          role="img"
          className="size-6 text-accent"
        />
      </div>

      <Card.Header className="p-0">
        <Card.Title className="line-clamp-2 text-xl font-bold">
          {task.title}
        </Card.Title>

        <Card.Description className="mt-3">
          A new freelance opportunity waiting for skilled professionals. { task.experienceLevel} • Open for proposals
        </Card.Description>
      </Card.Header>

      <div className="my-6 space-y-3 text-sm">

        <div className="flex items-center gap-3">
          <Person className="size-4 text-primary" />
          <span>{task.clientName}</span>
        </div>

        <div className="flex items-center gap-3">
          <Layers3Diagonal className="size-4 text-primary" />
          <span>{task.category}</span>
        </div>

        <div className="flex items-center gap-3">
          <CircleDollar className="size-4 text-primary" />
          <span className="font-semibold text-secondary">
            ${task.budget}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="size-4 text-primary" />
          <span>{task.deadline}</span>
        </div>

      </div>

      <Card.Footer className="p-0 pt-4">
        <Link
          href={`/browse-tasks/${task._id}`}
          className="flex w-full items-center justify-between rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-secondary"
        >
          View Details

          <ArrowRight size={18} />
        </Link>
      </Card.Footer>

    </Card>
  );
};

export default FeaturedTaskCard;