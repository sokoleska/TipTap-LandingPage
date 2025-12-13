export default function Footer() {
     const footerLinks = {
          product: [
               { label: 'Features', href: '#' },
               { label: 'Security', href: '#' },
          ],
          company: [
               { label: 'About', href: '/about' },
               { label: 'Contact', href: '/contact' },
          ],
          support: [
               // { label: 'FAQ', href: '/faq' },
               { label: 'Help', href: '/help' },
               { label: 'Terms & Conditions', href: '/terms' }
          ],
          social: [
               { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tip-tapp-the-tipping-app/' },
               // { label: 'X', href: '#' },
          ],
     }

     return (
          <footer className="bg-gradient-to-b from-[#3A35B3]/0 to-[#8B1E27]/40 py-12 bottom-0">
               <div className="max-w-7xl mx-auto px-10 md:px-8">
                    {/* Footer Content */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
                         {/* Logo */}
                         <div className="
                              col-span-2 md:col-span-1
                              flex items-center justify-center md:justify-start">
                              <div className="w-20 h-20 flex items-center justify-center">
                                   <a href="#hero" className="w-full h-full">
                                        <img src="/NewLogo-Border.svg"
                                             alt="Tip Tapp Logo"
                                             className="w-full h-full cursor-pointer" />
                                   </a>
                              </div>
                         </div>

                         {/* Product Links */}
                         <div>
                              <h3 className="text-white font-semibold mb-4">Product</h3>
                              <ul className="space-y-2">
                                   {footerLinks.product.map((link) => (
                                        <li key={link.label}>
                                             <a
                                                  href={link.href}
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  {link.label}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Company Links */}
                         <div>
                              <h3 className="text-white font-semibold mb-4">Company</h3>
                              <ul className="space-y-2">
                                   {footerLinks.company.map((link) => (
                                        <li key={link.label}>
                                             <a
                                                  href={link.href}
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  {link.label}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Support Links */}
                         <div>
                              <h3 className="text-white font-semibold mb-4">Support</h3>
                              <ul className="space-y-2">
                                   {footerLinks.support.map((link) => (
                                        <li key={link.label}>
                                             <a
                                                  href={link.href}
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  {link.label}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Social Links */}
                         <div>
                              <h3 className="text-white font-semibold mb-4">Social</h3>
                              <ul className="space-y-2">
                                   {footerLinks.social.map((link) => (
                                        <li key={link.label}>
                                             <a
                                                  href={link.href}
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  {link.label}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>



                    {/* Divider */}
                    <div className="border-t border-[#7AB5FF]/30 pt-8">
                         {/* Copyright */}
                         <p className="text-center text-gray-500 text-sm">
                              © 2025 TipApp - All rights reserved
                         </p>
                    </div>
               </div>
          </footer>
     )
}
