

export const HeaderFormChecklist = ( { icon, title }) => {


  return (
    <div className="w-full flex justify-center items-center">
      { icon }
      <p className="text-center text-lg font-semibold my-2 ms-2" > { title } </p>
    </div>
  )
}
