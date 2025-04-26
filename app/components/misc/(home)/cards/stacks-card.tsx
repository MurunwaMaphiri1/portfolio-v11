import {
    ReactLogo,
    NextLogo,
    HtmlLogo,
    CSSLogo,
    TailwindLogo,
    JavascriptLogo,
    CsharpLogo,
    PostgreSQLLogo,
    MongoDBLogo,
    NodeJSLogo,
    TypescriptLogo,
    ExpressLogo,
    GitLogo,
    NpmLogo,
    PostmanLogo,
    Csharp2Logo,
  } from "@/app/components/icons";
  import { cn } from "@/app/lib/utils"
  import type React from "react";
  
  type MarqueeProps = {
    children: React.ReactNode;
    direction?: "left" | "up";
    pauseOnHover?: boolean;
    reverse?: boolean;
    fade?: boolean;
    className?: string;
  };
  
  const range = (start: number, end: number): number[] =>
    Array.from({ length: end - start }, (_, k) => k + start);
  
  const Marquee = (props: MarqueeProps) => {
    const {
      children,
      direction = "left",
      pauseOnHover = false,
      reverse = false,
      fade = false,
      className,
    } = props;
  
    const ifToRightOrToBottom = (direction: string) => {
      if (direction === "left") {
        return "to right";
      } else {
        return "to bottom";
      }
    };
  
    return (
      <div
        className={cn(
          "group flex gap-4 overflow-hidden",
          direction === "left" ? "flex-row" : "flex-col",
          className,
        )}
        data-testid="marquee"
        style={{
          maskImage: fade
            ? `linear-gradient(${
                ifToRightOrToBottom(direction)
              }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
            : undefined,
          WebkitMaskImage: fade
            ? `linear-gradient(${
                ifToRightOrToBottom(direction)
              }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
            : undefined,
        }}
      >
        {range(0, 2).map((i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around gap-4 [--gap:1rem]",
              direction === "left"
                ? reverse
                  ? "animate-marquee-left-reverse flex-row"
                  : "animate-marquee-left flex-row"
                : reverse
                  ? "animate-marquee-up-reverse flex-col"
                  : "animate-marquee-up flex-col",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
            )}
            data-testid={`marquee-child-${i + 1}`}
          >
            {children}
          </div>
        ))}
      </div>
    );
  };
  
  export const StacksCard = () => {
    return (
      <div className="p-1 flex h-36 flex-col gap-2 overflow-hidden rounded-xl mt-4">
        {/* <p className="text-sm font-mono flex justify-center  text-zinc-600 dark:text-zinc-488">
          fun things
        </p> */}
        <Marquee className="" fade pauseOnHover>
            <ReactLogo width="48" height="48"/>
            <NextLogo width="48" height="48"/>
            <HtmlLogo width="48" height="48"/>
            <CSSLogo width="48" height="48"/>
            <TailwindLogo width="48" height="48"/>
            <JavascriptLogo width="48" height="48"/>
            <ReactLogo width="48" height="48"/>
            <NextLogo width="48" height="48"/>
            <HtmlLogo width="48" height="48"/>
            <CSSLogo width="48" height="48"/>
            <TailwindLogo width="48" height="48"/>
            <JavascriptLogo width="48" height="48"/>
        </Marquee>
        <Marquee className="mt-2" reverse fade pauseOnHover>
            <CsharpLogo width="48" height="48"/>
            <PostgreSQLLogo width="48" height="48"/>
            <MongoDBLogo width="48" height="48"/>
            <NodeJSLogo width="48" height="48"/>
            <TypescriptLogo width="48" height="48"/>
            <ExpressLogo width="48" height="48"/>
            <GitLogo width="48" height="48"/>
            <NpmLogo width="48" height="48"/>
            <PostmanLogo width="48" height="48"/>
            <Csharp2Logo width="48" height="48"/>
            <CsharpLogo width="48" height="48"/>
            <PostgreSQLLogo width="48" height="48"/>
            <MongoDBLogo width="48" height="48"/>
            <NodeJSLogo width="48" height="48"/>
            <TypescriptLogo width="48" height="48"/>
            <ExpressLogo width="48" height="48"/>
            <GitLogo width="48" height="48"/>
            <NpmLogo width="48" height="48"/>
            <PostmanLogo width="48" height="48"/>
            <Csharp2Logo width="48" height="48"/>
        </Marquee>
      </div>
    );
  };
  