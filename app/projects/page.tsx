"use client";

import React from 'react';
import ProjectCard from '@/app/components/layouts/ProjectCard'; 


type ProjectItem = {
  id: number;
  name: string;
  timeline: string;
  description: string;
  githublink: string;
  livedemo: string;
  techstack: string[];
  image: string;
}


const projectItems: ProjectItem[] = [
  {
    id: 1,
    name: "Crazy 8s (Card Game)",
    timeline: "Oct 2025 - Nov 2025",
    description: "Crazy 8s is a card game where players take turns matching cards by number or suit. The game features interactive animations, hand management and a responsive UI built with NextJS and TypeScript. Framer Motion is used for smooth card transitions and Zustand manages state.",
    githublink: "https://github.com/MurunwaMaphiri1/crazy-8s-game",
    livedemo: "https://crazy-8s-game.vercel.app/",
    techstack: [
      "NextJS",
      "TypeScript",
      "Framer Motion",
      "Zustand"
    ],
    image: "/images/project-videos/Crazy8s.png",
  },
  {
    id: 2,
    name: "GraceNotes (Bible Study Application)",
    timeline: "Oct 2025",
    description: "A personal blog for deep Bible studies. The content is managed via MDX files and dynamically rendered by a fast, server-side-rendered frontend built with NextJS and TypeScript.",
    githublink: "https://github.com/MurunwaMaphiri1/bible-study-project-v2",
    livedemo: "https://bible-study-project-v2.vercel.app/",
    techstack: [
      "NextJS",
      "TypeScript",
      "MDX",
    ],
    image: "/images/project-videos/GraceNotes.png",
  },
  {
    id: 3,
    name: "MagicBox Theatres",
    timeline: "Feb 2025 - Mar 2025",
    description: "The Movie Reservation System is a .NET Core Web API that allows users to browse movies, select showtimes and book reservations securely. The API is designed with JWT authentication, Entity Framework Core and PostgreSQL for data storage. Also includes email functionality to confirm reservation.",
    githublink: "https://github.com/MurunwaMaphiri1/movie-reservation-system",
    livedemo: "#",
    techstack: [
      "ReactJS",
      "C#",
      ".NET",
      "PostgreSQL"
    ],
    image: "/images/project-videos/MagicBox Theatres.png",
  },
  {
    id: 4,
    name: "E-commerce app",
    timeline: "Jan 2025 - Feb 2025",
    description: "This project is an API for an e-commerce platform that allows users to sign up, log in, add products to a shopping cart, remove products, view and search for products, and checkout with a payment gateway. The backend includes JWT authentication for secure user interaction and integrates with Stripe for handling payments.",
    githublink: "https://github.com/MurunwaMaphiri1/e-commerce-api-and-app",
    livedemo: "#",
    techstack: [
      "ReactJS",
      "JavaScript",
      "MongoDB",
      "NodeJS"
    ],
    image: "/images/project-videos/e-commerce app.png",
  },
  {
    id: 5,
    name: "YumeAnime(夢アニメ)",
    timeline: "Dec 2024 - Jan 2025",
    description: "Integrated Jikan API to display seasonal, upcoming and top anime.",
    githublink: "https://github.com/MurunwaMaphiri1/Anime-watchlist-app",
    livedemo: "https://yumeanime.vercel.app/",
    techstack: [
      "ReactJS",
      "JavaScript"
    ],
    image: "/images/project-videos/YumeAnime.png",
  }
];

export default function Projects() {
  return (
        <div className="flex flex-col gap-20 py-10 max-w-3xl mx-auto">
                    <div className=''>
                <h1 className='font-bold text-xl'>
                    Projects
                </h1>
                <p className='mt-2 text-[#707070]'>
                    stuff i&apos;ve worked on in my spare time
                </p>
        </div>
      {projectItems.map((project, index) => (
        <ProjectCard
          key={project.id}
          imageSrc={project.image}
          title={project.name}
          tags={project.techstack}
          timeline={project.timeline}
          tagline={project.description}
          delay={index * 0.2}
          sourceCodeHref={project.githublink}
          liveDemoHref={project.livedemo}
        />
      ))}
    </div>
  );
}