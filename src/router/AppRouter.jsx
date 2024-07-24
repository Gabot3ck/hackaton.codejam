import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../ui/components";
import { AuthRoutes } from "../auth/routes";
import { AppRoutes } from "../app/routes/AppRoutes";



export const AppRouter = () => {

  const status = useCheckAuth();

  if( status === 'checking'  ) return <CheckingAuth /> 


  return (
    <Routes>
      {
        (status === 'authenticated')
        ? <Route path='/*' element={ <AppRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      <Route path='/*' element={ <Navigate to='/auth/login' />  } />
    </Routes>
  )
}
