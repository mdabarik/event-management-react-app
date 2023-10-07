import BgImage from "../../components/BgImage/BgImage";
import LoginBg from "../../assets/login-bg.jpg";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Registration = () => {
    return (
        <div className="h-[115vh] w-[100vw] flex items-center justify-center">
            <BgImage isFull={true} image={LoginBg}></BgImage>
            <div className="flex flex-col justify-center items-center bg-[#ffffff] rounded-lg p-8">

                {/* input form start */}
                <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Create new accouont
                    </h4>
                    <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Enter your details to register.
                    </p>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" autoComplete="off" >
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full px-4 py-2 rounded-md bg-transparent outline-none border-[1px]"
                                />
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 rounded-md bg-transparent outline-none border-[1px]"
                                />
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 rounded-md bg-transparent outline-none border-[1px]"
                                />
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="password"
                                    name="confirm_password"
                                    placeholder="Confirm password"
                                    className="w-full px-4 py-2 rounded-md bg-transparent outline-none border-[1px]"
                                />
                            </div>
                        </div>
                        <div className="inline-flex items-center">
                            <label
                                className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                                htmlFor="checkbox"
                                data-ripple-dark="true"
                            >
                                <input
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#db332a] checked:bg-[#db332a] checked:before:bg-[#db332a] hover:before:opacity-10"
                                    id="checkbox"
                                />
                                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                            </label>
                            <label
                                className="mt-px cursor-pointer select-none font-light text-gray-700"
                                htmlFor="checkbox"
                            >
                                <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                                    I agree the
                                    <a
                                        className="font-medium transition-colors hover:text-[#db332a]"
                                        href="#"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </p>
                            </label>
                        </div>
                        <button
                            className="mt-6 block w-full select-none rounded-lg bg-[#db332a] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Register
                        </button>
                        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            <span className="mr-2">Already have an account?</span>
                            <Link
                                to="/login"
                                className="font-medium text-[#db332a] transition-colors hover:text-blue-700"
                                >
                                Login now
                            </Link>
                        </p>
                    </form>
                </div>
                <div className="flex flex-row items-center justify-center rounded-full border-[1px] p-1 px-5 mt-4 bg-[#9CA3AF95]">
                    <FcGoogle className="text-4xl"></FcGoogle>
                    <span className="ml-3">Sign in with Google</span>
                </div>
                {/* input form end */}
            </div>
        </div>
    );
};

export default Registration;