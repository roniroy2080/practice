"use client";
import "flowbite";
import "@/css/Navbar.css";
import { BiSupport } from "react-icons/bi";
import { FaArrowUp, FaMoneyCheckDollar } from "react-icons/fa6";
import { GiSwapBag } from "react-icons/gi";
import { RiLockPasswordFill, RiLuggageDepositFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { CiCreditCard1 } from "react-icons/ci";
const Layout = ({ children }) => {
  let path = usePathname();
  return (
    <>
      <>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                </button>
                <span className="flex ms-2 md:me-24">
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                    TechnoByte
                  </span>
                </span>
              </div>
              <div className="flex items-center">
                
                <div className="flex items-center ms-3">
                  <div>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://media.istockphoto.com/vectors/user-vector-id1138452882?k=20&m=1138452882&s=170667a&w=0&h=VPcCtAjIcXjS88hse2EL6bD_YLOYzh2V8fDdNCfOiB4="
                        alt="user photo"
                      />
                    </button>
                  </div>
                  <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="home"
                  className={`flex items-center p-2 text-gray-900 rounded-lg ${
                    path === "/home"
                      ? "active"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white  group"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="balance"
                  className={`flex items-center p-2 text-gray-900 rounded-lg ${
                    path === "/" + "balance"
                      ? "active"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white  group"
                  }`}
                >
                  <div
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    style={{ marginTop: "5px" }}
                  >
                    <FaMoneyCheckDollar />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap">Balance</span>
                </a>
              </li>
              <li>
                <a
                  href="deposit"
                  className={`flex items-center p-2 text-gray-900 rounded-lg ${
                    path === "/" + "deposit"
                      ? "active"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white  group"
                  }`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    style={{ marginTop: "5px" }}
                  >
                    <RiLuggageDepositFill />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Deposit</span>
                </a>
              </li>
              <li>
                <a
                  href="withdrawal"
                  className={`flex items-center p-2 text-gray-900 rounded-lg ${
                    path === "/" + "withdrawal"
                      ? "active"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white  group"
                  }`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    style={{ marginTop: "5px" }}
                  >
                    <FaArrowUp />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Withdrawal
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="card"
                  className={`flex items-center p-2 text-gray-900 rounded-lg ${
                    path === "/" + "card"
                      ? "active"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white  group"
                  }`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    style={{ marginTop: "5px" }}
                  >
                    <CiCreditCard1 />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Card</span>
                </a>
              </li>

              <li>
                <a
                  href="password"
                  className={`flex items-center p-2 text-gray-900 rounded-lg ${
                    path === "/" + "password"
                      ? "active"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white  group"
                  }`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    style={{ marginTop: "5px" }}
                  >
                    <RiLockPasswordFill />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Set Password
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="products"
                  className={`flex items-center p-2 text-gray-900 rounded-lg ${
                    path === "/" + "products"
                      ? "active"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white  group"
                  }`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Products
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="voucher"
                  className={`flex items-center p-2 text-gray-900 rounded-lg ${
                    path === "/" + "voucher"
                      ? "active"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white  group"
                  }`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    style={{ marginTop: "4px" }}
                  >
                    <GiSwapBag />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Redeem Voucher
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={`flex items-center p-2 text-gray-900 rounded-lg ${
                    path === "/" + "withdrawal"
                      ? "active"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white  group"
                  }`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <hr />
              <li>
                <a
                  style={{ background: "rgba(159, 152, 250, 0.5)" }}
                  href="#"
                  className={`flex items-center p-2 text-gray-900 rounded-lg ${
                    path === "/" + "withdrawal"
                      ? "active"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white  group"
                  }`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <BiSupport />
                  </svg>
                  <span className="flex-1 ms-3  whitespace-nowrap">
                    Support
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64">
          <div className="p-1 rounded-lg  mt-14">{children}</div>
        </div>
      </>
    </>
  );
};

export default Layout;
