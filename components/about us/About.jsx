import React from "react";
import Link from 'next/link'
export default function index() {
    return (
        <>
            <div className="w-full flex md:flex-col flex-col-reverse items-center justify-center  py-12">

                <img src="https://i.ibb.co/KFN84NL/bgImg.png" className="w-full object-center object-fill md:mt-0 mt-6 xl:block hidden" alt="background image" />
                <img src="https://i.ibb.co/Lxn1MTX/tabley.png" className="w-full object-center object-fill md:mt-0 mt-6 xl:hidden" alt="background image" />
                <div className="md:absolute flex flex-col items-center justify-center px-4">
                    <h1 className="lg:text-5xl text-center text-3xl font-bold text-gray-800">Services For Everyone</h1>
                    <p className="text-gray-600 font-normal leading-7 text-center text-lg sm:text-lg mt-4 lg:w-8/12 sm:w-10/12">Sandiip Porwal is a Digital Marketing Branding expert is the business of providing brands critical digital marketing solutions to drive influence and increase market. As a professional consultant my clients are Entrepreneurs, Small and Mid-Size Business, Corporates and Traditional and Digital Marketing Agencies who are short on capacity. Out-of-the box solutions Brand Strategy, SEO campaigns & Training , Social Media Consulting, Google Ads Campaigns, Shopify website development, and full Design & development services. The mission, since inception, is to serve quality with an unparalleled level of service.</p>
                    <div>
                        <button role="button" aria-label="view all" className="text-base font-medium leading-4 py-4 px-7 text-white bg-custom-1 rounded mt-12 hover:bg-opacity-90">
                            <Link href={'/services'}>

                            View All Services
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
