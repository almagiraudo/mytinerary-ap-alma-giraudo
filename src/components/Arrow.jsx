
export default function Arrow({ direction }) {
    return (
     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="text-black w-[20px] h-[20px]"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
      </svg>
    );
  }
