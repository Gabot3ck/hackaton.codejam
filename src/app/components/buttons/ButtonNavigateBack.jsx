import { Link } from "react-router-dom";
import { AiFillCaretLeft } from "react-icons/ai";


export const ButtonNavigateBack = ( {  route } ) => {


  return (
    <Link
      to={ route }
      className={`w-[40%] min-w[110px] h-[40px]
                flex justify-center gap-1 items-center
                text-sm sm:text-base text-light-500 font-semibold text-center
                bg-primary-500  rounded-lg
                hover:bg-primary-600 
                transition-colors duration-300 ease-out`}
    >
      <AiFillCaretLeft /> 
      <span> REGRESAR </span>
    </Link>
  )
}
