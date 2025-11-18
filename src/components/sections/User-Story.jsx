'use client'

import React, { useState } from 'react'
import ServiceProvider from '../ui/Service-Provider'
import Tipper from '../ui/Tipper'

export default function UserStories() {
     const [activeStory, setActiveStory] = useState('service-provider')
     // const currentStory = stories[activeStory]

     return (
          <section id="user-stories" className="py-24 px-4 sm:px-6 lg:px-8">
               <div className="max-w-7xl mx-auto">
                    <div className="max-w-6xl mx-auto mb-16">
                         <div className="flex flex-col items-center gap-8 ">
                              {/* Toggle Button */}
                              <div className='bg-gradient-to-r from-[#8B3DFF] to-[#3A7CFD] rounded-full p-[5px]'>
                                   <div className="flex items-center bg-white rounded-full">
                                        <button
                                             onClick={() => setActiveStory('tipper')}
                                             className={`px-8 py-3 rounded-full transition-all duration-300 font-bold ${activeStory === 'tipper'
                                                  ? 'bg-[#3A7CFD] text-white shadow-[2px_0_4px_0_rgba(0,0,0,0.25)] text-3xl'
                                                  : 'bg-gradient-to-r from-[#3A7CFD] to-[#3A35B3] bg-clip-text text-transparent text-2xl'
                                                  }`}
                                        >
                                             Tipper
                                        </button>

                                        <button
                                             onClick={() => setActiveStory('service-provider')}
                                             className={`px-8 py-3 rounded-full transition-all duration-300 font-bold ${activeStory === 'service-provider'
                                                  ? 'bg-[#8b3dff] text-white shadow-[-2px_0_4px_0_rgba(0,0,0,0.25)] text-3xl'
                                                  : 'bg-gradient-to-r from-[#8B3DFF] to-[#6819D7] bg-clip-text text-transparent text-2xl'
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