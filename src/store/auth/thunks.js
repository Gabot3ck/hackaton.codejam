import { loginWithEmailPassword, logoutFirebase } from '../../firebase/providers';
import { clearLogout } from '../app';
import { checkingCredentials, login, logout } from './';



export const checkingAuthentication = () => {
  return async( dispatch ) => dispatch( checkingCredentials() );
}


export const startLoginWithEmailPassword = ( { email, password } ) => {
  return async( dispatch ) => {

    dispatch( checkingCredentials() );

    const result = await loginWithEmailPassword( { email, password } );

    if ( !result.ok ) return dispatch( logout( result ) );
    dispatch( login( result ));

  }
}


export const startLogout = () => {
  return async( dispatch ) => {

    await logoutFirebase();
    dispatch( clearLogout() );
    dispatch( logout() );
  }
}