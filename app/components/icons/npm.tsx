import type React from "react";

export default function NpmLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
        <svg viewBox="0 0 256 256" { ...props }>
          <rect width="256" height="256" fill="#242938" rx="60" />
        <path transform="translate(64, 64)" fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
        </svg> 
  );
}
