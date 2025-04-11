import { Route, Routes } from "react-router-dom"
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"
import ChatPage from "./pages/ChatPage"


export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<ChatPage/>}/>
    </Routes>
  )
}

