import { GridCard } from "./components/misc/(home)/grid";
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col max-w-3xl">
      <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10 w-full">
        <div className="flex flex-col items-start justify-start gap-5 md:flex-row md:items-center md:justify-between">
          {' '}
          <div>
            {' '}
              <h1 className="mb-1 mt-0 text-3xl font-semibold dark:text-white">
                Murunwa Maphiri
              </h1>
              <div className="max-w-[58ch] text-zinc-600 dark:text-zinc-400">
                Full Stack Developer
              </div>
          </div>{' '}
        </div>
        <section className="mt-8 text-zinc-600 dark:text-zinc-400">
        <div className="space-y-5 text-left">
          <p>
            I'm the type of person who loves building cool things with code—whether it's a clean React UI, a solid backend with .NET or diving deep into Spring Boot and PostgreSQL. I'm constantly learning, experimenting and trying to make each project better than the last. Think of it like my own little tech journey—kind of like a training arc, minus the dramatic music (most of the time).
          </p>
          <p>
            I fell in love with tech at the age of 13 and since then I've never looked back. From installing custom roms from xda developers to hacking games using Lucky Patcher, I was obsessed with figuring out how things worked behind the screen. That curiosity turned into a passion and it's what turned me into the person I am today. It’s what drives me to keep learning every day.
          </p>
          <p>
            I'm drawn to how things work under the hood. I enjoy exploring computer networks, working with APIs and reading up on system design. When I'm not coding, you'll probably find me tweaking a project, watching anime/football or gaming.
          </p>
          <p>
            If you're into creating, breaking and fixing stuff, you're in the right place.
          </p>
        </div>
        </section>
          <GridCard/>
      </section>
    </div>
  );
};

export default Home;
