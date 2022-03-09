import React from "react";
import {BiSearchAlt} from "react-icons/bi";
import {SiAdguard, SiFigma, SiShopify} from "react-icons/si";
import {BsCodeSlash, BsGraphUp} from "react-icons/bs";
import {RiAdvertisementLine} from "react-icons/ri";
import {FaAdversal, FaSearchDollar} from "react-icons/fa";
import {GiAbstract014} from "react-icons/gi";
import {MdSocialDistance} from "react-icons/md";

function Features() {
    return (
        <>
            <div className="mx-auto container px-4 xl:px-0 mt-12 lg:mt-28 f-f-p">
                <div className="w-full flex justify-center mt-12 lg:mt-24">
                    <div className="hidden lg:block xl:w-11/12">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                            <div>
                                <div className="flex items-center justify-end pb-12 xl:pr-10">
                                    <div className={'mt-6'}>
                                        <BiSearchAlt size={70} color={'#ea580c'}/>
                                    </div>
                                    <div className="flex flex-col pl-8 xl:w-8/12">
                                        <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">SEO Services</h2>
                                        <p className="text-gray-700 leading-7 tracking-wide text-base mt-3">This is the length of he dummy content you can use for now. Actual content can be added later.</p>
                                    </div>
                                </div>
                                <div className="w-full hidden lg:flex justify-center">
                                    <hr className="w-7/12 border-t-2 border-gray-300" />
                                </div>
                            </div>
                            <div>
                                <div className="h-36 border-l-2 border-b border-gray-300 hidden lg:block absolute" />
                                <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
                                    <div className={'mb-10'}>
                                        <SiAdguard size={70} color={'#ea580c'}/>
                                    </div>
                                    <div className="flex flex-col pl-8 xl:w-8/12">
                                        <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">Online Reputation Management</h2>
                                        <p className="text-gray-700 leading-7 tracking-wide text-base mt-3">This is the length of he dummy content you can use for now. Actual content can be added later.</p>
                                    </div>
                                </div>
                                <div className="w-full hidden lg:flex justify-center">
                                    <hr className="w-7/12 border-t-2 border-gray-300" />
                                </div>
                            </div>
                            <div>
                                <div className="h-36 border-l-2 hidden lg:block absolute" />
                                <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
                                    <div className={'mb-6'}>
                                        <BsCodeSlash size={70} color={'#ea580c'}/>
                                    </div>
                                    <div className="flex flex-col pl-8 xl:w-8/12">
                                        <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">Web development</h2>
                                        <p className="text-gray-700 leading-7 tracking-wide text-base mt-3">This is the length of he dummy content you can use for now. Actual content can be added later.</p>
                                    </div>
                                </div>
                                <div className="w-full hidden lg:flex justify-center">
                                    <hr className="w-7/12 border-t-2 border-gray-300" />
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-8">
                            <div>
                                <div className="flex items-center justify-end pb-12 pr-10">
                                    <div className={'mt-8'}>
                                        <GiAbstract014 size={70} color={'#ea580c'}/>
                                    </div>
                                    <div className="flex flex-col pl-8 xl:w-8/12">
                                        <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">Website Design</h2>
                                        <p className="text-gray-700 leading-7 tracking-wide text-base mt-3">This is the length of he dummy content you can use for now. Actual content can be added later.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="h-36 border-l-2 hidden lg:block absolute" />
                                <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
                                    <div>
                                        <MdSocialDistance size={70} color={'#ea580c'}/>
                                    </div>
                                    <div className="flex flex-col pl-8 xl:w-8/12">
                                        <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">Social Media Marketing</h2>
                                        <p className="text-gray-700 leading-7 tracking-wide text-base mt-3">This is the length of he dummy content you can use for now. Actual content can be added later.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="h-36 border-l-2 hidden lg:block absolute" />
                                <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
                                    <div>
                                        <FaSearchDollar size={70} color={'#ea580c'} />
                                    </div>
                                    <div className="flex flex-col pl-8 xl:w-8/12">
                                        <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">Google Ads Campaigns</h2>
                                        <p className="text-gray-700 leading-7 tracking-wide text-base mt-3">This is the length of he dummy content you can use for now. Actual content can be added later.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden flex-wrap justify-between">
                        <div className="md:flex w-full justify-between items-center">
                            <div className="flex items-center">
                                <div>
                                    <BiSearchAlt size={50} color={'#ea580c'}/>
                                </div>
                                <div className="flex flex-col pl-5">
                                    <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">SEO Services</h2>
                                    <p className="text-gray-700 leading-7 tracking-wide text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-10 md:mt-0">
                                <div>
                                    <SiAdguard size={40} color={'#ea580c'}/>
                                </div>
                                <div className="flex flex-col pl-5">
                                    <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">Online Reputation Management</h2>
                                    <p className="text-gray-700 leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex w-full justify-between items-center my-10">
                            <div className="flex items-center">
                                <div>
                                    <BsCodeSlash size={40} color={'#ea580c'}/>
                                </div>
                                <div className="flex flex-col pl-5">
                                    <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">Web development</h2>
                                    <p className="text-gray-700 leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
                                </div>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <div className="flex items-center">
                                    <div>
                                        <GiAbstract014 size={40} color={'#ea580c'}/>
                                    </div>
                                    <div className="flex flex-col pl-5">
                                        <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">Web Design</h2>
                                        <p className="text-gray-700 leading-7 tracking-wide text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex w-full justify-between items-center">
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <MdSocialDistance size={40} color={'#ea580c'}/>
                                    </div>
                                    <div className="flex flex-col pl-5">
                                        <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">Social Media Marketing</h2>
                                        <p className="text-gray-700 leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <div className="flex items-center">
                                    <div>
                                        <FaSearchDollar size={40} color={'#ea580c'} />
                                    </div>
                                    <div className="flex flex-col pl-5">
                                        <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-gray-900">Google Ads Campaigns</h2>
                                        <p className="text-gray-700 leading-7 tracking-wide text-base mt-3">This is the length of he dummy content you can use for now. Actual content can be added later.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;
