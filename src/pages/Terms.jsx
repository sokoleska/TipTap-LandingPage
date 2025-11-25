'use client'

export default function Terms() {
     return (
          <main className="min-h-screen bg-gradient-to-b">
               {/* Header */}
               <div className="border-b border-purple-500/20 py-8 px-10 md:px-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                         <h1 className="text-4xl font-bold text-white mt-4">Terms & Conditions</h1>
                         <p className="text-gray-400 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
               </div>

               {/* Content */}
               <div className="max-w-4xl mx-auto px-10 md:px-8 py-12">
                    <div className="prose prose-invert max-w-none">
                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">1. Overview </h2>
                              <p className="text-gray-300 leading-relaxed">
                                   Tip App provides a platform that enables users to send and receive digital tips securely through Stripe, a trusted third-party payment processor. Tip App does not operate as a bank, payment institution, or money service business. All financial transactions are processed and managed by Stripe Connect, in accordance with applicable laws and regulations.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">2. Definitions </h2>
                              <p className="text-gray-300 leading-relaxed">
                                   <b>“Tipper”</b> – A user who sends a tip or payment through Tip App.
                              </p>
                              <p className="text-gray-300 leading-relaxed">
                                   <b>“Service Provider”</b> – A user who receives a tip or payment through Tip App.
                              </p>
                              <p className="text-gray-300 leading-relaxed">
                                   <b>“Platform”</b> – Refers to Tip App, including its website, mobile app, and related services.
                              </p>
                              <p className="text-gray-300 leading-relaxed">
                                   <b>“Stripe”</b> – Refers to Stripe Payments UK Ltd, which processes all payments and payouts on behalf of Tip App users.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">3. Eligibility</h2>
                              <p className="text-gray-300 leading-relaxed">
                                   To use Tip App, you must:
                              </p>
                              <ul className="list-disc list-inside text-gray-300 space-y-2 my-4">
                                   <li>Be at least 18 years old</li>
                                   <li>Reside in a country where Stripe Connect is available</li>
                                   <li>Provide accurate and complete information during registration</li>
                              </ul>
                              <p className="text-gray-300 leading-relaxed">
                                   By using Tip App, you represent that you meet these eligibility requirements.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">4. Using Tip App </h2>
                              <h4 className="font-semibold my-3 text-xl text-white">For Tippers</h4>
                              <ul className="list-disc list-inside text-gray-300 space-y-2 my-4">
                                   <li>You may send tips to Service Providers through the Platform using a supported payment method (credit/debit card, Apple Pay, Google Pay, etc.). </li>
                                   <li>The minimum tip amount is €1.</li>
                                   <li>All tips are final and non-refundable, except in cases of proven fraud or payment error. </li>
                              </ul>
                              <h4 className="font-semibold my-3 text-xl text-white">For Service Providers</h4>
                              <ul className="list-disc list-inside text-gray-300 space-y-2 my-4">
                                   <li>You can receive tips from Tippers directly through Stripe Connect.</li>
                                   <li>Funds become available for withdrawal according to Stripe’s payout schedule and may take several days to process.</li>
                                   <li>You may initiate a withdrawal at any time for available funds.</li>
                                   <li>If no withdrawal is made, Tip App will automatically process all pending payouts once the oldest transaction reaches 80 days.</li>
                              </ul>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">5. Platform Fees</h2>
                              <p className="text-gray-300 leading-relaxed">
                                   Tip App charges a 10% platform fee on each completed transaction. This fee is automatically deducted from the total amount before the Service Provider receives their payout. Stripe may also charge additional processing fees according to their pricing structure, which are separate from Tip App’s service fee.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">6. Payment Processing via Stripe </h2>
                              <p className="text-gray-300 leading-relaxed">
                                   All payment processing on Tip App is handled by Stripe Payments UK Ltd via Stripe Connect. By using Tip App, you agree to Stripe’s Terms of Service and Privacy Policy, available at:
                              </p>
                              <ul className="list-disc list-inside text-gray-300 space-y-2 my-4">
                                   <li><a href="https://stripe.com/gb/connect-account/legal" target="_blank" rel="noopener noreferrer">https://stripe.com/gb/connect-account/legal</a></li>
                                   <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a></li>
                              </ul>
                              <p className="text-gray-300 leading-relaxed">
                                   Tip App does not store or have access to your payment card details. Stripe Payments UK Ltd manages all KYC (Know Your Customer) and AML (Anti-Money Laundering) requirements for compliance purposes.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">7. Modifications</h2>
                              <p className="text-gray-300 leading-relaxed">
                                   You agree to use Tip App only for lawful purposes and in accordance with these Terms. You must not:
                                   <ul className="list-disc list-inside text-gray-300 space-y-2 my-4">
                                        <li>Use Tip App for money laundering, illegal gambling, or fraudulent purposes;</li>
                                        <li>Attempt to reverse, dispute, or charge back legitimate payments;</li>
                                        <li>Create multiple or fake accounts;</li>
                                        <li>Interfere with the Platform’s functionality or attempt unauthorized access.</li>
                                   </ul>
                              </p>
                              <p className="text-gray-300 leading-relaxed">
                                   Violation of these rules may result in suspension or termination of your account.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">8. Withdrawals and Availability of Funds</h2>
                              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                                   <li>Stripe may hold funds temporarily for verification, compliance, or processing reasons.</li>
                                   <li>Tip App does not control Stripe’s payout timing and cannot guarantee exact withdrawal dates.</li>
                                   <li>Service Providers are responsible for ensuring that their Stripe account is active and verified to receive funds. </li>
                                   <li>If a payout fails (for example, due to an invalid bank account), the funds will remain with Stripe until the issue is resolved. </li>
                              </ul>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">9. Refunds</h2>
                              <p className="text-gray-300 leading-relaxed">
                                   Tips sent through Tip App are non-refundable. However, in rare cases of confirmed fraud, duplicate transactions, or unauthorized use, Tip App and Stripe may assist in processing a refund at their discretion.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">10. Data & Privacy</h2>
                              <p className="text-gray-300 leading-relaxed">
                                   Tip App respects your privacy and is committed to protecting your personal data.
                              </p>
                              <ul className="list-disc list-inside text-gray-300 space-y-2 my-4">
                                   <li>We do not store or process your payment card details. All transactions are handled securely by Stripe. </li>
                                   <li>We may collect basic information such as name, email, and account details to provide our services. </li>
                                   <li>We may collect basic information such as name, email, and account details to provide our services. </li>
                                   <li>For details on how Stripe handles data, please visit <span><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a></span>. </li>
                              </ul>
                              <p className="text-gray-300 leading-relaxed">
                                   A full Privacy Policy will be published separately on our website.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">11. Limitation of Liability</h2>
                              <p className="text-gray-300 leading-relaxed">
                                   Tip App provides the Platform on an “as is” and “as available” basis. We make no warranties, express or implied, regarding uninterrupted access, accuracy, or suitability for a particular purpose.
                              </p>
                              <p className="text-gray-300 leading-relaxed">
                                   To the maximum extent permitted by law:
                              </p>
                              <ul className="list-disc list-inside text-gray-300 space-y-2 my-4">
                                   <li>Tip App is not liable for any loss, damage, or claim resulting from payment delays, errors, or issues caused by Stripe or other third parties.</li>
                                   <li> Tip App is not responsible for disputes between Tippers and Service Providers. </li>
                              </ul>
                              <p className="text-gray-300 leading-relaxed">
                                   Your sole remedy for any issue is to stop using the Platform.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">12. Account Termination</h2>
                              <p className="text-gray-300 leading-relaxed">
                                   We may suspend or terminate access to Tip App if you violate these Terms, engage in fraudulent activity, or misuse the Platform. You may also close your account at any time by contacting support@tiptapthetippingapp.com.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">13. Modifications to the Terms</h2>
                              <p className="text-gray-300 leading-relaxed">
                                   We may update these Terms from time to time. Changes will take effect once posted on our website or app. Your continued use of Tip App after changes means you accept the updated Terms.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">14. Governing Law</h2>
                              <p className="text-gray-300 leading-relaxed">
                                   These Terms are governed by and interpreted in accordance with the laws of England, without regard to its conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts located in England and Wales.
                              </p>
                         </section>

                         <section className="mb-8">
                              <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Us</h2>
                              <p className="text-gray-300 leading-relaxed">
                                   If you have any questions or concerns about these Terms, please contact: <br /> Email: support@tiptapthetippingapp.com
                              </p>
                         </section>

                    </div>
               </div>
          </main>
     )
}
