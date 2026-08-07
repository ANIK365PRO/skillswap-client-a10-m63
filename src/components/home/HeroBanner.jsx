"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Sparkles,
  CircleDollarSign,
  UserRoundCheck,
  FileText,
  Search,
  CheckCircle2,
} from "lucide-react";



export default function HeroBanner({ user }) {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Radial Background */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-[180px]" />

        <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-secondary/10 blur-[160px]" />

        <div className="absolute -right-40 bottom-10 h-[350px] w-[350px] rounded-full bg-accent/10 blur-[160px]" />
      </div>

      
      <div
        className="
        absolute
        inset-0
        -z-20
        opacity-[0.05]
        [background-size:48px_48px]
        [background-image:linear-gradient(to_right,#0F4C81_1px,transparent_1px),linear-gradient(to_bottom,#0F4C81_1px,transparent_1px)]
        "
        />
      
      
      {/* Background Blur */}

      
      
      <div className="absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />

      <div className="absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-secondary/10 blur-[110px]" />

      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />
      

      <div className="mx-auto flex max-h-[80vh] w-full max-w-7xl items-center justify-center px-5 sm:px-8 lg:px-12">
       <div className="flex w-full justify-center">

        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-20 top-24 -z-10 h-44 w-44 rounded-full bg-primary/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-20 top-40 -z-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl"
        />

          <motion.div
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -20, 10, 0],
              scale: [1, 1.1, 1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 bottom-10 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: .8,
              ease: "easeOut",
            }}
            className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
          >
            {/* Badge */}
           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary backdrop-blur-md">
              <Sparkles className="text-accent" size={15} />
              Freelance Marketplace
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-black leading-[1.08] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Get your tasks done
              <br />

              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                by skilled freelancers
              </span>
            </h1>


            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg xl:text-xl">
              Post your project, receive competitive proposals from talented
              freelancers, compare offers, and collaborate safely from start
              to finish in one trusted marketplace.
            </p>

            {/* Buttons */}
           <div className="mt-10 flex flex-col md:flex-row items-center gap-4">
              {/* Client */}
              {user?.role === "client" && (
                <Link href="/dashboard/client/add-task">
                  <button
                  
                    className="
                    flex items-center justify-center gap-2
                    rounded-xl
                    bg-primary
                    px-7 py-4
                    font-semibold
                    text-white
                    shadow-lg shadow-primary/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-secondary
                  "
                  >
                    <BriefcaseBusiness size={20} />
                    Post a Task
                  </button>
                </Link>
              )}

              {/* Freelancer */}
              {user?.role === "freelancer" && (
                <Link href="/browse-tasks">
                  <button
                    className="
                    flex items-center justify-center gap-2
                    rounded-xl
                    bg-primary
                    px-7 py-4
                    font-semibold
                    text-white
                    shadow-lg shadow-primary/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-secondary
                    
                  "
                  >
                    Browse Tasks
                    <ArrowRight size={18} />
                  </button>
                </Link>
              )}

              {/* Guest */}
              {!user && (
                <>
                  <Link href="/auth/login">
                    <button
                      className="
                      flex items-center justify-center gap-2
                      rounded-xl
                      bg-primary
                      px-7 py-4
                      font-semibold
                      text-white
                      shadow-lg shadow-primary/20
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-secondary
                    "
                    >
                      <BriefcaseBusiness size={20} />
                      Post a Task
                    </button>
                  </Link>

                  <Link href="/browse-tasks">
                    <button
                      className="
                      flex items-center justify-center gap-2
                      rounded-xl
                      border
                      border-border
                      bg-surface
                      px-7 py-4
                      font-semibold
                      text-foreground
                      transition-all
                      duration-300
                      hover:border-primary
                      hover:text-primary
                    "
                    >
                      Browse Tasks
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </>
              )}
            </div>

              
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="h-2 w-2 rounded-full bg-primary" />
              <div className="h-[2px] w-20 bg-gradient-to-r from-primary via-secondary to-accent" />
              <div className="h-2 w-2 rounded-full bg-accent" />
            </motion.div>





          </motion.div>

          


          
         
        </div>
      </div>
    </section>
  );
}