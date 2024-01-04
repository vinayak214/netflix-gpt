import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eab6047a-a101-4a14-8515-c67563fa2205/US-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Login-BgImage"
        ></img>
      </div>
      <form className="absolute p-12 w-3/12 bg-black mx-auto right-0 left-0 my-40 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 rounded-sm border border-black w-full bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 rounded-sm border border-black w-full bg-gray-700"
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 border border-black w-full bg-gray-700"
        ></input>
        <button className=" bg-red-700 text-white p-4 my-6 font-bold w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={() => toggleSignInForm()} className="py-4 cursor-pointer">
          {isSignInForm
            ? " New to Netflix? Sign up now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
