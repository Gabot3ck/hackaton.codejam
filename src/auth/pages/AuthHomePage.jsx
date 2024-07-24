import { FormAuth } from "../components";
import Logo from "../../assets/images/logo.equifax.jpg";


export const AuthHomePage = () => {


  return (
    <div 
      className="w-screen mx-auto h-screen min-h-screen bg-light-500" 
    >
      <main 
        className="py-4 max-w-[430px] mx-auto h-full
        flex flex-col justify-center items-center" 
      >
        <img
          className="w-28 mb-5"
          src={ Logo } 
          alt="Logo EBG Ingeniería y Construcción" 
        />

        <FormAuth />

      </main>

    </div>
  )
}
