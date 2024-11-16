import { Link, NavLink } from "react-router-dom";
import { useScroll, animated, useSpring } from "@react-spring/web";

export default function Navbar() {
    const { scrollYProgress } = useScroll();
    const animatedPadding = useSpring({
        paddingTop: scrollYProgress.to([0, 1], ["2rem", "1rem"]),
        paddingBottom: scrollYProgress.to([0, 1], ["2rem", "1rem"]),
    });

    return (
        <animated.nav
            style={{ ...animatedPadding }}
            className=" bg-[#2b3d4f] border-gray-200 dark:bg-gray-900 py-6 fixed top-0 left-0 right-0 z-10 transition"
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between lg:mx-[105.500px] lg:px-3 uppercase text-white px-3">
                <Link
                    to=""
                    className="flex items-center  space-x-3 rtl:space-x-reverse py-2"
                >
                    <span className="self-center text-[26px] lg:text-[32px] font-bold whitespace-nowrap dark:text-white">
                        Start Framework
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex transition-shadow items-center px-5 py-2 h-10 justify-center text-sm text-gray-800 border border-gray-800 rounded-md md:hidden focus:outline-none focus:ring-4 focus:ring-gray-950 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="mt-2 font-bold text-white flex flex-col gap-3 lg:gap-0 md:p-0 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="me-8">
                            <NavLink
                                to="/about"
                                className="block p-2 mt-2 md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="me-8">
                            <NavLink
                                to="/portfolio"
                                className="block p-2 mt-2 md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="me-8">
                            <NavLink
                                to="/contact"
                                className="block p-2 mt-2 md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </animated.nav>
    );
}
