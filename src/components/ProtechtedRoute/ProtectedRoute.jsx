/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
  const navigate = useNavigate()
  const user = localStorage.getItem("token");
  useEffect(()=>{
    if(!user){
      navigate("/signin")
    }
  },[navigate, user])
  return (
    <div>{children}</div>
  )
}
