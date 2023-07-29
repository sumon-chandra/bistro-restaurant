import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import bg from "../assets/others/pattern.png";
import loginImg from "../assets/others/register.png";
import { AuthContext } from "./../context-provider/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createNewUser, signInWithGoogle, userInfo } = useContext(AuthContext);

  // !! Handle Sign in
  const handleRegister = (data) => {
    setError("");
    const email = data.email;
    const password = data.password;
    createNewUser(email, password)
      .then(() => {
        userInfo(data.name).then(() => {
          const user = { name: data.name, email: email };
          fetch("https://bistro-boss.vercel.app/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then(() => {
              navigate("/");
            });
        });
      })
      .catch((err) => setError(err.message));
  };

  // !!! Handle google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        const user = { name: loggedUser.displayName, email: loggedUser.email };
        fetch("https://bistro-boss.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(() => {
            navigate("/");
          });
      })
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Register - Bistro Boss Restaurant</title>
      </Helmet>
      <section
        style={{ backgroundImage: `url("${bg}")` }}
        className=" lg:pt-32 pt-24 pb-32"
      >
        <div className="lg:w-1200 mx-auto px-4 lg:px-0 border rounded-xl shadow-2xl">
          <div className="lg:flex flex-row-reverse justify-evenly items-center gap-14">
            <img
              src={loginImg}
              alt=""
              className="w-1/2 hidden lg:block bg-transparent"
            />
            <div class="divider divider-horizontal lg:my-8"></div>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="card-body font-inter"
            >
              <div className="text-center">
                <h4 className="text-3xl font-black text-primaryColor">
                  Register
                </h4>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-sm">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name"
                  className="input text-sm"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-sm">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className="input text-sm"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold text-sm">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Enter Your Password"
                  className="input text-sm"
                />
                <span className="text-lg absolute right-4 bottom-3 cursor-pointer">
                  {showPass ? (
                    <FaEyeSlash onClick={() => setShowPass(false)} />
                  ) : (
                    <FaEye onClick={() => setShowPass(true)} />
                  )}
                </span>
                {errors.password?.type === "required" && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    This field is required.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    Password must contain at least one uppercase letter, one
                    lowercase letter, one number and one special character.
                  </span>
                )}
              </div>
              {error && (
                <span className="text-xs text-red-500 font-bold">{error}</span>
              )}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-sm lg:w-1/2 mx-auto hover:bg-secondaryColor bg-primaryColor normal-case border-0 text-white shadow"
                />
              </div>
              <div className="text-center text-primaryColor">
                <p className="text-xs font-semibold">
                  Already registered?{" "}
                  <Link to="/login" className="font-black underline">
                    Go to Login
                  </Link>
                </p>
                <div
                  onClick={handleGoogleSignIn}
                  className="text-lg shadow flex justify-center items-center gap-3 mt-3 bg-white py-3 rounded-3xl cursor-pointer"
                >
                  <span className="text-sm font-bold">
                    Continue with Google
                  </span>
                  <FaGoogle />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
