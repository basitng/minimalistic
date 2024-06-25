"use client";
import { Star } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimoniesSection() {
  const [activeTestimony, setActiveTestimony] = useState(0);

  const testimonies = [
    {
      name: "Elon Musk",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      review:
        "I have been using them for a year now. Everything is detailed and well organized and, of course, damn beautiful.",
      founder: "CEO and CTO of SpaceX",
      company: "SpaceX",
    },
    {
      name: "Satya Nadella",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      review:
        "The design system is incredibly intuitive and has significantly improved our development workflow. ",
      founder: "CEO of Microsoft",
      company: "Microsoft",
    },
    {
      name: "Sundar Pichai",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      review:
        "The components are not only visually appealing but also highly functional. It has helped us streamline our design process",
      founder: "CEO of Google and Alphabet",
      company: "Google",
    },
    {
      name: "Mary Barra",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      review:
        "The attention to detail in this design system is remarkable. It has allowed us to maintain consistency across our digital platforms effortlessly.",
      founder: "CEO of General Motors",
      company: "General Motors",
    },
    {
      name: "Tim Cook",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      review:
        "The flexibility and scalability of this system are impressive. It has significantly reduced our time-to-market for new features and products.",
      founder: "CEO of Apple",
      company: "Apple",
    },
    {
      name: "Jensen Huang",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      review:
        "The performance optimizations built into this design system are top-notch. It has helped us create smoother, more responsive user interfaces.",
      founder: "CEO of NVIDIA",
      company: "NVIDIA",
    },
  ];

  return (
    <div className="flex flex-col items-center max-w-3xl py-16 sm:py-24 md:py-32 mx-auto text-center justify-center w-full space-y-4 sm:space-y-6 bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-1 sm:space-x-2">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Star key={index} className="text-black w-4 h-4 sm:w-5 sm:h-5" />
          ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonies[activeTestimony].name}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4 py-4 sm:py-6"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-snug">
            {testimonies[activeTestimony].review}
          </p>
          <div className="flex items-center space-y-1 sm:space-y-2 flex-col text-center">
            <p className="text-sm sm:text-base font-medium">
              {testimonies[activeTestimony].name}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              {testimonies[activeTestimony].founder}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="flex flex-row items-center justify-center flex-wrap gap-2 sm:gap-4"
        layout
      >
        {testimonies.map((testimonial, index) => (
          <motion.div
            key={index}
            animate={{
              scale: activeTestimony === index ? 1.2 : 1,
              opacity: activeTestimony === index ? 1 : 0.65,
            }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveTestimony(index)}
          >
            <Avatar
              className={cn(
                "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer",
                activeTestimony === index
                  ? "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-fill"
                  : ""
              )}
            >
              <AvatarImage src={testimonial.avatar} />
              <AvatarFallback>{testimonial.name}</AvatarFallback>
            </Avatar>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
