import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

import { login, logout } from "../store/auth";
import { getUserData } from "../helpers";
import { getRecordsList, getAreasNames } from "../store/app";



export const useCheckAuth = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
      
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if ( !user ) return dispatch( logout() );

      const { uid, email } = user;
      const name = await getUserData( uid, 'nombre' );
      const lastName = await getUserData( uid, 'apellido' );

      dispatch( login( { uid, email, name, lastName } ) );
      dispatch( getAreasNames() );
      dispatch( getRecordsList() );
    })
  }, []);

  return status ;
}