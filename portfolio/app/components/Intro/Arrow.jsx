{/* Used an online converter to make this SVG to a functional JSX since this seems to be the easiest way to use it in Next js when using Tailwind */ }
const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="68"
      fill="none"
      viewBox="0 0 29 68"
    >
      <g>
        <path
          stroke="currentColor"
          className="animate-bounce text-pink-400"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="6"
          d="M24 55.5L14.5 65m0 0L5 55.5m9.5 9.5V35"
        ></path>
      </g>
    </svg>
  );
}

export default Arrow;