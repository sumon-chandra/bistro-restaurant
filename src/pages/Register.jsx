import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import bg from "../assets/others/pattern.png";
import loginImg from "../assets/others/register.png";
import { AuthContext } from "./../context-provider/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
          fetch("http://localhost:5000/users", {
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
        fetch("http://localhost:5000/users", {
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
        <div className="lg:w-1200 mx-auto px-4 lg:px-0 min-h-screen border rounded-xl shadow-2xl">
          <div className="lg:flex flex-row-reverse justify-evenly items-center p-32">
            <img
              src={loginImg}
              alt=""
              className="w-1/2 hidden lg:block bg-transparent"
            />
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="card-body font-inter"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold">Register</h4>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name"
                  className="input"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className="input"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Enter Your Password"
                  className="input"
                />
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
                  className="btn btn-sm lg:btn-md bg-secondaryColor hover:bg-primaryColor normal-case border-0 text-white lg:text-xl shadow-lg"
                />
              </div>
              <div className="text-center text-primaryColor">
                <p className="lg:text-xl font-semibold">
                  Already registered?{" "}
                  <Link to="/login" className="font-bold">
                    Go to Login
                  </Link>
                </p>
                <p className="my-4">Or register with</p>
                <div className="text-4xl flex justify-center items-center gap-10">
                  <FaFacebook className="cursor-pointer" />
                  <FaGoogle
                    onClick={handleGoogleSignIn}
                    className="cursor-pointer"
                  />
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

export default Register;
