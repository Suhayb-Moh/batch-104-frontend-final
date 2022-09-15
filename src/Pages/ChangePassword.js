import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Login() {
  const [passwordInputs, setPasswordInputs] = useState([]);
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "http://localhost:8000/users/changePassword",
        passwordInputs,
        {
          headers: { authentication: token },
        }
      );
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Change Your Password
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={submitHandler}
            >
              <div>
                <label
                  htmlFor="old"
                  className="block text-sm font-medium text-gray-700"
                >
                  Old Password
                </label>
                <div className="mt-1">
                  <input
                    id="old"
                    name="old"
                    type="password"
                    autoComplete="old"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) =>
                      setPasswordInputs({
                        ...passwordInputs,
                        oldPassword: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) =>
                      setPasswordInputs({
                        ...passwordInputs,
                        newPassword: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirm"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirm"
                    name="confirm"
                    type="password"
                    autoComplete="confirm"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) =>
                      setPasswordInputs({
                        ...passwordInputs,
                        confirmNewPassword: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => submitHandler}
                >
                  Change Password
                </button>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
