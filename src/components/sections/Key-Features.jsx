import React from "react";
import Card from "../ui/Card";

const features = [
     {
          title: 'Multi-currency support',
          icon: 'src/assets/icons/v2-multi-currency.svg',
     },
     {
          title: 'Instant payouts',
          icon: 'src/assets/icons/v2-Light.svg',
     },
     {
          title: 'Secure payments via Stripe',
          icon: 'src/assets/icons/stripeLogo.webp',
     },
     {
          title: 'Track all your earnings in one dashboard',
          icon: 'src/assets/icons/v2-Dashboard.svg',
     },
     {
          title: 'Support from anywhere',
          icon: 'src/assets/icons/v2-Earth.svg',
     },
]

export default function KeyFeatures() {
     return (
          <section id="key-features" className="py-20 px-4 sm:px-6 md:py-24 md:px-8 lg:px-8">
               {/* Section header */}
               <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">Key Features</h2>
                    <p className="text-[#B4C2E8] text-sm sm:text-base md:text-lg">Everything you need to know.</p>
               </div>

               {/* Features grid with staggered layout */}
               <div className="max-w-full">
                    <div className="cursor-pointer justify-between items-center gap-10 
                    flex flex-col mb-10
                    md:flex-row md:mb-20">
                         <Card key={0} icon={features[0].icon} title={features[0].title} />
                         <Card key={1} icon={features[1].icon} title={features[1].title} />
                         <Card key={2} icon={features[2].icon} title={features[2].title} />
                    </div>
                    <div className="cursor-pointer justify-evenly items-center gap-10
                         flex flex-col 
                         md:flex-row">
                         <Card key={3} icon={features[3].icon} title={features[3].title} />
                         <Card key={4} icon={features[4].icon} title={features[4].title} />
                    </div>
               </div>
          </section>
     );
}