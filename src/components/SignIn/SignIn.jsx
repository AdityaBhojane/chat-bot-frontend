import { Button, Card, Input, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";



export default function SignIn() {
  const navigate = useNavigate()
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
          />
          <Spacer y={1.5} />
          <Button shadow color="primary" auto className="my-2 w-full">
            Sign Up
          </Button>
          <p className="text-center mt-3">Dont have an have an account <span onClick={()=>navigate("/signup")} className="text-blue-500 cursor-pointer">sign up?</span></p>

        </div>
      </div>
    </div>
  );
}