

export const ButtonPrimary = ( { title = 'Registrar', isChecking } ) => {


  return (
    
    <button
      disabled= { isChecking }
      className={ `w-full  h-[40px]
                text-sm sm:text-base text-light-500 font-medium
                bg-primary-500  rounded-full 
                hover:bg-primary-600 
                transition-colors duration-300 ease-out` }
    >
      { title }
    </button>
  )
}
