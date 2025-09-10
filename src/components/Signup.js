import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { callApi } from "../utils/api";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const checkValidations = () => {
    if (fullName.length < 4) {
      setError("Full Name should contain atleast 4 characters.");
    } else if (!email.endsWith("@email.com")) {
      setError("Enter a valid Gmail address.");
    } else if (password.length < 4) {
      setError("Password must be at least 4 characters.");
    } else {
      setError("");
      // navigate("/");
      handleSignup();
    }
  };

const handleSignup =async()=>{
  let req = {fullName, email, password};
  try{
  const getResponseFromApi = await callApi(
  "https://todoapp-f6d7.onrender.com/api/auth/register", 
  { name: fullName, email, password }
);

    console.log(getResponseFromApi);
if(getResponseFromApi.status ===true && getResponseFromApi.data.status === true){
  navigate("/");
} else if(getResponseFromApi.status===false){
  setError("Something went wrong, Please try again!");
} else {
  setError(getResponseFromApi.data.message);
}
  } catch(err){
    setError("Error connecting to server.");
  }
};

  return (
    <div className="bg-amber-50 flex flex-col gap-8 rounded-xl p-14 items-center">
      <h1 className="text-orange-950 text-2xl font-semibold">Taskflow </h1>
      <p>Your personal productivity companion</p>
      <input
        className="w-xs h-14 p-4  border-2 border-solid rounded-md focus:border-orange-400"
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <input
        className="w-xs h-14 p-4  border-2 border-solid rounded-md focus:border-orange-400"
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="w-xs h-14 p-4  border-2 border-solid rounded-md focus:border-orange-400"
        type="password"
        placeholder="Create Password"
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
        Get Started
      </button>

      <p className="text-orange-950">
        <Link to="/"> Already have an account?</Link>
      </p>
    </div>
  );
};

export default Signup;
