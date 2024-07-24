import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

import { Menu } from '../navbar/Menu';

export const HamburguerMenu = () => {

  const [ showMenu, setShowMenu ] = useState(false);

  const handleClick = () => {
    setShowMenu( !showMenu );
  }


  return (<>
    <button 
      className="text-primary-500 transition transform duration-300 ease-in-out"
      onClick={ handleClick }
    >
        { showMenu ? 
          <span className='text-primary-500' > <CgClose size={ 30 } /> </span>  : 
          <span className='text-primary-500' > <FaBars size={ 30 } /> </span>  
        }
    </button>

    {
      <Menu  show={ showMenu } />
    }
  </> )
}
