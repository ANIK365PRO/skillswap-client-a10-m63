
import StepCard from "./StepCard";
import { steps } from "@/lib/stepsData";



const HowItWorks = () => {
  return (
    <section className="border-y border-border bg-primary/3 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Simple Process
          </span>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            How It Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Complete your project in three simple steps—from posting a task
            to hiring the right freelancer.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;