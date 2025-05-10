import books from "@/public/images/Futaba-Sakura.jpg";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BooksCard = () => {
  return (
    <Link href="#">
      {" "}
      <div className=" w-full h-[9rem] rounded-lg   overflow-hidden relative hover:scale-95 duration-500 transform-gpu">
        {/* <p className=" ml-3 py-1 font-semibold text-xl">Books</p> */}
        <Image
          src={books}
          alt=""
          className="absolute object-cover bottom-0 left-0 right-0 top-0 -z-30  brightness-90 dark:brightness-75"
        />
        <div className="px-4 py-2 text-white text-md font-[500]">
          <Quote className="rotate-180" />
          <p className="text-sm ">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
          <span className="text-white/85 flex justify-end text-sm">― Patrick McKenzie</span>
        </div>
      </div>
    </Link>
  );
};
