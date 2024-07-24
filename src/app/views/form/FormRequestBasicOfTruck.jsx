import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { Welcome } from "../../components/welcome/Welcome";
import { SelectFormCheck } from "../../components/form";



export const FormRequestBasicOfTruck = ( { formData, handleChange } ) => {

  const navigate = useNavigate();


  const { area } = formData;

  const [ disabledButton, setDisabledButton ] = useState(true);
  const [ next, setNext ] = useState(false);

  const handleButtonNext = () => {
    ( area ) ?
    setDisabledButton(false) :
    setDisabledButton(true)
  }

  const handleClick = () => {
    setNext(true);
  }


  useEffect( () => {
    handleButtonNext()
  }, [area])


  useEffect( () => {
    next && navigate('/documentacion');
  }, [next])


  return (<>
    <main className="py-5 min-h-screen flex flex-column justify-center gap-8 bg-light-500" >

      <div 
        className="w-full md:w-3/4 max-w-[430px] mx-auto 
        flex px-4 flex-col justify-start  items-center gap-8" 
      >

        <Welcome />

        <SelectFormCheck 
          name='area'
          value={ area }
          onChange={ handleChange }
          errorMessage='Seleccione un área de trabajo'
        />

        <button
          className={ `mt-5  w-[90%] md:w-full  h-[40px]
          text-sm sm:text-base  font-medium
          rounded-full
          ${ disabledButton ? 'bg-primary-300 text-dark-500'  : 'bg-primary-500 text-light-500 hover:bg-primary-600 ' }
          transition-colors duration-300 ease-out` }
          onClick={ handleClick }
          disabled={ disabledButton }
        >
          SIGUIENTE 
        </button>

      </div>
    </main>
  </>
  )
}
