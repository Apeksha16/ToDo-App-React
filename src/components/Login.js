import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-amber-50 flex flex-col gap-8 rounded-xl p-14 items-center">
      <h1 className="text-orange-950 text-2xl font-semibold">Taskflow </h1>
      <p>Your personal productivity companion</p>
      <input className="w-xs h-14 p-4 focus:border-orange-400 border-2 border-solid rounded-md" type="text" placeholder="Email" />
      <input className="w-xs h-14 p-4 focus:border-orange-400 border-2 border-solid rounded-md" type="password" placeholder="Password" />

      <button className="bg-orange-950 hover:bg-orange-800 text-white cursor-pointer rounded-3xl w-xs h-14">
        <Link to="/Signup">Sign In</Link>
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
