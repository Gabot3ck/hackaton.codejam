export const CheckingAuth = () => {


  return (
    <div className=" p-1 mx-auto min-h-screen
                    flex flex-col justify-center items-center    
                    bg-dark-500" 
    >
      <div className="w-12 h-12
                      border-t-2 border-b-2 border-primary-500 rounded-full
                      animate-spin"
      >
      </div>
        <span className="mt-3 text-primary-500 animate-pulse" >
          Cargando
        </span>
    </div>
  )
}