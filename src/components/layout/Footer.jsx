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
          <footer className="border-t border-purple-500/20 py-12 bottom-0">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                         {/* Logo */}
                         <div className="flex items-center justify-center md:justify-start">
                              <div className="w-20 h-20 flex items-center justify-center">
                                   <img src="/src/assets/images/Original_Logo.svg" alt="Tip App Logo" className="w-full h-full" />
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
                    <div className="border-t border-purple-500/20 pt-8">
                         {/* Copyright */}
                         <p className="text-center text-gray-500 text-sm">
                              © 2025 TipTapp - All rights reserved
                         </p>
                    </div>
               </div>
          </footer>
     )
}
