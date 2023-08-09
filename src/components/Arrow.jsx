
//import { Link as Ancor} from "react-router-dom";
export default function Arrow({ direction, onClick }) {

    return (
     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="text-black w-[20px] h-[20px] cursor-pointer"
        onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
      </svg>
    );
  }
