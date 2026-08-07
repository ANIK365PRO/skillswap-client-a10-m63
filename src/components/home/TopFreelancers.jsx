import FreelancerCard from "./FreelancerCard";
// import { freelancers } from "./dummyFreelancers";



export const freelancers = [
  {
    _id: "1",
    name: "John Smith",
    image: "https://i.pravatar.cc/300?img=1",
    skills: ["React", "Next.js", "MongoDB"],
    averageRating: 4.9,
    completedJobs: 52,
  },
  {
    _id: "2",
    name: "Sarah Wilson",
    image: "https://i.pravatar.cc/300?img=5",
    skills: ["UI/UX", "Figma", "Adobe XD"],
    averageRating: 4.8,
    completedJobs: 41,
  },
  {
    _id: "3",
    name: "Michael Lee",
    image: "https://i.pravatar.cc/300?img=8",
    skills: ["Node.js", "Express", "MongoDB"],
    averageRating: 4.7,
    completedJobs: 36,
  },
  {
    _id: "4",
    name: "Emma Brown",
    image: "https://i.pravatar.cc/300?img=10",
    skills: ["WordPress", "SEO", "Elementor"],
    averageRating: 5.0,
    completedJobs: 61,
  },
  {
    _id: "5",
    name: "David Miller",
    image: "https://i.pravatar.cc/300?img=12",
    skills: ["Flutter", "Firebase", "Dart"],
    averageRating: 4.9,
    completedJobs: 28,
  },
  {
    _id: "6",
    name: "Sophia Davis",
    image: "https://i.pravatar.cc/300?img=15",
    skills: ["Python", "Django", "PostgreSQL"],
    averageRating: 4.8,
    completedJobs: 47,
  },
];

const TopFreelancers = () => { 
  return (
    <section className="bg-background  my-10 py-20">

      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Top Talent
          </span>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Top Freelancers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Work with trusted freelancers who consistently deliver
            high-quality results across various categories.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {freelancers.map((freelancer) => (
            <FreelancerCard
                key={freelancer._id}
                freelancer={freelancer}
            />
            ))}

        </div>

      </div>

    </section>
  );
};

export default TopFreelancers;