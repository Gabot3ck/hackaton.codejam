import { BiSearchAlt } from 'react-icons/bi';

import { searchFormat } from "../../../helpers";


export const Search = ( { doc, setDoc, texto = "Buscar fecha de registro..." } ) => {

  const handleDoc = (e) => {
    const { value } = e.target;
    const formatValue = searchFormat(value);
    setDoc(formatValue);
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
    }
  }

  return (
    <div className="mx-auto mb-8 mt-4  w-[60%] rounded flex items-center justify-between gap-3  
      border-slate-400  border"
    >
      <span className='w-[15%] border-r  border-slate-400 py-1 flex items-center justify-center 
      bg-slate-300'>
        <BiSearchAlt size={ 20 } />
      </span>
      <input
        onChange={ handleDoc }
        onKeyDown={ handleKeyDown }
        value= { doc }
        type="text" 
        className={ `rounded pe-5 py-1
          focus:border-primary-500 focus:ring-primary-500 focus:outline-none
          font-medium text-base bg-transparent placeholder-gray-500 ` } 
        placeholder={ texto }
        autoComplete="off"
        id='inputSearch'
        name='inputSearch'
      />
    </div>
  )
}
