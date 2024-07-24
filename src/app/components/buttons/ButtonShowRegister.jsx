import { useNavigate } from "react-router-dom";
import { ImFilePdf } from "react-icons/im";



export const ButtonShowRegister = ( { id } ) => {

  const navigate = useNavigate();

  const onClick = (  ) =>{
    navigate(`/registro/${ id }`);
  }



  return (
    <button
      onClick={ onClick }
      className="w-[70px] p-1 bg-primary-500 text-white font-medium 
      flex justify-center items-center rounded-md text-center gap-1
      hover:bg-primary-600 transition-colors duration-300 ease-out"
    >
      <ImFilePdf /> PDF 
    </button>
  )
}
