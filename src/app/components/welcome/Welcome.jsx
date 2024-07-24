import { useSelector } from "react-redux";


export const Welcome = () => {

  const { name } = useSelector( state => state.auth );

  return (
    <div className="flex flex-col justify-center items-center mb-8 mt-5" >
      <p className="text-3xl font-medium" >¡Bienvenido!</p>
      <p className="text-3xl font-medium" >{ name }</p>
    </div>
  )
}
