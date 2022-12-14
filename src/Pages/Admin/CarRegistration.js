import CarRegistrationSection from "../../Components/CarRegistrationSection";
import Dashboard from "../../Components/Dashboard";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function CarRegistration() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [inputs, setInputs] = useState({
    available: true,
  });
  const [imageFiles, setImageFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:8000/car/${id}`)
      .then((res) => setInputs(res.data.result));
  }, [id]);

  async function uploadFileHandler(e) {
    setImageFiles(e.target.files);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/categories")
      .then((response) => {
        // response.data.categories.map((category) => category._id);
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function onSubmitHandler() {
    if (inputs.plateNumber == null) {
      toast.error("Please fill out all fields");
    }
    try {
      const formData = new FormData();
      formData.append("plateNumber", inputs.plateNumber);
      formData.append("modelName", inputs.modelName);
      formData.append("modelYear", inputs.modelYear);
      formData.append("carCategoryName", inputs.carCategoryName);
      formData.append("carCategoryPrice", inputs.carCategoryPrice);
      formData.append("available", inputs.available);

      for (let i = 0; i < imageFiles.length; i++) {
        console.log(imageFiles[i]);
        formData.append("image", imageFiles[i]);
      }

      const res = await axios.post("http://localhost:8000/car", formData);
      toast.success(res.data.message);
      navigate("/admin/viewcars");
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  function handleOnEdit() {
    try {
      axios.put(`http://localhost:8000/car/${id}`, inputs);
      toast.success("edited menu item");
      navigate("/admin/viewcars");
    } catch (e) {
      toast.error("Error");
    }
  }

  return (
    <div>
      <Dashboard />
      <CarRegistrationSection />
      <div className="min-h-screen w-6/12 mx-auto">
        <div className="space-y-8 divide-y divide-gray-200">
          {/* <form encType="multipart/form-data" onSubmit={handleOnEdit}> */}
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="pt-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Enter Car Information
                </h3>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="plate-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Plate Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="plate-number"
                      id="plate-number"
                      autoComplete="plate-number"
                      value={inputs.plateNumber}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) =>
                        setInputs({ ...inputs, plateNumber: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Model Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      value={inputs.modelName}
                      onChange={(e) =>
                        setInputs({ ...inputs, modelName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Model Year
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="date"
                      autoComplete="email"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) =>
                        setInputs({ ...inputs, modelYear: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Car Category
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          carCategoryName: e.target.value,
                        })
                      }
                    >
                      <option>Please Select Category</option>
                      {categories.map((category) => (
                        <option value={category._id} key={category._id}>
                          {category.categoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Notification method</legend>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <div className="flex items-center">
                        <input
                          id="available"
                          name="notification-method"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          checked={inputs.available}
                          onChange={() =>
                            setInputs({
                              ...inputs,
                              available: !inputs.available,
                            })
                          }
                        />
                        <label
                          htmlFor="available"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Available
                        </label>
                        <input
                          id="available"
                          name="notification-method"
                          type="radio"
                          checked={inputs.available === false && true}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          onChange={(e) =>
                            setInputs({
                              ...inputs,
                              available: !inputs.available,
                            })
                          }
                        />
                        <label
                          htmlFor="available"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Not Available
                        </label>
                      </div>
                    </div>
                  </fieldset>
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
                    Photos
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
                            onChange={uploadFileHandler}
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
              <Link to="/admin/viewcars">
                {" "}
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
              </Link>
              {id ? (
                <button
                  onClick={handleOnEdit}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={onSubmitHandler}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              )}
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
