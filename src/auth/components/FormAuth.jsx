import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsEyeSlash, BsEye } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import { useForm } from "../../hooks/useForm";
import { startLoginWithEmailPassword } from "../../store/auth";
import { InputFormAuth, InputFormAuthPass, MessageErrorFirebase } from "../../app/components/form";
import { ButtonPrimary } from "../../app/components/buttons";





export const FormAuth = () => {

  const [ showPass, setShowPass ] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );


  const dispatch = useDispatch();


  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] );


  const toggleShowPass = () => {
    setShowPass( !showPass );
  }


  const onSubmit = (e) => {
    e.preventDefault();

    dispatch( startLoginWithEmailPassword( { email, password } ) );
  }


  return (
    <form
      onSubmit={ onSubmit }
      className="h-[400px] w-[350px]
      flex flex-col justify-evenly"
    >
      <h1 className="text-2xl font-semibold text-center" >Reserva tu espacio</h1>

      <InputFormAuth 
        value={ email }
        name='email'
        onChange={ onInputChange }
        placeholder='Email'
        type='email'
        icon={ <AiOutlineMail size={ 18 } /> }
      />

      <InputFormAuthPass 
        value={ password }
        name='password'
        onChange={ onInputChange }
        placeholder='Contraseña'
        type={ `${ showPass ? 'text' : 'password' }` }
        icon={ showPass ? <BsEye size={ 20 } />  : <BsEyeSlash size={ 20 } />  }
        showPass={ toggleShowPass }
      />

      <MessageErrorFirebase errorMessage={ errorMessage } />

      <ButtonPrimary 
        title="INGRESAR"
        type='submit'
        isChecking={ isAuthenticating }
      />
    </form>
  )
}
