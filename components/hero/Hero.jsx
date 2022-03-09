import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Index() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="">
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                        <Carousel autoPlay showStatus={false} infiniteLoop>
                        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-extrabold leading-tight">
                            Gain Your Top Place in Digital Marketing with <span className="text-custom-1">Sandiip Porwal</span>
                        </h1>
                            <h1 className="text-3xl mb-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-extrabold leading-tight">
                                Flexible Social Media Marketing Solutions  <span className="text-custom-1">to keep you ahead of competition</span>
                            </h1>
                            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-extrabold leading-tight">
                                Digital Transformation Strategy that <span className="text-custom-1">takes your business to the next level</span>
                            </h1>

                        </Carousel>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className=" hover:opacity-90 text-base font-bold bg-custom-1 rounded f-m-m md:py-4 py-2 px-4 md:px-8 foucus:outline-none text-white">Schedule an Appointment </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;