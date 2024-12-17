import { Helmet } from "react-helmet";
import HeaderImg from "../../assets/avataaars.svg";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <header className="bg-[#1abd9c] text-white text-center p-8 mt-24 h-screen">
                <div className="container max-w-md m-auto mt-20">
                    <div className="imgHome w-[250px] m-auto mb-5">
                        <img src={HeaderImg} alt="" />
                    </div>
                    <div className="header-content pt-3">
                        <h1 className="uppercase text-3xl lg:text-[40px] font-bold">
                            start Framework
                        </h1>
                        <div className="flex items-center justify-center mt-3">
                            <div className="w-20 h-1 bg-white me-4"></div>
                            <span>
                                <i className="fa-solid fa-star"></i>
                            </span>
                            <div className="w-20 h-1 bg-white ml-4"></div>
                        </div>
                        <div className="mt-3">
                            <p>Graphic Artist - Web Designer - Illustrator</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
