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
     if (status === 'yes') {
          return <Check className="w-5 h-5 text-green-400" />
     }
     if (status === 'warning') {
          return <AlertCircle className="w-5 h-5 text-yellow-400" />
     }
     return <X className="w-5 h-5 text-red-400" />
}

export default function CompetitorTable() {
     return (
          <section id="competitor-table" className="py-20">
               <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How TipApp Wins?</h2>
                         <p className="text-[#C9C3FF] text-lg">How does TipApp compare with other companies?</p>
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto mb-8">
                         <div className="bg-[#d9d9d9]/10 border-2 border-white/60 rounded-[50px] overflow-hidden backdrop-blur">
                              <table className="w-full border-separate border-spacing-0 shadow-[0_0_25px_5px_rgba(0,0,0,0.5)]">
                                   <thead>
                                        <tr className="border-b border-white/60">
                                             <th className="px-6 py-4 text-2xl text-center font-semibold text-white border-b border-white/60">Feature</th>
                                             <th className="px-6 py-4 text-2xl text-center font-semibold text-white border-l border-b border-white/60">TipApp</th>
                                             <th className="px-6 py-4 text-2xl text-center font-semibold text-white border-l border-b border-white/60">Competitors</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {features.map((feature, idx) => (
                                             <tr
                                                  key={idx}
                                                  className={"border-b border-white/60"}
                                             >
                                                  <td className="px-6 py-4 text-gray-200 border-b border-white/60">{feature.name}</td>
                                                  <td className="px-6 py-4 items-center text-center border-l border-b border-white/60">
                                                       <div className="flex justify-center gap-2">
                                                            <StatusIcon status={feature.tipapp} /><span>Yes</span>
                                                       </div>
                                                  </td>
                                                  <td className="px-6 py-4 text-center border-l border-b border-white/60">
                                                       <div className="flex gap-2">
                                                            <StatusIcon status={feature.competitor} />
                                                            <span className="text-sm text-gray-300">{feature.competitorText}</span>
                                                       </div>
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>

                    {/* Mobile Stack */}
                    <div className="md:hidden space-y-4 mb-8">
                         {features.map((feature, idx) => (
                              <div
                                   key={idx}
                                   className="border border-purple-500/50 rounded-lg bg-purple-900/20 p-4 backdrop-blur"
                              >
                                   <h3 className="text-white font-semibold mb-3">{feature.name}</h3>
                                   <div className="grid grid-cols-2 gap-4">
                                        {/* TipApp Column */}
                                        <div className="flex flex-col items-center gap-2 p-3 bg-purple-900/30 rounded">
                                             <span className="text-xs text-gray-400 uppercase">TipApp</span>
                                             <StatusIcon status={feature.tipapp} />
                                        </div>

                                        {/* Competitors Column */}
                                        <div className="flex flex-col items-center gap-2 p-3 bg-purple-900/30 rounded">
                                             <span className="text-xs text-gray-400 uppercase">Competitors</span>
                                             <div className="flex flex-col items-center gap-2">
                                                  <StatusIcon status={feature.competitor} />
                                                  <span className="text-xs text-gray-300 text-center">
                                                       {feature.competitorText}
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         ))}
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
