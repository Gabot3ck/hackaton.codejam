import { Navigate, Route, Routes } from "react-router-dom"
import { AuthHomePage } from "../pages/AuthHomePage"


export const AuthRoutes = () => {

  return (
    <Routes>
      <Route path="login" element={ <AuthHomePage /> } />
      <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
