import Link from "next/link";

const LinkedInButton = () => {
    return (
    <Link href="https://www.linkedin.com/in/sara-dahlstr%C3%B6m-b786152a0/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      className="text-gray-300 hover:text-black"
    >
      <g>
        <path
        fill="currentColor"
        stroke="currentColor"
        d="M10.188 25V10.984h-4.36V25h4.36zM7.983 9.11c1.407 0 2.532-1.172 2.532-2.579 0-1.36-1.125-2.484-2.532-2.484A2.5 2.5 0 005.5 6.53c0 1.407 1.125 2.578 2.484 2.578zM26.454 25h.046v-7.688c0-3.75-.844-6.656-5.25-6.656-2.11 0-3.516 1.172-4.125 2.25h-.047v-1.922h-4.172V25h4.36v-6.938c0-1.828.328-3.562 2.578-3.562s2.297 2.063 2.297 3.703V25h4.312z"
        ></path>
      </g>
    </svg>
    </Link>
  );
}

export default LinkedInButton;