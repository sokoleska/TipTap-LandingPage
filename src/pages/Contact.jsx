export default function Contact() {
     return (
          <div className="min-h-[800px] pt-20 ">
               <div className="max-w-4xl mx-auto px-10 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                              Get in Touch
                         </h1>
                         <p className="text-gray-300 text-lg">
                              Have questions about Tip Tapp? We'd love to hear from you.
                         </p>
                    </div>

                    {/* Content */}
                    <div className="
                    bg-[linear-gradient(25deg,_#d71921_0%,#2C0507_30%,#1C1C4E_70%,_#0077B6_100%)]
                    border border-purple-500/30 rounded-2xl p-8 md:p-12 mb-8">
                         <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>

                         <div className="space-y-6 text-gray-300 mb-8 leading-relaxed">
                              <p>
                                   Questions about tipping, withdrawals, or your account? We’re here to help. Our team supports both Service Providers and Tippers across web and mobile.
                              </p>
                         </div>

                         {/* Email Button */}
                         <a
                              href="mailto:support@tipapp.com"
                              className=" text-xl inline-block bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-[#280B50] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                         >
                              Send us an Email
                         </a>
                    </div>

                    {/* Alternative Contact Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                         <div className="bg-[#d71921]/70 border border-[#0077B6]/50 rounded-xl p-6">
                              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                              <p className="text-gray-300">
                                   <a href="mailto:connect@tiptapthetippingapp.com" className="hover:text-cyan-400 transition-colors">
                                        connect@tiptapthetippingapp.com
                                   </a>
                              </p>
                         </div>

                         <div className="bg-[#0077B6]/70 border border-[#d71921]/50 rounded-xl p-6">
                              <h3 className="text-xl font-semibold text-white mb-2">Response Time</h3>
                              <p className="text-gray-300">
                                   We typically respond within 24 hours
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     )
}