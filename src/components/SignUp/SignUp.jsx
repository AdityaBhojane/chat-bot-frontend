import { Button, Card, Input, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";



export default function SignUp() {
  const navigate = useNavigate()


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
          />
          <Spacer y={1.5} />
          <Button shadow color="primary" auto className="my-2 w-full">
            Sign Up
          </Button>
          <p className="text-center mt-3">already have an account <span onClick={()=>navigate("/signin")} className="text-blue-500 cursor-pointer">sign in?</span></p>
        </div>
      </div>
    </div>
  );
}