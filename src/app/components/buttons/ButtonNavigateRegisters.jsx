import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';

export const ButtonNavigateRegisters = ( { prevHandler, currentPage, nextHandler } ) => {

  return (
    <div className={`mx-auto mb-7 w-full gap-5 flex justify-evenly items-center`}>
      <button
          onClick={ prevHandler }
          className='w-[100px] py-1 text-sm rounded-md text-dark-500  border-slate-400
          flex items-center justify-evenly
          bg-slate-300 border hover:bg-slate-400 duration-300 font-medium'>
          <span><BiSolidLeftArrow /></span>
          Atrás
      </button>
      <span className='text-base text-primary-600 font-medium underline' >Página { currentPage + 1 }</span>
      <button
          onClick={ nextHandler } 
          className='w-[100px] py-1 text-sm rounded-md text-dark-500  border-slate-400
          flex items-center justify-evenly
          bg-slate-300 border hover:bg-slate-400 duration-300 font-medium'>
          Siguiente
          <span><BiSolidRightArrow /></span>
      </button>
    </div>
  )
}