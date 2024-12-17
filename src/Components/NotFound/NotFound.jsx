import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <Navbar />
            <section className="mt-52 pt-48">
                <div className="container m-auto text-center">
                    <div className="header-title pt-12">
                        <div className="title">
                            <h1 className="uppercase text-3xl lg:text-[40px] font-bold text-[#2c3e50]">
                                Not Found Page
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
                    <div className="h-72 flex items-center justify-center text-[#2c3e50]">
                        <span className="text-4xl font-black pr-4">404</span>
                        <span className="text-4xl border-r-2 w-1 h-12 bg-[#2c3e50]"></span>
                        <h2 className="pl-4 text-lg font-medium">
                            This page could not be found.
                        </h2>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
