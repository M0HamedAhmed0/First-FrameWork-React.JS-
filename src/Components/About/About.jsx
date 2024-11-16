import { Helmet } from "react-helmet";

export default function About() {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <section className="bg-[#1abd9c] min-h-screen mt-14">
                <div className="container m-auto flex flex-col items-center justify-center text-center text-white min-h-[inherit]">
                    <div>
                        <div>
                            <div className="title">
                                <h1 className="uppercase text-3xl lg:text-[40px] font-bold">
                                    about component
                                </h1>
                            </div>
                            <div className="flex items-center justify-center my-4 ">
                                <div className="w-20 h-1 bg-white me-4"></div>
                                <span>
                                    <i className="fa-solid fa-star"></i>
                                </span>
                                <div className="w-20 h-1 bg-white ml-4"></div>
                            </div>
                        </div>
                        <div className="container  max-w-6xl">
                            <div className="px-12 flex flex-col md:flex-row text-start">
                                <div className="left-content md:pl-12 pl-3  pr-3 mb-4">
                                    <p>
                                        Freelancer is a free bootstrap theme
                                        created by Route. The download includes
                                        the complete source files including
                                        HTML, CSS, and JavaScript as well as
                                        optional SASS stylesheets for easy
                                        customization.
                                    </p>
                                </div>
                                <div className="right-content pl-3 pr-12">
                                    Freelancer is a free bootstrap theme created
                                    by Route. The download includes the complete
                                    source files including HTML, CSS, and
                                    JavaScript as well as optional SASS
                                    stylesheets for easy customization.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
