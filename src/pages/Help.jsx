export default function Help() {
     return (
          <main className="min-h-screen">
               {/* Header */}
               <section className="pt-20 pb-12 px-10 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                         <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                              Help Center
                         </h1>
                    </div>
               </section>

               {/* Getting Started Section */}
               <section className="py-16 px-10 md:px-8">
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl font-bold text-white mb-12 text-center">1. Getting Started</h2>
                         <div className="space-y-8">
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">What is Tipping App?</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        Tipping App allows you to send and receive tips easily, securely, and instantly. Connect with your favorite creators, friends, or service providers and show appreciation in a few taps.
                                   </p>
                              </div>
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">How to Create an Account</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        Download the app from the App Store / Google Play. <br />
                                        Sign up with your email, phone number, or social login. <br />
                                        Verify your account via the code sent to your email/phone.
                                   </p>
                              </div>
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">Setting Up Your Profile</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        Add a profile picture and display name. <br />
                                        Link your preferred payment method for sending/receiving tips.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="py-16 px-10 md:px-8">
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl font-bold text-white mb-12 text-center">2. Sending Tips</h2>
                         <div className="space-y-8">
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">How to Send a Tip</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        Browse or search for the user/creator you want to tip. <br />
                                        Tap “Send Tip” and choose an amount. <br />
                                        Confirm your payment method and tap “Send.”
                                   </p>
                              </div>
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">Payment Methods</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        We accept [list payment options: credit/debit cards, PayPal, Apple Pay, etc.].
                                   </p>
                              </div>
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">Transaction Limits</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        The maximum tip amount per transaction is €1, and daily limits are €100.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="py-16 px-10 md:px-8">
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl font-bold text-white mb-12 text-center">3. Receiving Tips</h2>
                         <div className="space-y-8">
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">How to Receive a Tip</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        Once someone tips you, the amount will be added to your in-app balance instantly.
                                   </p>
                              </div>
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">Withdrawing Your Balance</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        Go to your wallet. <br />
                                        Tap “Withdraw” and select your bank account or payment method. <br />
                                        Withdrawals usually take [X] business days.
                                   </p>
                              </div>
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">Tips Notifications</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        You’ll receive instant notifications for every tip received.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="py-16 px-10 md:px-8">
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl font-bold text-white mb-12 text-center">4. Managing Payments</h2>
                         <div className="space-y-8">
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">Adding a Payment Method</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        Go to Settings {">"} Payment Methods {">"} Add New. <br />
                                        Enter your card or payment account details securely.
                                   </p>
                              </div>
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">Refunds & Failed Transactions</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        If a tip fails, the amount will be returned to your account immediately. <br />
                                        Refunds can take up to [X] business days depending on your bank.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="py-16 px-10 md:px-8">
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl font-bold text-white mb-12 text-center">5. Security & Privacy</h2>
                         <div className="space-y-8">
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">Adding a Payment Method</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        All transactions are encrypted and secure. <br />
                                        We never share your personal information without consent. <br />
                                        Enable two-factor authentication for extra account security.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="py-16 px-10 md:px-8">
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl font-bold text-white mb-12 text-center">6. Troubleshooting</h2>
                         <div className="space-y-8">
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <h3 className="text-2xl font-semibold text-white mb-3">Adding a Payment Method</h3>
                                   <p className="text-gray-300 leading-relaxed">
                                        <b>Tip Not Sent</b> – Check your internet connection, payment method, and account status. <br />
                                        <b>Tip Not Received</b> – Ensure your wallet is linked and active. Contact support if the issue persists. <br />
                                        <b>App Crashes or Errors</b> – Try updating the app or reinstalling it.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="py-16 px-10 md:px-8">
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl font-bold text-white mb-12 text-center">7. Contact Support</h2>
                         <div className="space-y-8">
                              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                                   <p className="text-gray-300 leading-relaxed">
                                        For help, email connect@tiptapthetippingapp.com or tap Help & Support in the app. <br />
                                        Response time: Usually within 24 hours.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     )
}
