import AddCategorySection from "../../Components/AddCategorySection";
import Dashboard from "../../Components/Dashboard";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
  const [inputs, setInputs] = useState([]);

  const navigate = useNavigate();

  async function onSubmitHandler(e) {
    if (inputs.plateNumber == null) {
      toast.error("Please fill out all fields");
    }
    try {
      const formData = new FormData();
      formData.append("categoryName", inputs.categoryName);
      formData.append("numOfPeople", inputs.numOfPeople);
      formData.append("costPerDay", inputs.costPerDay);
      formData.append("lateFeePerHour", inputs.lateFeePerHour);
      formData.append("image", inputs.image);

      const res = await axios.post(
        "http://localhost:8000/categories",
        formData
      );
      toast.success(res.data.message);
      navigate("/admin/categories");
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <div>
      <Dashboard />
      <AddCategorySection />
      <div className="min-h-screen w-6/12 mx-auto">
        <div className="space-y-8 divide-y divide-gray-200">
          <div encType="multipart/form-data">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Enter Category Details
                  </h3>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="plate-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="plate-number"
                        id="plate-number"
                        autoComplete="plate-number"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setInputs({ ...inputs, categoryName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Number of Seats
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setInputs({ ...inputs, numOfPeople: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cost / Day
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setInputs({ ...inputs, costPerDay: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Late Fee / Hour
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setInputs({
                            ...inputs,
                            lateFeePerHour: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              multiple
                              onChange={(e) => {
                                setInputs({
                                  ...inputs,
                                  image: e.target.files[0],
                                });
                              }}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={onSubmitHandler}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
