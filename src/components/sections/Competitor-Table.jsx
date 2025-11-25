'use client'

import React from 'react'
import { Check, AlertCircle, X } from 'lucide-react'

const features = [
     {
          name: 'Global availability',
          tipapp: 'yes',
          competitor: 'warning',
          competitorText: 'Mostly regional (US/UK/EU)'
     },
     {
          name: 'Individual provider onboarding',
          tipapp: 'yes',
          competitor: 'warning',
          competitorText: 'Mostly admin or business-controlled'
     },
     {
          name: 'Reviews & ratings',
          tipapp: 'yes',
          competitor: 'warning',
          competitorText: 'Limited or external links only'
     },
     {
          name: 'Multi-payment methods',
          tipapp: 'yes',
          competitor: 'warning',
          competitorText: 'Partial or restricted by region'
     },
     {
          name: 'Currency selection',
          tipapp: 'yes',
          competitor: 'warning',
          competitorText: 'Limited (USD/EUR only)'
     },
     {
          name: 'Instant QR-based tipping',
          tipapp: 'yes',
          competitor: 'warning',
          competitorText: 'Often via business setup'
     },
     {
          name: 'Withdraw system',
          tipapp: 'yes',
          competitor: 'warning',
          competitorText: 'Often employer-managed'
     },
     {
          name: 'User-centric design',
          tipapp: 'yes',
          competitor: 'warning',
          competitorText: 'Business or admin-focused'
     },
     {
          name: 'Anonymous tipping',
          tipapp: 'yes',
          competitor: 'no',
          competitorText: 'Rare or unavailable'
     }
]

const StatusIcon = ({ status }) => {
     const base = 'inline-block align-middle'
     if (status === 'yes') {
          return <Check className={`${base} w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400`} />
     }
     if (status === 'warning') {
          return <AlertCircle className={`${base} w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400`} />
     }
     return <X className={`${base} w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-400`} />
}

export default function CompetitorTable() {
     return (
          <section id="competitor-table" className="py-20 px-10 md:py-24 md:px-8">
               <div className="mx-auto lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-6 sm:mb-8 md:mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">How TipApp Wins?</h2>
                         <p className="text-[#C9C3FF] text-sm sm:text-base md:text-lg">How does TipApp compare with other companies?</p>
                    </div>

                    {/* Desktop Table */}
                    <div className="overflow-x-auto mb-6 sm:mb-8">
                         <div className="bg-[#d9d9d9]/10 border-2 border-white/60 rounded-2xl sm:rounded-[40px] md:rounded-[50px] overflow-hidden backdrop-blur">
                              <table className="w-full border-separate border-spacing-0 shadow-[0_0_25px_5px_rgba(0,0,0,0.5)]">
                                   <thead>
                                        <tr className="border-b border-white/60">
                                             <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-2xl text-center font-semibold text-white border-l border-b border-white/60">Feature</th>
                                             <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-2xl text-center font-semibold text-white border-l border-b border-white/60">TipApp</th>
                                             <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-2xl text-center font-semibold text-white border-l border-b border-white/60">Competitors</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {features.map((feature, idx) => (
                                             <tr
                                                  key={idx}
                                                  className={"border-b border-white/60"}
                                             >
                                                  <td className="px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-gray-200 text-sm sm:text-base border-b border-white/60">{feature.name}</td>
                                                  <td className="px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-center border-l border-b border-white/60">
                                                       <div className="inline-flex items-center justify-center gap-2">
                                                            <StatusIcon status={feature.tipapp} />
                                                            <span className="text-xs sm:text-sm md:text-base text-gray-100">Yes</span>
                                                       </div>
                                                  </td>
                                                  <td className="px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 border-l border-b border-white/60">
                                                       <div className="flex items-start sm:items-center gap-2">
                                                            <StatusIcon status={feature.competitor} />
                                                            <span className="text-xs sm:text-sm md:text-base text-gray-300">{feature.competitorText}</span>
                                                       </div>
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                         <a href="#cta-buttons">
                              <button
                                   className="text-white px-10 py-2 rounded-full font-semibold text-2xl
                    bg-gradient-to-r from-[#7e3cd9] to-[#0b538d] 
                    hover:from-[#0b538d] hover:to-[#7e3cd9]  hover:shadow-[0_0_10px_0_#b8f3ff] 
                    transition-all border border-[#b8f3ff]">
                                   Download the App
                              </button>
                         </a>
                    </div>
               </div>
          </section>
     )
}
