import {GiArchiveResearch} from "react-icons/gi";
import {VscCode, VscRocket} from "react-icons/vsc";
import {SiSimpleanalytics} from "react-icons/si";
import React from "react";

const Steps = () => {
  return (
      <>

          <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
              <h1 className="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-gray-900">How it
                  works?</h1>
          </div>
          <div className=" container mx-auto">
              <div className="flex justify-center w-full items-center">
                  <div className="w-11/12 f-f-p">
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                          <div className="py-10 px-5 rounded-3xl bg-orange-50">
                              <GiArchiveResearch size={50} color={'#ea580c'}/>
                              <div className="mt-5">
                                  <h1 className=" text-2xl tracking-wide font-bold">RESEARCH</h1>
                                  <h2 className=" mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Pharetra eget donec</h2>
                              </div>
                          </div>
                          <div className="py-10 px-5 rounded-3xl bg-orange-50">
                              <VscCode size={50} color={'#ea580c'}/>
                              <div className="mt-5">
                                  <h1 className="text-gray-900 text-2xl tracking-wide font-bold">DEVELOP</h1>
                                  <h2 className="text-gray-700 mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</h2>
                              </div>
                          </div>
                          <div className="py-10 px-5 rounded-3xl bg-orange-50">
                              <VscRocket size={50} color={'#ea580c'}/>
                              <div className="mt-5">
                                  <h1 className="text-gray-900 text-2xl tracking-wide font-bold">DEPLOY</h1>
                                  <h2 className="text-gray-700 mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</h2>
                              </div>
                          </div>
                          <div className="py-10 px-5 rounded-3xl bg-orange-50">
                              <SiSimpleanalytics size={50} color={'#ea580c'} />
                              <div className="mt-5">
                                  <h1 className="text-gray-900 text-2xl tracking-wide font-bold">ANALYSE</h1>
                                  <h2 className="text-gray-700 mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</h2>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={'container mx-auto flex flex-col items-center py-10 sm:py-16'}>
                  <button className=" hover:opacity-90 text-base font-bold bg-custom-1 rounded f-m-m md:py-4 py-2 px-4 md:px-8 foucus:outline-none text-white">Request a Proposal</button>
              </div>
          </div>

      </>
  )
}

export default Steps