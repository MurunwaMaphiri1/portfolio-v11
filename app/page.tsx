import { GridCard } from "./components/misc/(home)/grid";

const Home = () => {
  return (
    <div className="flex flex-col">
      <section className="md:mt-8 lg:mt-10 pt-8 pb-16 max-w-2xl mx-auto">
          <h1 className="mt-0 mb-1 text-xl font-medium dark:text-white">
            murunwa
          </h1>
          <div className="max-w-[58ch] text-zinc-600 dark:text-zinc-400">
            fullstack developer
          </div>
          <div className="mt-5 text-zinc-600 dark:text-zinc-400">
            I'm the type of person who loves building cool things with code—whether it's a clean React UI, a solid backend with .NET or diving deep into Spring Boot and PostgreSQL. I'm constantly learning, experimenting and trying to make each project better than the last. Think of it like my own little tech journey—kind of like a training arc, minus the dramatic music (most of the time).
          </div>
          <div className="mt-5 text-zinc-600 dark:text-zinc-400">
            Beyond coding, I'm drawn to how things work under the hood. I enjoy exploring computer networks, working with APIs and reading up on system design. When I'm not coding, you'll probably find me tweaking a project, watching anime/football or gaming.
          </div>
          <div className="mt-5 text-zinc-600 dark:text-zinc-400">
            If you're into creating, breaking, fixing and understanding stuff in the world of tech, you're in the right place.
          </div>
          <GridCard/>
      </section>
    </div>
  );
};

export default Home;
