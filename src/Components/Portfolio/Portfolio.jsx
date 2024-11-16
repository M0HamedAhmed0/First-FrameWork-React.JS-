import { Helmet } from "react-helmet";
import { Modal } from "flowbite-react";
import { useState } from "react";
import HomeImg from "../../assets/poert1.png";
import CakeImg from "../../assets/port2.png";
import TentImg from "../../assets/port3.png";

export default function Portfolio() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setOpenModal(true);
    };

    return (
        <>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
            <section className="mt-10 pt-10">
                <div className="container m-auto py-8 text-center">
                    <div className="header-title pt-12">
                        <div className="title">
                            <h1 className="uppercase text-3xl lg:text-[40px] font-bold text-[#2c3e50]">
                                portfolio component
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
                    <div className="all-card container mt-8 px-16 flex gap-12 flex-col md:flex-row ">
                        <div className="cardHome flex flex-col gap-12">
                            <div
                                onClick={() => handleImageClick(HomeImg)}
                                className="overflow-hidden rounded-lg relative cursor-pointer"
                            >
                                <img src={HomeImg} alt="Home Project" />
                                <div className="layer flex items-center justify-center absolute top-0 left-0 w-full h-full hover:bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition duration-700">
                                    <i className="fa-solid fa-plus text-white text-8xl" />
                                </div>
                            </div>
                            <div
                                onClick={() => handleImageClick(HomeImg)}
                                className="overflow-hidden rounded-lg relative cursor-pointer"
                            >
                                <img
                                    src={HomeImg}
                                    alt="Home Project Duplicate"
                                />
                                <div className="layer flex items-center justify-center absolute top-0 left-0 w-full h-full hover:bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition duration-700">
                                    <i className="fa-solid fa-plus text-white text-8xl" />
                                </div>
                            </div>
                        </div>
                        <div className="cardCake flex flex-col gap-12">
                            <div
                                onClick={() => handleImageClick(CakeImg)}
                                className="overflow-hidden rounded-lg relative cursor-pointer"
                            >
                                <img src={CakeImg} alt="Cake Project" />
                                <div className="layer flex items-center justify-center absolute top-0 left-0 w-full h-full hover:bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition duration-700">
                                    <i className="fa-solid fa-plus text-white text-8xl" />
                                </div>
                            </div>
                            <div
                                onClick={() => handleImageClick(CakeImg)}
                                className="overflow-hidden rounded-lg relative cursor-pointer"
                            >
                                <img
                                    src={CakeImg}
                                    alt="Cake Project Duplicate"
                                />
                                <div className="layer flex items-center justify-center absolute top-0 left-0 w-full h-full hover:bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition duration-700">
                                    <i className="fa-solid fa-plus text-white text-8xl" />
                                </div>
                            </div>
                        </div>
                        <div className="cardTent flex flex-col gap-12">
                            <div
                                onClick={() => handleImageClick(TentImg)}
                                className="overflow-hidden rounded-lg relative cursor-pointer"
                            >
                                <img src={TentImg} alt="Tent Project" />
                                <div className="layer flex items-center justify-center absolute top-0 left-0 w-full h-full hover:bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition duration-700">
                                    <i className="fa-solid fa-plus text-white text-8xl" />
                                </div>
                            </div>
                            <div
                                onClick={() => handleImageClick(TentImg)}
                                className="overflow-hidden rounded-lg relative cursor-pointer"
                            >
                                <img
                                    src={TentImg}
                                    alt="Tent Project Duplicate"
                                />
                                <div className="layer flex items-center justify-center absolute top-0 left-0 w-full h-full hover:bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition duration-700">
                                    <i className="fa-solid fa-plus text-white text-8xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                className="bg-[#0d6efd40]"
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Body className="p-0">
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Selected Project"
                            className="w-full h-auto rounded"
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}
