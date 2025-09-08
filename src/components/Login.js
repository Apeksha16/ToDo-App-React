import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { callApi } from "../utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const checkValidations = () => {
    if (!email.endsWith("@email.com")) {
      setError("Enter a valid Email address.");
    } else if (password.length < 4) {
      setError("Password must be at least 4 characters.");
    } else {
      setError("");
      // navigate("/dashboard");
      handleLogin();
    }
  };

  const handleLogin = async () => {

    let req = { email, password };
    const getResponseFromApi = await callApi("https://todoapp-f6d7.onrender.com/api/auth/login", req);
    console.log(getResponseFromApi);
    if(getResponseFromApi.status ===true && getResponseFromApi.data.status === true){
     navigate("/dashboard");
    }
    else if(getResponseFromApi.status === false){
       setError("Something went wrong, Please try again!");
    }
    else {
      setError(getResponseFromApi.data.message);
    }

  };  



  return (
    <div className="bg-amber-50 flex flex-col gap-8 rounded-xl p-14 items-center">
      <h1 className="text-orange-950 text-2xl font-semibold">Taskflow </h1>
      <p>Your personal productivity companion</p>
      <input
        className="w-xs h-14 p-4 focus:border-orange-400 border-2 border-solid rounded-md"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="w-xs h-14 p-4 focus:border-orange-400 border-2 border-solid rounded-md"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {error && <p className="text-red-500">{error}</p>}

      <button
        className="w-xs h-14 rounded-3xl text-white bg-orange-950 hover:bg-orange-800 cursor-pointer"
        onClick={checkValidations}
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
