

export const UIFormChecklist = ( { children } ) => {


  return (
    <main 
      className="mx-auto p-5 px-4 
      w-[90%] md:w-3/4 max-w-[430px] min-h-[600px] lg:min-h-[550px]
      flex flex-col justify-between shadow-xl" 
    >
      { children }
    </main>
  )
}
