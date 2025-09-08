import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
const [email, setEmail]= useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const checkValidations = () =>{
 if (!email.endsWith("@gmail.com")) {
    return false;
  }
  if(password.length<4){
    return false;
  }
  return true;
};

  return (
    <div className="bg-amber-50 flex flex-col gap-8 rounded-xl p-14 items-center">
      <h1 className="text-orange-950 text-2xl font-semibold">Taskflow </h1>
      <p>Your personal productivity companion</p>
      <input
        className="w-xs h-14 p-4 focus:border-orange-400 border-2 border-solid rounded-md"
        type="text"
        placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value);

        }}
      />
      <input
        className="w-xs h-14 p-4 focus:border-orange-400 border-2 border-solid rounded-md"
        type="password"
        placeholder="Password" value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }}
      />

    <button disabled={!checkValidations()} className={`w-xs h-14 rounded-3xl text-white ${
          checkValidations()
            ? "bg-orange-950 hover:bg-orange-800 cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
      }`}
      onClick={()=>{
        navigate("/dashboard");
      }}
      >
     Sign In
      </button>
      <p className="text-orange-950">
        <Link to="/ForgotPassword"> Forgot password?</Link>
      </p>
      <p className="text-orange-950">
        No account?{" "}
        <b className="sign-up">
          <Link to="/Signup">Sign up</Link>
        </b>
      </p>
    </div>
  );
};

export default Login;
