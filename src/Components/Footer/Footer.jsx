export default function Footer() {
    return (
        <>
            <footer className="bg-[#2b3d4f] shadow dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-10 text-center">
                    <div className="sm:flex  sm:justify-between text-white m-6">
                        <div className="location mb-4 flex-1">
                            <div className="p-4">
                                <h2 className="uppercase text-2xl lg:text-[28px] pt-5 mb-2 font-medium">
                                    location
                                </h2>
                                <h3 className="mb-4">2215 John Daniel Drive</h3>
                                <h3 className="mb-4">Clark, MO 65243</h3>
                            </div>
                        </div>
                        <div className="social mb-4 flex-1">
                            <div className="p-4">
                                <h2 className="uppercase text-2xl lg:text-[28px] pt-5 mb-3 font-medium">
                                    AROUND THE WEB
                                </h2>
                                <ul className="flex justify-center space-x-3 mt-5">
                                    <li>
                                        <span className="p-[10px] border border-white rounded-full ">
                                            <i className="fa-brands fa-facebook"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-[10px] border border-white rounded-full ">
                                            <i className="fa-brands fa-twitter"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-[10px] border border-white rounded-full ">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-[10px] border border-white rounded-full ">
                                            <i className="fa-solid fa-globe"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="aboutFreeLancer mb-4 flex-1">
                            <div className="p-4">
                                <h2 className="uppercase text-2xl lg:text-[28px] pt-5 mb-3 font-medium">
                                    ABOUT FREELANCER
                                </h2>
                                <p className="mb-4">
                                    Freelance is a free to use, licensed
                                    Bootstrap theme created by Route
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomFooter bg-[#1a2530] p-[10px] text-center">
                    <span className="block text-base text-white sm:text-center pt-2 mb-4">
                        Copyright © Your Website 2021
                    </span>
                </div>
            </footer>
        </>
    );
}
