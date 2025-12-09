'use client'

import React from 'react'
import { Check, AlertCircle, X } from 'lucide-react'

const TipAppFeatures = [
     'Global availability',
     'Individual provider onboarding',
     'Reviews & ratings',
     'Multi-payment methods',
     'Currency selection',
     'Instant QR-based tipping',
     'Withdraw system',
     'User-centric design',
     'Anonymous tipping'
]

const CompetitorFeatures = [
     'Mostly regional (US/UK/EU)',
     'Mostly admin or business-controlled',
     'Limited or external links only',
     'Partial or restricted by region',
     'Limited (USD/EUR only)',
     'Often via business setup',
     'Often employer-managed',
     'Business or admin-focused',
     'Rare or unavailable'
]

export default function CompetitorTable() {
     return (
          <section id="competitor-table" className="py-20 px-4 sm:px-6 md:py-24 md:px-8 lg:px-8">
               <div className="mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">How TipApp Wins?</h2>
                         <p className="text-[#B4C2E8] text-sm sm:text-base md:text-lg">How does TipApp compare with other companies?</p>
                    </div>

                    {/* Comparison Table */}
                    <div className='bg-[#140A48]/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] grid-rows-2 text-center rounded-2xl sm:rounded-[30px] md:rounded-[50px] gap-3 py-6 border border-[#3A7CFD]/20'>

                         {/* Table Headers */}
                         <div className='grid grid-cols-2 items-center sm:pb-3 sm:mx-10 sm:gap-10 md:gap-16'>
                              <div>
                                   <h2 className='text-lg sm:text-2xl md:text-3xl font-bold flex justify-center items-center px-2 gap-4'>
                                        <span className='max-[500px]:hidden'>
                                             <img src="src/assets/images/Original_Logo.svg" alt="logo" />
                                        </span>
                                        Why Tip App
                                   </h2>
                              </div>
                              <div>
                                   <h2 className='text-lg sm:text-2xl md:text-3xl font-bold p-2'>Our Competitor Advantage</h2>
                              </div>
                         </div>

                         {/* Table Content */}
                         <div className='hidden sm:grid sm:grid-cols-2 sm:items-center sm:mx-10 sm:gap-10 md:gap-16'>

                              {/* Tip App */}
                              <div className='bg-gradient-to-br from-[#3A7CFD] to-[#FF4E4E] p-[2px] rounded-2xl sm:rounded-[30px] md:rounded-[50px] shadow-[0_0_20px_2px_rgba(58,124,253,0.4)] h-full'>
                                   <div className='bg-[#0D0D26] rounded-2xl py-3  sm:rounded-[30px] md:rounded-[50px] text-base md:text-lg lg:text-xl h-full'>
                                        <ul>
                                             <li>{TipAppFeatures.map((feature, index) => (
                                                  <p key={index} className="py-2 px-4 border-b border-[#3A7CFD]/20">{feature}</p>
                                             ))}</li>
                                        </ul>
                                   </div>
                              </div>

                              {/* Competitors */}
                              <div className='bg-gradient-to-br from-[#FF4E4E] to-[#3A7CFD] p-[2px] rounded-2xl sm:rounded-[30px] md:rounded-[50px] h-full'>
                                   <div className='bg-[#0D0D26] rounded-2xl sm:rounded-[30px] md:rounded-[50px] py-3 text-base md:text-lg lg:text-xl h-full'>
                                        <ul>
                                             <li>{CompetitorFeatures.map((feature, index) => (
                                                  <p key={index} className="py-2 px-4 border-b border-[#3A7CFD]/20">{feature}</p>
                                             ))}</li>
                                        </ul>
                                   </div>
                              </div>
                         </div>

                         {/* Mobile Content 330 - 640 */}
                         <div className="sm:hidden mt-4 px-3">
                              <div className='bg-gradient-to-br from-[#3A7CFD] to-[#FF4E4E] p-[2px] rounded-2xl'>
                                   <div className='bg-[#0D0D26] rounded-2xl py-3 max-h-[60vh] overflow-y-auto scroll-smooth shadow-[0_0_20px_2px_rgba(58,124,253,0.4)]'>
                                        {Array.from({ length: Math.max(TipAppFeatures.length, CompetitorFeatures.length) }).map((_, i) => {
                                             const tipper = TipAppFeatures[i] ?? "—";
                                             const competitor = CompetitorFeatures[i] ?? "—";

                                             return (
                                                  <div key={i} className='grid grid-cols-2 text-sm'>
                                                       <p className="py-2 px-4 border-b border-r border-[#3A7CFD]/20">{tipper}</p>
                                                       <p className="py-2 px-4 border-b border-[#3A7CFD]/20">{competitor}</p>
                                                  </div>
                                             );
                                        })}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}
