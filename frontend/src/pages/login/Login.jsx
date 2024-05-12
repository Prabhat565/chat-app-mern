import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-700">
        <div className="flex justify-between items-center my-3 text-center">
          {/* <img
            src="https://res.cloudinary.com/deq0hxr3t/image/upload/v1714819661/GossipGrid-ideogram9-removebg-preview_xxa1qy.png"
            alt=""
            width={100}
            height={100}
          /> */}
          <h1 className="text-4xl text-gray-300 font-semibold">Login</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline mt-4 inline-block cursor-pointer"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn btn-outline btn-block btn-md mt-6 mb-4"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
