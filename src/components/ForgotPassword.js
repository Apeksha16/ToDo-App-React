import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { callApi } from "../utils/api";

const ForgotPassword = ()=>{

const [email, setEmail]= useState("");
const [password, setPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const navigate = useNavigate();
const [error, setError]=useState("");
  // const [loading, setLoading] = useState(false);

const checkValidations = async () => {
  if (!email.endsWith("@email.com")) {
    setError("Enter a valid Gmail address.");
  } else if (password.length < 4) {
    setError("Password must be at least 4 characters.");
  } else if (password !== newPassword) {
    setError("Password doesn't match.");
  } else {
    setError("");

    const result = await callApi(
      "https://todoapp-f6d7.onrender.com/api/auth/forgot-password",
      { email, password }
    );

    if (result.status && result.data.status) {
      alert("Password reset successful! Please login again.");
      navigate("/");
    } else {
      setError(result.data?.message || "Something went wrong, try again.");
    }
  }
};



    return(
 <div className="bg-amber-50 flex flex-col gap-8 rounded-xl p-14 items-center">
      <h1 className="text-orange-950 text-2xl font-semibold">Taskflow </h1>
      <p>Your personal productivity companion</p>
      <input className="w-xs h-14 p-4 focus:border-orange-400 border-2 border-solid rounded-md" type="text" placeholder="Email Address" value={email}
      onChange={(e)=>{ setEmail(e.target.value);}}
      />
       <input
        className="w-xs h-14 p-4 focus:border-orange-400 border-2 border-solid rounded-md"
        type="password"
        placeholder="Enter New Password" value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }}
      />
       <input
        className="w-xs h-14 p-4 focus:border-orange-400 border-2 border-solid rounded-md"
        type="password"
        placeholder="Re-Enter New Password" value={newPassword} onChange={(e)=>{
          setNewPassword(e.target.value);
        }}
      />
            {error && <p className="text-red-500">{error}</p>}
                  {/* {loading && <p className="text-blue-500">Resetting password...</p>} */}


           <button className="w-xs h-14 rounded-3xl text-white bg-orange-950 hover:bg-orange-800 cursor-pointer"
      onClick={checkValidations}
      >
        Reset Password
      </button>
        <p className="text-orange-950">
        <Link to="/"> Back to Sign In</Link>
      </p>
      </div>
    );
};

export default ForgotPassword;