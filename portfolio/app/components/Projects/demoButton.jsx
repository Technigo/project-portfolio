{/* Importing Link component from Next.js to create the links in the most optimized way for Next.js, and also the icons from Tabler (to be honest since I had a hard time using the SVG-file directly in the buttons and still make them hoverable at the same time which is something I will definitely look more into to understand where it went wrong)*/}
import { IconWorld } from "@tabler/icons-react";
import Link from "next/link";

const DemoButton = ({ url }) => { 
  return (
    <Link href={url} className="text-sm px-4 w-fit text-black hover:text-white py-2 rounded-full flex items-center bg-gray-200 hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400">
      <IconWorld className="mr-2" />
      <span className="font-semibold">Live Demo</span>
    </Link>
  );
};

export default DemoButton;
