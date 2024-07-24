import { BsCloudArrowUpFill } from "react-icons/bs";


export const ButtonSubmitForm = ( {
  onSubmit,
  disabledButton
} ) => {



  return (
    <button 
      className={`w-[40%] min-w[110px] h-[40px]
                flex justify-center gap-3 items-center
                text-sm sm:text-base text-dark-500 font-semibold text-center
                rounded-lg
                ${ disabledButton ? 'bg-primary-300 text-dark-500' : 'bg-primary-500 hover:bg-primary-600 text-light-500' }
                transition-colors duration-300 ease-out`}
      onClick={ onSubmit}
      disabled={ disabledButton }
    >
      <span>ENVIAR</span>
      <BsCloudArrowUpFill size={ 20 } />
  </button>
  )
}
