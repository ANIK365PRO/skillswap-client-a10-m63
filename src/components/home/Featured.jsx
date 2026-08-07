import { getTaskByStatusLimit } from "@/lib/api/home";
import FeaturedTaskCard from "./FeaturedTaskCard";


const Featured = async () => {
  const mobileFeaturedTasks = await getTaskByStatusLimit("open", 3);
  const laptopFeaturedTasks = await getTaskByStatusLimit("open", 6);

  return (
    <section className="mx-auto bg-primary/5 border-y ">

        <div className="mx-auto max-w-7xl px-4 py-20">

            <div className="mb-12 text-center">
                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Featured Tasks
                </span>

                <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                Latest Featured Tasks
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted">
                Explore the newest freelance opportunities posted by clients.
                Find projects that match your skills and start earning today.
                </p>
            </div>

            {/* Mobile */}
            <div className="grid gap-6 md:hidden">
                {mobileFeaturedTasks.map((task) => (
                <FeaturedTaskCard key={task._id} task={task} />
                ))}
            </div>

            {/* Tablet + Desktop */}
            <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
                {laptopFeaturedTasks.map((task) => (
                <FeaturedTaskCard key={task._id} task={task} />
                ))}
            </div>

        </div>


    </section>
  );
};

export default Featured;