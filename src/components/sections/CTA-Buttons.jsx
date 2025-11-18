'use client'

export default function CTAButtons() {
     return (
          <section id="cta-buttons" className="py-20 px-4 sm:px-6 lg:px-8">
               <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-8">
                         {/* Heading */}
                         <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">
                              Are YOU ready for your first tip?
                         </h2>

                         {/* CTA Buttons */}
                         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                              {/* Android Button */}
                              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold text-2xl hover:opacity-90 transition-opacity shadow-lg hover:shadow-cyan-500/50">
                                   Download for Android
                              </button>

                              {/* iOS Button */}
                              <a href="https://apps.apple.com/app/tip-app/id6557064561" target="_blank" rel="noopener noreferrer">
                                   <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-2xl hover:opacity-90 transition-opacity shadow-lg hover:shadow-purple-500/50">
                                        Download for iOS
                                   </button>
                              </a>
                         </div>
                    </div>
               </div>
          </section>
     )
}