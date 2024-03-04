{/* Just like in the demoButton I'm importing the Link component from Next.js and original github Icon from Tabler Icon/React to create a button to view the code */ }
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

const CodeButton = ({ url }) => { 
  return (
    <Link href={url} className="text-sm w-fit px-4 text-black hover:text-white py-2 rounded-full flex items-center bg-gray-200 hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400">
      <IconBrandGithub className="mr-2" />
      <span className="font-semibold">View the code</span>
    </Link>
  );
};

export default CodeButton;
