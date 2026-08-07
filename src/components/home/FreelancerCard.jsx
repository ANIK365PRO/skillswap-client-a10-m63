import Image from "next/image";
import { Card, Chip } from "@heroui/react";

import { Star, BadgeCheck } from "lucide-react";

const FreelancerCard = ({ freelancer }) => {
  return (
    <Card
      className="
      group
      rounded-3xl
      border
      border-border
      bg-surface
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-primary/30
      hover:shadow-xl
    "
    >
      <div className="flex flex-col items-center">

        <Image
          src={freelancer.image}
          alt={freelancer.name}
          width={90}
          height={90}
          className="rounded-full border-4 border-primary/10 object-cover"
        />

        <h3 className="mt-5 text-xl font-bold text-foreground">
          {freelancer.name}
        </h3>

        <div className="mt-3 flex items-center gap-2 rounded-full bg-warning/10 px-3 py-1">

          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-semibold">
            {freelancer.averageRating}
          </span>

        </div>

        <div className="mt-4 flex items-center gap-2 text-muted">

          <BadgeCheck
            size={18}
            className="text-success"
          />

          <span>
            {freelancer.completedJobs} Completed Jobs
          </span>

        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">

          {freelancer.skills.map((skill) => (
            <Chip
              key={skill}
              variant="soft"
              color="primary/20"
              className= "bg-primary/20"
            >
              {skill}
            </Chip>
          ))}

        </div>

      </div>
    </Card>
  );
};

export default FreelancerCard;