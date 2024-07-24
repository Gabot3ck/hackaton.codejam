import { useState } from "react";
import { validateInput } from "../../../helpers";


export const InputFormCheck = ( 
  { value, 
    name, 
    onChange, 
    placeholder, 
    icon,
    maxLength,
    errorMessage } ) => {

  const [error, setError] = useState('');


  return (
    <div className="w-[90%] md:w-full flex flex-col gap-1">
      <div className={`w-full h-10 rounded-t py-2 pe-3 
      border-b  border-t border-r border-l border-slate-300 
      flex justify-between items-center text-sm
      bg-primary-300
      ${ error !== "" ? 'border-b-alert-500 border-b-2' : "border-b-primary-500" }`}
      >
        <input
          className={`w-full h-10 rounded py-2 ps-3 
          focus:border-primary-500 focus:ring-primary-500 focus:outline-none
          font-medium text-sm bg-transparent placeholder-gray-500`}
          type="text" 
          placeholder={ placeholder }
          name={ name }
          value={ value }
          onChange={ onChange }
          onBlur={ (e) => validateInput(e, setError, errorMessage) }
          maxLength={ maxLength }
        />
        { icon }
      </div>
      <span className="text-xs text-alert-500" >
        { error !== "" ? error : "" }
      </span>
    </div>)
}
