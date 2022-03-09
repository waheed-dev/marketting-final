import React from "react";
import Link from 'next/link'
export default function Footer() {
    return (
        <>
            <div className="bg-gray-800 py-16 flex flex-col items-center justify-center align-baseline f-f-l mt-20">
                <div className="">
                    <svg aria-label="Home" className="cursor-pointer w-12 sm:w-auto" id="logo"
                         enableBackground="new 0 0 300 300" height={74} viewBox="0 0 300 300" width={73}
                         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g>
                            <path
                                fill="#4c51bf"
                                d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                            />
                        </g>
                    </svg>
                </div>
                <div className="flex items-center py-12">
                    <a className="cursor-pointer" href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width={13} height={20} viewBox="0 0 13 20" fill="none">
                            <path d="M1 8V12H4V19H8V12H11L12 8H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V8H1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a className="cursor-pointer" href="javascript:void(0)">
                        <div className="px-9">
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={18} viewBox="0 0 22 18" fill="none">
                                <path d="M21 1.01001C20 1.50001 19.02 1.69901 18 2.00001C16.879 0.735013 15.217 0.665013 13.62 1.26301C12.023 1.86101 10.977 3.32301 11 5.00001V6.00001C7.755 6.08301 4.865 4.60501 3 2.00001C3 2.00001 -1.182 9.43301 7 13C5.128 14.247 3.261 15.088 1 15C4.308 16.803 7.913 17.423 11.034 16.517C14.614 15.477 17.556 12.794 18.685 8.77501C19.0218 7.55268 19.189 6.28987 19.182 5.02201C19.18 4.77301 20.692 2.25001 21 1.00901V1.01001Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </a>
                    <a className="cursor-pointer" href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width={22} height={22} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x={4} y={4} width={16} height={16} rx={4} />
                            <circle cx={12} cy={12} r={3} />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                    </a>
                </div>
                <div>
                    <ul className="flex">
                        <Link href="/">
                            <li className="lg:text-lg text-sm text-sm leading-5 lg:mr-10 mr-2 text-white flex flex-col items-end justify-end font-normal cursor-pointer hover:text-orange-600">Home</li>
                        </Link>
                        <Link href="/services">
                            <li className="lg:text-lg text-sm text-sm leading-5 lg:mr-10 mr-2 text-white flex flex-col items-end justify-end font-normal cursor-pointer hover:text-orange-600">Services</li>
                        </Link>
                        <Link href="/contact">
                            <li className="lg:text-lg text-sm text-sm leading-5 lg:mr-10 mr-2 text-white flex flex-col items-end justify-end font-normal cursor-pointer hover:text-orange-600">Contact</li>
                        </Link>
                        <a href="javascript:void(0)">
                            <li className="lg:text-lg text-sm text-sm leading-5 text-white flex flex-col items-end justify-end font-normal cursor-pointer hover:text-orange-600">Schedule an appointment</li>
                        </a>
                    </ul>
                </div>
                <div className="pt-16 flex lg:items-start items-center">
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/tm.png" className="pr-4" />
                    <p className="lg:text-base text-xs text-white leading-5">2021 Sandiip porwall, All rights reserved</p>
                </div>
            </div>
        </>
    );
}
