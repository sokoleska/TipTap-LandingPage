'use client';

import { Star } from 'lucide-react';
import ReviewCard from '../ui/Card-Review';

const reviews = [
     {
          id: 1,
          name: 'Jacqueline K.',
          title: 'Business Advisor',
          avatar: '/src/assets/avatars/Jacqueline_Kressner.png',
          earnings: '€787 this month',
          rating: 5,
          quote: 'Tipping is the most important way to show gratitude and thanks to those that serve us but usually go under the radar... As we move into more & more of a cashless society, cashless Tipping services will become the norm and support our communities and societies. Giving thanks with a tip, regardless of size, is a gift. Tip App the Tipping App epitomises this in a seamless and efficient way. Enjoy!',
          provider: 'stripe',
     },
     {
          id: 2,
          name: 'Martina S.',
          title: 'Designer & Developer',
          avatar: '/src/assets/avatars/Martina_Sokoleska.jpg',
          earnings: '€559 this month',
          rating: 5,
          quote: 'The world is changing very quickly. After COVID-19, the digitalization process accelerated at full speed, and cash has begun turning into digital money. That’s why, when I first heard about the idea behind this project, it felt promising and truly inspiring. We are making a meaningful contribution to this digital transformation, and I’m glad to be part of it.',
          provider: 'stripe',
     },
     {
          id: 3,
          name: 'Stefan HE.',
          title: 'Developer',
          avatar: '/src/assets/avatars/Stefan_HE.jpg',
          earnings: '€787 this month',
          rating: 5,
          quote: 'In many workplaces, tips are collected but not always distributed fairly, and customers often have no insight into where their tip actually ends up. A digital tipping app creates a clear and trustworthy path between the person who gives and the person who earns. It ensures that every contribution reaches the right hands, without confusion or middle-steps. By introducing transparency into an area that has long relied on guesswork, this kind of app empowers workers, reassures customers, and sets a new standard for fairness in the service industry.',
          provider: 'stripe',
     },
]

export default function Reviews() {
     return (
          <section className="py-20 px-10 md:py-24 md:px-8">
               <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                              Why do you need this app?
                         </h2>
                         <p className="text-[#c9c3ff] text-sm sm:text-base md:text-lg">
                              Real reviews from the people behind the success of TipApp.
                         </p>
                    </div>

                    {/* Review Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {reviews.map((review) => (
                              <ReviewCard key={review.id} {...review} />
                         ))}
                    </div>
               </div>
          </section>
     );
}
