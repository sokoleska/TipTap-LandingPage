import CardFeature from "../ui/card-feature";

const features = [
     {
          title: 'Multi-currency support',
          icon: 'src/assets/icons/Multi-currency.png',
     },
     {
          title: 'Instant payouts',
          icon: 'src/assets/icons/Light.png',
     },
     {
          title: 'Secure payments via Stripe',
          icon: 'src/assets/icons/Secure.png',
     },
     {
          title: 'Track all your earnings in one dashboard',
          icon: 'src/assets/icons/Track.png',
     },
     {
          title: 'Support from anywhere',
          icon: 'src/assets/icons/Global-support.png',
     },
];

export default function KeyFeatures() {
     return (
          <section id="key-features" className="py-20 px-10 md:py-24 md:px-8">
               {/* Section header */}
               <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">Key Features</h2>
                    <p className="text-[#C9C3FF] text-sm sm:text-base md:text-lg">Everything you need to send and receive tips effortlessly</p>
               </div>

               {/* Features grid with staggered layout */}
               <div className="max-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                         {/* Top row - 3 cards */}
                         <CardFeature title={features[0].title} icon={features[0].icon} />
                         <CardFeature title={features[1].title} icon={features[1].icon} />
                         <CardFeature title={features[2].title} icon={features[2].icon} />
                    </div>

                    {/* Bottom row - 2 cards centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-2xl mx-auto md:max-w-none md:flex md:justify-center">
                         <div className="md:w-80">
                              <CardFeature title={features[3].title} icon={features[3].icon} />
                         </div>
                         <div className="md:w-80">
                              <CardFeature title={features[4].title} icon={features[4].icon} />
                         </div>
                    </div>
               </div>
          </section>
     );
}