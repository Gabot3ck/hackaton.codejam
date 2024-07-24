

export const InputRadio = ( { 
  name, 
  title,
  onChange,
  check,
  value1 = 'Bueno',
  value2 = 'Malo'} ) => {


  return (
    <fieldset className='w-full' >
      <legend className="text-sm font-medium w-full mx-auto" > 
        { title } 
      </legend>

      <div className='flex gap-3' >

        <div className="form-check ">
          <input 
            className="form-check-input text-sm"
            value={ value1 } 
            checked={ check === value1 ? true : false }
            onChange={ onChange }
            type="radio" 
            name={ name }
            id={ `${ name }${ value1 }` }
          />
          <label className="form-check-label text-sm"  htmlFor={ `${ name }${ value1 }` } > { value1 } </label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input text-sm"
            value={ value2 }
            checked={ check === value2 ? true : false }
            onChange={ onChange }
            type="radio" 
            name={ name }
            id={ `${name}${ value2 }` }
          />
          <label className="form-check-label text-sm" htmlFor={ `${name}${ value2 }` } > { value2 } </label>
        </div>
      </div>
    </fieldset>
  )
}
