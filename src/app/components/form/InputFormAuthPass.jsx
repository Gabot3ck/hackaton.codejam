

export const InputFormAuthPass = (
  { value, 
    name, 
    onChange, 
    placeholder, 
    icon,
    maxLength,
    type,
    showPass}
) => {


  return (
    <div className="w-full flex flex-column">
      <div className={`w-full h-10 rounded-t py-2 pe-3 
      border-b  border-t border-r border-l border-slate-300 
      flex justify-between items-center text-sm
      bg-primary-300 border-b-primary-500`}
      >
        <input
          className={`w-full h-10 rounded py-2 ps-3 
          focus:border-primary-500 focus:ring-primary-500 focus:outline-none
          font-medium text-sm bg-transparent placeholder-gray-500`}
          type={ type }
          placeholder={ placeholder }
          name={ name }
          value={ value }
          onChange={ onChange }
          maxLength={ maxLength }
          autoComplete="off"
        />
        <button
          onClick={ showPass }
          type="button"
        >
          { icon }
        </button>
      </div>
    </div>
  )
}
