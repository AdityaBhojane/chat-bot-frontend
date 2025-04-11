import { Button, Card, Input, Spacer } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../../apis/signin";



export default function SignIn() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState('')
  const [data, setData] = useState({
    email:"",
    password:""
  });

  
  const handleSignIn = async ()=>{
    try {
      if(data.email == '' || data.password == ""){
        setIsError("all fields are required");
        return;
      };
      const response = await signInUser(data.email, data.password);
      if(response?.token){
        localStorage.setItem('token',response.token)
        localStorage.setItem('userId',response.userId)
        navigate('/home')
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
          <p className="text-xl">Sign In</p>
        </Card>
        <div className="my-2">
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            type="email"
            className="my-2"
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
            className="my-2"
            value={data.password}
            onChange={(e)=>setData({...data,password:e.target.value})}
            onFocus={()=> setIsError('')}
          />
          <Spacer y={1.5} />
          {isError && <p className="text-red-600">{isError}</p>}
          <Button onClick={handleSignIn} shadow color="primary" auto className="my-2 w-full">
            Sign In
          </Button>
          <p className="text-center mt-3">Dont have an have an account <span onClick={()=>navigate("/signup")} className="text-blue-500 cursor-pointer">sign up?</span></p>

        </div>
      </div>
    </div>
  );
}