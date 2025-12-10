'use client'

import React, { useState } from 'react'
import ServiceProvider from '../ui/ServiceProvider-Wave'
import Tipper from '../ui/Tipper-Wave'

export default function UserStories() {
     const [activeStory, setActiveStory] = useState('service-provider')

     return (
          <section id="user-stories" className="py-20 px-4 sm:px-6 md:py-24 md:px-8 lg:px-8">
               <div className="max-w-7xl mx-auto">
                    <div className="max-w-6xl mx-auto mb-10">
                         <div className="flex flex-col items-center gap-8 ">
                              {/* Toggle Button */}
                              <div className='bg-gradient-to-r from-[#d71921] to-[#0077B6] rounded-full p-[4px] shadow-[0_0_20px_rgba(255,255,255,0.5)]'>
                                   <div className="flex items-center bg-white rounded-full h-[50px]">

                                        {/* TIPPER */}
                                        <button
                                             onClick={() => setActiveStory('tipper')}
                                             className={`
                                                  rounded-full transition-all duration-300 font-bold h-full 
                                                  px-5 min-w-[150px] flex items-center justify-center 
                                                  ${activeStory === 'tipper'
                                                       ? 'bg-[#0077B6] text-white shadow-[2px_0_4px_0_rgba(0,0,0,0.25)] text-xl md:text-2xl px-5'
                                                       : 'bg-gradient-to-r from-[#0077B6] to-[#3A35B3] bg-clip-text text-transparent text-lg md:text-xl px-3'
                                                  }`}
                                        >
                                             Tipper
                                        </button>

                                        {/* SERVICE PROVIDER */}
                                        <button
                                             onClick={() => setActiveStory('service-provider')}
                                             className={`
                                                  rounded-full transition-all duration-300 font-bold h-full 
                                                  px-5 min-w-[150px] flex items-center justify-center
                                                  ${activeStory === 'service-provider'
                                                       ? 'bg-[#D71B23] text-white shadow-[-2px_0_4px_0_rgba(0,0,0,0.25)] text-xl md:text-2xl px-5'
                                                       : 'bg-gradient-to-r from-[#FF4E4E] to-[#D71B23] bg-clip-text text-transparent text-lg md:text-xl px-3'
                                                  }`}
                                        >
                                             Service Provider
                                        </button>
                                   </div>
                              </div>

                         </div>
                    </div>

                    {activeStory === 'tipper' ? <Tipper /> : <ServiceProvider />}
               </div>
          </section>
     )
}