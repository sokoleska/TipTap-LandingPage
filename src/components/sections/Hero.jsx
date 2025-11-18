'use client'

export default function Hero() {
     return (
          <section className="min-h-[85vh] flex items-center">
               <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         {/* LEFT: title, subtitle, buttons */}
                         <div className="space-y-8">
                              <div>
                                   <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                                        <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                                             Send Tips Instantly.
                                        </span>
                                        <br />
                                        <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Anywhere. Anytime.</span>
                                   </h1>
                              </div>

                              <div className="space-y-3">
                                   <p className="text-lg text-[#B8F3FF]">
                                        <span>Tip. Switch. Earn.</span>
                                        <br />
                                        <span className="leading-relaxed max-w-lg">
                                             A full-circle app where you can be both Tipper and Service Provider.
                                        </span>
                                   </p>
                              </div>

                              <div className="flex flex-col gap-4 pt-4 mr-52">
                                   <a href="#cta-buttons">
                                        <button
                                             className="text-white w-full py-2 rounded-full font-semibold text-2xl
                              bg-gradient-to-br from-[#0077b6] to-[#6819d7] 
                              hover:bg-[linear-gradient(to bottom right, #6819d7 0%, #0077b6 100%)] hover:border hover:border-[#b8f3ff] hover:shadow-[0_0_10px_0_#b8f3ff] transition-all">
                                             Get Started
                                        </button>
                                   </a>
                                   <a href="/demo">
                                        <button
                                             className="text-white w-full py-2 rounded-full font-semibold text-2xl
                                   bg-transparent border-2 border-[#6819d7]
                                   hover:bg-[linear-gradient(125.77deg,_#b8f3ff_-10.8%,_#7e3cd9_111.8%)] hover:text-[#280b50] hover:shadow-[0_0_10px_0_#b8f3ff]
                                   hover:border-[#b8f3ff] transition-all">
                                             Watch Demo
                                        </button>
                                   </a>
                              </div>
                         </div>

                         {/* RIGHT: phone mockups (layout only, placeholder blocks) */}
                         <div className="relative flex flex-col align-middle justify-center items-center ">
                              {/* Phone Mockup Image */}
                              <div className="relative w-full max-w-sm lg:max-w-md">
                                   {/* Glow effect background */}
                                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

                                   <div className="relative">
                                        <img
                                             src="/src/assets/images/Hero-img.png"
                                             alt="Tip App mobile app mockup"
                                             width={198}
                                             height={428}
                                             className="w-full h-auto rounded-3xl"
                                        />
                                   </div>
                              </div>

                              {/* Download button below */}
                              <div className="w-1/2">
                                   <a href="#cta-buttons">
                                        <button
                                             className="w-full text-white px-10 py-2 rounded-full font-semibold text-2xl
                              bg-gradient-to-r from-[#7e3cd9] to-[#0b538d] 
                              hover:from-[#0b538d] hover:to-[#7e3cd9]  hover:shadow-[0_0_10px_0_#b8f3ff] 
                              transition-all border border-[#b8f3ff]">
                                             Download the App
                                        </button>
                                   </a>
                              </div>

                         </div>
                    </div>
               </div>
          </section>
     );
}
