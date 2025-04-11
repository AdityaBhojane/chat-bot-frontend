import { Route, Routes } from "react-router-dom"
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"
import ChatPage from "./pages/ChatPage"
import Home from "./pages/Home"
import ProtectedRoute from "./components/ProtechtedRoute/ProtectedRoute"


export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>     
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/:chatId/dashboard" element={<ProtectedRoute><ChatPage/></ProtectedRoute>}/>
    </Routes>
  )
}

