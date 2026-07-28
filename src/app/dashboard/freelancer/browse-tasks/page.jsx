import Link from "next/link";
import { CircleDollar } from "@gravity-ui/icons";
import { Card, Chip, Button } from "@heroui/react";

import { getTaskByStatus } from "@/lib/api/task";

const BrowseTasksPage = async () => {
  const tasksData = await getTaskByStatus("open");

  return (
    <div className="p-6">
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        Browse Tasks
      </h1>

      <p className="mb-8 text-mutedText">
        Explore open jobs posted by clients and submit your proposal.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {tasksData?.map((task) => (

          <Card
            key={task._id}
            className=" border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Header */}
            <Card.Header className="flex items-start justify-between p-0">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {task.title}
                </h2>

                <p className="mt-1 text-sm text-mutedText">
                  By {task.clientName}
                </p>
              </div>

              <Chip
                className="bg-accent text-black"
                size="sm"
              >
                {task.category}
              </Chip>
            </Card.Header>

            {/* Body */}
            <div className="my-5 space-y-3">
              <div className="flex items-center gap-2">
                <CircleDollar
                  className="size-5 text-primary"
                  aria-label="budget"
                />

                <span className="font-medium text-foreground">
                  ${task.budget}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-mutedText">
                  Deadline
                </span>

                <span className="font-medium text-foreground">
                  {task.deadline}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-mutedText">
                  Experience
                </span>

                <span className="font-medium text-foreground">
                  {task.experienceLevel}
                </span>
              </div>

              <div>
                <p className="mb-2 text-mutedText">
                  Skills
                </p>

                <div className="flex flex-wrap gap-2">
                  {task.skillsRequired?.map((skill) => (
                    <Chip
                      key={skill}
                      size="sm"
                      variant="flat"
                      className="bg-primary/10 text-primary"
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>

              <p className="line-clamp-2 text-sm text-mutedText">
                {task.description}
              </p>
            </div>

            {/* Footer */}
            <Card.Footer className="flex justify-between p-0 pt-4">
              <Chip
                className="bg-success/10 text-success"
                size="sm"
              >
                {task.status}
              </Chip>

                <Link
                href={`/dashboard/freelancer/browse-tasks/${task._id}`}
                >
                    <Button
                        className="bg-primary text-white"
                        size="sm"
                    >
                        View Details
                    </Button>
                </Link>
            </Card.Footer>
          </Card>

        ))}
      </div>
    </div>
  );
};

export default BrowseTasksPage;