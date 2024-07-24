

export const ItemMenu = ( { icon, text, onClick } ) => {

  return (
    <button 
      className="w-full flex justify-start items-center" 
      onClick={ onClick }
    >
      <span className=" mr-3 my-4 text-primary-500" >
        { icon }
      </span> 
      <p className="text-sm text-light-600" > { text } </p>
    </button>
  )
}
