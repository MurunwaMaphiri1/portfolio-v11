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
    id: 2,
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
    image: "/images/project-videos/E-commerce app.png",
  },
  {
    id: 3,
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
                    stuff i've worked on in my spare time
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