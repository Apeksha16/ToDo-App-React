import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();


  const checkValidations = () => {
    if (fullName.length < 4) {
      return false;
    }
    if (!email.endsWith("@gmail.com")) {
      return false;
    }
    if (password.length < 4) {
      return false;
    }
    return true;
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

   <button disabled={!checkValidations()} className={`w-xs h-14 rounded-3xl text-white ${
          checkValidations()
            ? "bg-orange-950 hover:bg-orange-800 cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        onClick={()=>{
            navigate("/");
        }}
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
