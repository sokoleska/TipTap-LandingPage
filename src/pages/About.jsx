export default function About() {
     return (
          <main className="min-h-screen">
               {/* Header */}
               <section className="pt-20 pb-10 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                         <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                              About TipTapp
                         </h1>
                         <p className="text-xl text-gray-300">
                              Welcome to TipTapp — the simplest way to show appreciation and support through digital tipping.
                         </p>
                    </div>
               </section>

               {/* Mission Section */}
               <section className="py-10 px-4">
                    <div className="max-w-4xl mx-auto">
                         <div className=" bg-[#8b3dff]/30 border border-purple-500/20 rounded-2xl p-8 md:p-12">
                              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                   Our mission is to make gratitude effortless. Whether you’re thanking your favorite creator, a service provider, or a coworker, TipTapp lets you send and receive tips securely with just a few taps.
                              </p>
                              <p className="text-lg text-gray-300 leading-relaxed">
                                   We believe in rewarding effort instantly and empowering individuals to earn directly from their supporters. Every tip, no matter the size, helps people feel valued for their time, talent, and service.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Vision Section */}
               <section className="py-10 px-4">
                    <div className="max-w-4xl mx-auto">
                         <div className=" bg-[#8b3dff]/30 border border-purple-500/20 rounded-2xl p-8 md:p-12">
                              <h2 className="text-4xl font-bold text-white mb-6">What We Do</h2>
                              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                   <ul className="space-y-1 text-body list-disc list-inside">
                                        <li><b>For Tippers:</b> Send tips easily, securely, and instantly - no cash needed.</li>
                                        <li><b>For Service Providers & Creators:</b> Receive direct appreciation from your audience or customers.</li>
                                        <li><b>For Businesses:</b> Streamline digital tipping for staff with transparency and control.</li>
                                   </ul>
                              </p>
                         </div>
                    </div>
               </section>

               {/* Story Section */}
               <section className="py-10 px-4">
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Vision</h2>
                         <div className="space-y-8">
                              <div className=" bg-[#8b3dff]/30 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">The Beginning</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        To create a world where appreciation moves faster than words — where gratitude is shared instantly, globally, and meaningfully.
Thank you for being part of the TipApp community. Together, we’re changing the way people say “thank you.”
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Values Section */}
               <section className="py-10 px-4 mb-12">
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose TipApp</h2>
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6">
                                   <h3 className="text-xl font-semibold text-white mb-3">Secure Payments</h3>
                                   <p className="text-gray-300">
                                        Secure transactions with trusted payment gateways
                                   </p>
                              </div>
                              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6">
                                   <h3 className="text-xl font-semibold text-white mb-3">Instant Notifications</h3>
                                   <p className="text-gray-300">
                                        Instant notifications for every tip sent or received
                                   </p>
                              </div>
                              <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-xl p-6">
                                   <h3 className="text-xl font-semibold text-white mb-3">Transparent System</h3>
                                   <p className="text-gray-300">
                                        Transparent commission and payout system
                                   </p>
                              </div>
                              <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-xl p-6">
                                   <h3 className="text-xl font-semibold text-white mb-3">Cross-Platform</h3>
                                   <p className="text-gray-300">
                                        Works seamlessly on both mobile and web
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     )
}