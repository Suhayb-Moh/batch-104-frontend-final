import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../Utils/UserContext";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";
export default function Signup() {
  const [inputs, setInputs] = useState({});
  const [image, setImages] = useState();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  async function onSubmitHandler() {
    if (inputs.username == null) {
      toast.error("please fill out required fields");
    }
    try {
      const res = await axios.post(
        "http://localhost:8000/users/signup",
        inputs
      );
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      setUser(true);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setImages(res.data.categories[1].image);
    });
  }, []);
  return (
    <>
      <Header />
      <div className="min-h-screen flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://img.freepik.com/premium-vector/car-rental-logo-template-design_316488-1614.jpg"
                alt="rent and ride"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Signup
              </h2>
            </div>

            <div className="mt-8">
              <div>
                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Create account to make booking
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) =>
                          setInputs({ ...inputs, username: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) =>
                          setInputs({ ...inputs, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) =>
                          setInputs({ ...inputs, password: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="current-confirmPassword"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) =>
                          setInputs({
                            ...inputs,
                            confirmPassword: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={onSubmitHandler}
                    >
                      Sign up
                    </button>
                  </div>
                  <div>
                    <div className="mt-6 relative">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          Already have account?{" "}
                          <Link to="/login" className="font-bold">
                            Login
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={`http://localhost:8000/${image}`}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
