'use client'

export default function CTAButtons() {
     return (
          <section id="cta-buttons" className="py-20 px-10 sm:px-6 lg:px-8">
               <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-10">
                         {/* Heading */}
                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-20 [text-shadow:0_0_28px_#3A7CFD]">
                              Are YOU ready for your first TIP?
                         </h2>

                         {/* CTA Buttons */}
                         <div className="flex flex-col sm:flex-row gap-10 sm:gap-6 justify-center items-center">
                              {/* Android Button */}
                              <button className="px-8 py-4 rounded-full 
                              bg-[linear-gradient(125deg,_#d71921_0%,#2C0507_40%,#1C1C4E_60%,_#0077B6_100%)]
                              shadow-[0_0_20px_0_#5B93FF] text-white font-semibold text-2xl hover:opacity-90 transition-opacity hover:shadow-[0_0_40px_0_#5B93FF]">
                                   Download for Android
                              </button>

                              {/* iOS Button */}
                              <a href="https://apps.apple.com/app/tip-app/id6557064561" target="_blank" rel="noopener noreferrer">
                                   <button className="px-8 py-4 rounded-full 
                                   bg-[linear-gradient(125deg,_#0077B6_0%,#1C1C4E_40%,#2C0507_60%,_#d71921_100%)] 
                                   shadow-[0_0_20px_0_#5B93FF] text-white font-semibold text-2xl hover:opacity-90 transition-opacity hover:shadow-[0_0_40px_0_#5B93FF]">
                                        Download for iOS
                                   </button>
                              </a>

                              {/* Web App Button */}
                              <a href="https://app.tiptapthetippingapp.com/sign-in" target="_blank" rel="noopener noreferrer">
                                   <button className="px-8 py-4 rounded-full 
                                   bg-[linear-gradient(125deg,_#d71921_0%,#2C0507_40%,#1C1C4E_60%,_#0077B6_100%)] 
                                   shadow-[0_0_20px_0_#5B93FF] text-white font-semibold text-2xl hover:opacity-90 transition-opacity hover:shadow-[0_0_40px_0_#5B93FF]">
                                        Continue to Web App
                                   </button>
                              </a>
                         </div>
                    </div>
               </div>
          </section>
     )
}