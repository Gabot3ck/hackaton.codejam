import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";
import { LuFileSearch } from "react-icons/lu";
import { BsClipboardCheck } from "react-icons/bs";
import { ItemMenu } from "./ItemMenu"
import { startLogout } from "../../../store/auth";



export const Menu = ( { show } ) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onLogout = () => {
    dispatch( startLogout() );
  }

  const onClick = ( route ) =>{
    navigate(route);
  }


  return (
    <div className={`w-[85%]  max-w-md h-full p-6
    border-r-2 border-gray-300
    flex flex-col items-start
    absolute top-0 left-0 z-30 ${ show ? 'translate-x-0' : '-translate-x-full' }
    bg-light-500 transition-transform transform duration-300 ease-in-out`}
    >
      <ul className="mt-8" >
        <ItemMenu 
          icon={ <LuFileSearch /> }
          text='Ver Registros'
          onClick={ () => onClick('/registros') }
        />

        <ItemMenu 
          icon={ <BsClipboardCheck /> }
          text='Nuevo Registro'
          onClick={ () => onClick('/') }
        />

        <ItemMenu 
          icon={ <BiLogOutCircle /> }
          text='Cerrar sesión'
          onClick={ onLogout }
        />
      </ul>
    </div>
  )
}
