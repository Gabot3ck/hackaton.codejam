import { LuAlertCircle } from "react-icons/lu"


export const MessageErrorFirebase = ( { errorMessage } ) => {

  let message = '';

  switch (errorMessage) {    
    case 'Firebase: Error (auth/user-not-found).':
      message = 'El correo ingresado no  está registrado';
      break;
    
    case 'Firebase: Error (auth/wrong-password).':
      message = 'La contraseña ingresada es incorrecta';
      break;

    case 'Firebase: Error (auth/invalid-email).':
      message = 'Ingrese su email';
      break;

      case 'Firebase: Error (auth/invalid-login-credentials).':
        message = 'La contraseña ingresada es incorrecta';
        break;

    case 'Firebase: Error (auth/missing-password).':
      message = 'Ingrese su contraseña';
      break;

    case 'Firebase: Error (auth/to-many-requests).':
      message = 'Demasiados intentos fallidos, intente de nuevo en 3 min';
      break;
  }

  return (
    <div className={ `w-full h-8 rounded py-2 px-4
                      flex justify-start gap-3 items-center 
                      text-red-800 bg-red-200
                      ${ !!errorMessage ? '' : 'hidden' }` } 
    >
      <LuAlertCircle size={18} /> 
      <span className={ `font-medium text-sm text-red-800` }>
        { message }
      </span>
    </div>
  )
}