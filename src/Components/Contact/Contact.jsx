import { Helmet } from "react-helmet";
import { useState } from "react";

export default function Contact() {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <section className="mt-10 pt-10">
                <div className="container m-auto py-8 text-center">
                    <div className="header-title pt-12">
                        <div className="title">
                            <h1 className="uppercase text-3xl lg:text-[40px] font-bold text-[#2c3e50]">
                                Contact Section
                            </h1>
                        </div>
                        <div className="flex items-center justify-center my-4">
                            <div className="w-20 h-1 bg-[#2c3e50] me-4"></div>
                            <span>
                                <i className="fa-solid fa-star text-[#2c3e50]"></i>
                            </span>
                            <div className="w-20 h-1 bg-[#2c3e50] ml-4"></div>
                        </div>
                    </div>
                    <form
                        className="w-5/6 lg:w-1/2 mx-auto text-left p-4 mt-12"
                        onSubmit={handleSubmit}
                    >
                        <div className="relative w-full mb-5 group py-2">
                            <input
                                type="text"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1abd9c] focus:outline-none focus:ring-0 focus:border-[#1abd9c] peer"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="User Name :"
                            />
                            {userName && (
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-lg text-[#1abd9c] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-bg-[#1abd9c]"
                                >
                                    User name:
                                </label>
                            )}
                        </div>
                        <div className="relative z-0 w-full mb-5 group py-2">
                            <input
                                type="number"
                                name="age"
                                id="floating_age"
                                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1abd9c] focus:outline-none focus:ring-0 focus:border-[#1abd9c] peer"
                                value={userAge}
                                onChange={(e) => setUserAge(e.target.value)}
                                placeholder="User Age :"
                            />
                            {userAge && (
                                <label
                                    htmlFor="floating_age"
                                    className="peer-focus:font-medium absolute text-base text-[#1abd9c] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-bg-[#1abd9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    User Age:
                                </label>
                            )}
                        </div>
                        <div className="relative w-full mb-5 group py-2">
                            <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1abd9c] focus:outline-none focus:ring-0 focus:border-[#1abd9c] peer"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                placeholder="User Email :"
                            />
                            {userEmail && (
                                <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-base text-[#1abd9c] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-bg-[#1abd9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    User Email:
                                </label>
                            )}
                        </div>
                        <div className="relative z-0 w-full mb-5 group py-2">
                            <input
                                type="password"
                                name="floating_password"
                                id="floating_password"
                                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1abd9c] focus:outline-none focus:ring-0 focus:border-[#1abd9c] peer"
                                value={userPassword}
                                onChange={(e) =>
                                    setUserPassword(e.target.value)
                                }
                                placeholder="User Password :"
                            />
                            {userPassword && (
                                <label
                                    htmlFor="floating_password"
                                    className="peer-focus:font-medium absolute text-base text-[#1abd9c] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-bg-[#1abd9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    User Password:
                                </label>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-[#1abd9c] hover:bg-[#1abd9c] focus:ring-4 focus:outline-none focus:ring-[#1abd9c] font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#1abd9c] dark:hover:bg-[#1abd9c] dark:focus:ring-[#1abd9c]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
