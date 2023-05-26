import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import bg from "../assets/others/pattern.png";
import loginImg from "../assets/others/register.png";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);

  // !! Verify that captcha
  const handleVerify = () => {
    if (validateCaptcha(captchaRef.current.value)) {
      setDisabled(false);
      captchaRef.current.value = "";
    } else {
      setDisabled(true);
    }
  };

  // !! Handle Sign in
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
  };

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);
  return (
    <>
      <Helmet>
        <title>Login - Bistro Boss Restaurant</title>
      </Helmet>
      <section
        style={{ backgroundImage: `url("${bg}")` }}
        className=" lg:pt-32 pt-24 pb-32"
      >
        <div className="lg:w-1200 mx-auto px-4 lg:px-0 min-h-screen bg-transparent border rounded-xl shadow-2xl">
          <div className="lg:flex justify-evenly items-center gap-x-10">
            <img
              src={loginImg}
              alt=""
              className="w-1/2 hidden lg:block bg-transparent"
            />
            <form onSubmit={handleLogin} className="card-body font-inter">
              <div className="text-center">
                <h4 className="text-3xl font-bold">Login</h4>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="name"
                  placeholder="Enter Your Email"
                  className="input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Enter Your Password"
                  className="input"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover font-semibold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <LoadCanvasTemplate />
                <input
                  ref={captchaRef}
                  type="text"
                  placeholder="Enter the captcha above"
                  className="input mt-2"
                />
                <button
                  onClick={handleVerify}
                  className="btn btn-xs bg-primaryColor hover:bg-primaryColor border-0 w-20 mt-1 normal-case"
                >
                  Verify
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  type="submit"
                  value="Sign in"
                  className="btn btn-sm lg:btn-md bg-secondaryColor hover:bg-primaryColor normal-case border-0 text-white lg:text-xl shadow-lg"
                />
              </div>
              <div className="text-center text-primaryColor">
                <p className="lg:text-xl font-semibold">
                  New here?{" "}
                  <Link to="/register" className="font-bold">
                    Create a new account
                  </Link>
                </p>
                <p className="my-4">Or sign in with</p>
                <div className="text-4xl flex justify-center items-center gap-10">
                  <FaFacebook className="cursor-pointer" />
                  <FaGoogle className="cursor-pointer" />
                  <FaGithub className="cursor-pointer" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
