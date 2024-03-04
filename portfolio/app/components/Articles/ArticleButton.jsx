{/* Importing Article icon from Tabler React */}
import { IconArticle } from "@tabler/icons-react";
{/* This import makes it possible to use the built in in Link function optimized for Next.js */}
import Link from "next/link";

const ArticleButton = ({ url }) => { 
  return (
    <Link href={url} className="text-sm px-4 w-fit text-black hover:text-white py-2 rounded-full flex items-center bg-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400">
        <IconArticle className="mr-2" />
        <span className="font-semibold">Read more</span>
    </Link>
  );
};

export default ArticleButton;
