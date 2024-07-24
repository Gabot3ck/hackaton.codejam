import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";


import 'sweetalert2/dist/sweetalert2.css';

import { NavBar } from "../components/navbar/NavBar";
import { 
  
  FormAreaOficina
  } from "../views/form";
import { numericFormat, textFormat } from "../../helpers";
import { startLogout } from "../../store/auth";



const data = {

}


export const AppRoutes = () => {

  const [ formCheck, setFormCheck ] = useState(data);
  const [lastActivity, setLastActivity] = useState(Date.now());


  const dispatch = useDispatch();

  const handleChangeInputText = (e) => {
    const { name, value } = e.target;

    setFormCheck( {...formCheck, [name]: value } )
  }


  const validateHandleNumeric = (e) => {
    const {name, value} = e.target;
    const formatValue = numericFormat(value);

    setFormCheck( {...formCheck, [name]: formatValue } )
  }



  //Logout if there is no movement for 5 minutes
  useEffect(() => {
    const inactivityTimeout = 5 * 60 * 1000;

    const handleActivity = () => {
      setLastActivity(Date.now());
    };

    const handleInactivity = () => {
      const currentTime = Date.now();

      (currentTime - lastActivity > inactivityTimeout) && dispatch( startLogout() );
    };

    //Mouse movement event
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('touchstart', handleActivity);

    //Check inactivity every second
    const intervalId = setInterval(handleInactivity, 1000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      clearInterval(intervalId);
    };
  }, [lastActivity]);


  return (<>
    <NavBar />
    <Routes>
      <Route path='/' element={ 
        <FormAreaOficina 
          formData={ formCheck }
          handleChange={ handleChangeInputText }
          handleNumeric={ validateHandleNumeric }
        /> }
      />

      <Route 
        path="/*" 
        element={ <Navigate to="/" /> } 
      />
    </Routes>
  </>
    
  )
}
