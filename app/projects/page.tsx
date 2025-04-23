"use client";

type ProjectItem = {
    name: string;
    description: string;
    githublink: string;
    livedemo: string;
    techstack: string[];
    video: string;
}

const projectItems: ProjectItem[] = [
    {
        name: "MagicBox Theatres",
        description: "The Movie Reservation System is a .NET Core Web API that allows users to browse movies, select showtimes and book reservations securely. The API is designed with JWT authentication, Entity Framework Core and PostgreSQL for data storage. Also includes email functionality to confirm reservation.",
        githublink: "https://github.com/MurunwaMaphiri1/movie-reservation-system",
        livedemo: "#",
        techstack: [
            "ReactJS",
            "C#",
            ".NET",
            "PostgreSQL"
        ],
        video: "#",
    },
    {
        name: "E-commerce app",
        description: "This project is an API for an e-commerce platform that allows users to sign up, log in, add products to a shopping cart, remove products, view and search for products, and checkout with a payment gateway. The backend includes JWT authentication for secure user interaction and integrates with Stripe for handling payments.",
        githublink: "https://github.com/MurunwaMaphiri1/e-commerce-api-and-app",
        livedemo: "#",
        techstack: [
            "ReactJS",
            "JavaScript",
            "MongoDB",
            "NodeJS"
        ],
        video: "#",
    },
    {
        name: "YumeAnime(夢アニメ)",
        description: "Integrated Jikan API to display seasonal, upcoming and top anime.",
        githublink: "https://github.com/MurunwaMaphiri1/Anime-watchlist-app",
        livedemo: "https://yumeanime.vercel.app/",
        techstack: [
            "ReactJS",
            "JavaScript"
        ],
        video: "#",
    }
  ];

export function Projects() {

    return (
        <>
            <div className="flex flex-col max-w-2xl mx-auto">
                
            </div>
        </>
    )
}