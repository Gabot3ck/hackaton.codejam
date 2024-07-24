import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";


export const ButtonNavigateNext = ( {  route, disabledButton } ) => {

  const navigate = useNavigate();

  const [ next, setNext ] = useState(false);

  useEffect( () => {
    next && navigate(route);
  }, [next])


  return (
    
    <button
      className={`w-[40%] min-w[110px] h-[40px]
                flex justify-center gap-1 items-center
                text-sm sm:text-base text-dark-500 font-semibold text-center
                rounded-lg
                ${ disabledButton ? 'bg-primary-300 text-dark-500' : 'bg-primary-500 hover:bg-primary-600 text-light-500' }
                transition-colors duration-300 ease-out`}
      onClick={ () => setNext(true) }
      disabled={ disabledButton }
    >
      <span> SIGUIENTE </span>
      <AiFillCaretRight /> 
    </button>
  )
}