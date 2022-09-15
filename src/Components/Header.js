/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const user = {
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
};
const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "Categories", to: "/allcategories", current: false },
  { name: "Cars", to: "/cars", current: false },
  { name: "Contact Us", to: "/contact", current: false },
  { name: "About Us", to: "/about", current: false },
];
const userNavigation = [
  // { name: "Your Profile", to: "/profile" },
  { name: "Password", to: "/updatepassword" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  function logoutHandler() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <Disclosure as="nav" className="bg-gray-800 z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://img.freepik.com/premium-vector/car-rental-logo-template-design_316488-1614.jpg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://img.freepik.com/premium-vector/car-rental-logo-template-design_316488-1614.jpg"
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                {localStorage.getItem("token") ? (
                  ""
                ) : (
                  <Link to="/login">
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                      >
                        <AiOutlineUser
                          className="-ml-1 mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                        <span>Login</span>
                      </button>
                    </div>
                  </Link>
                )}
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  {/* Profile dropdown */}
                  {token ? (
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white z-40 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  to={item.to}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                          {localStorage.getItem("token") ? (
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                  )}
                                  onClick={logoutHandler}
                                >
                                  Sign out
                                </div>
                              )}
                            </Menu.Item>
                          ) : (
                            ""
                          )}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              {token ? (
                <div className="flex items-center px-5 sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="mt-3 px-2 space-y-1 sm:px-3">
                {userNavigation.map((item) => (
                  <Link
                    key={item.name}
                    as="a"
                    to={item.to}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
                {localStorage.getItem("token") ? (
                  <div
                    className="cursor-pointer	block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    onClick={logoutHandler}
                  >
                    Sign out
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
