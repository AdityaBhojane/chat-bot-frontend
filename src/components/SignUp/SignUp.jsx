import { Button, Card, Input, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../../apis/signup";
import { useState } from "react";



export default function SignUp() {
  const navigate = useNavigate()
  const [isError, setIsError] = useState('')
    const [data, setData] = useState({
      username:"",
      email:"",
      password:""
    });
  
    
    const handleSignUp = async ()=>{
      try {
        if(data.email == '' || data.password == ""){
          setIsError("all fields are required");
          return;
        };
        const response = await signUpUser(data.username,data.email, data.password);
        if(response?.token){
          localStorage.setItem('user',response.token)
        }
      } catch (error) {
        console.log(error)
        if(error?.response?.data?.message){
          setIsError(error.response.data.message)
        }else{
          isError("internal server error")
        }
      }
    }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[400px]">
        <Card className="text-center my-4 py-2">
          <p className="text-xl">Sign Up</p>
        </Card>
        <div className="my-2">
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            type="username"
            className="mb-4"
            value={data.username}
            onChange={(e)=>setData({...data,username:e.target.value})}
            onFocus={()=> setIsError('')}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            type="email"
            className="mb-4"
            value={data.email}
            onChange={(e)=>setData({...data,email:e.target.value})}
            onFocus={()=> setIsError('')}
          />
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            type="password"
            className="mb-4"
            value={data.password}
            onChange={(e)=>setData({...data,password:e.target.value})}
            onFocus={()=> setIsError('')}
          />
          <Spacer y={1.5} />
          {isError && <p className="text-red-600">{isError}</p>}
          <Button onClick={handleSignUp} shadow color="primary" auto className="my-2 w-full">
            Sign Up
          </Button>
          <p className="text-center mt-3">already have an account <span onClick={()=>navigate("/signin")} className="text-blue-500 cursor-pointer">sign in?</span></p>
        </div>
      </div>
    </div>
  );
}