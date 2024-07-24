import { HamburguerMenu } from "../buttons";
import Logo from '../../../assets/images/logo.equifax.jpg';


export const NavBar = () => {



  return (
    <div className="w-full bg-light-500 flex flex-column" >
      <div className="w-full md:w-3/4 max-w-[430px] h-[70px] py-1 px-2 mx-auto
      border-b border-primary-500 bg-gray-100 
      flex justify-between items-center" >
        <img  className='h-full mr-3' src={ Logo } alt="Logotipo Money App" />
        <p className="font-medium text-lg mr-auto text-dark-400" >Reserva tu espacio</p>
        <HamburguerMenu />
      </div>
    </div>
  )
}
