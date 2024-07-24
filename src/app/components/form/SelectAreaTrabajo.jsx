import { useState } from 'react'
import { validateInput } from '../../../helpers';

export const SelectAreaTrabajo = ( { onChange, name, value, errorMessage } ) => {

  const [error, setError] = useState('');


  const handleValidate = (e) => {
    validateInput(e, setError, errorMessage)
    
    if ( value === '' ) return;
  }


  return (
    <div className="w-[90%] md:w-full flex flex-col gap-1">

      <div className={ ` w-full border-b  border-t border-r border-l border-slate-300
      ${ error !== "" ? 'border-b-alert-500 border-b-2' : "border-b-primary-500" }`}>
        <select 
          className={`w-full md:w-full h-10 rounded py-2 px-4 
                    border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                    font-medium
                    bg-primary-300 placeholder-gray-500 }`}  
          onChange={  onChange }
          onBlur={ handleValidate }
          name={ name }
          value={ value }
        >
          <option value="">Seleccione un área de trabajo</option>
          <option value="area_trabajo">Puesto de trabajo</option>
          <option value="area_primera_necesidad">Sala de reuniones</option>
        </select>
      </div>

      <span className="text-xs text-alert-500" >
        { error !== "" ? error : "" }
      </span>
    </div>
  )
}
