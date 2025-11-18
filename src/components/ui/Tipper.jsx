export default function Tipper() {
     const tipper = {
          title: 'Appreciate great service in a tap.',
          description:
               'Ana starts her shift. Most people want to tip her but don’t carry cash. With TipApp, they scan her QR code and send a quick tip — now she never misses a moment of appreciation.',
          image: 'src/assets/images/Review.png',
          bgColor: 'from-blue-600 to-blue-800'
     }

     return (
          <div class="mx-auto overflow-hidden bg-[#3a7cfd]/30 border-2 border-[#b8f3ff] rounded-[50px] h-[557px]
          shadow-[0_0_15px_6px_rgba(184,243,255,0.5)]
          ">
               <div class="md:flex h-full">
                    <div class="p-20 items-center flex flex-col justify-center">
                         <div class="px-28 lg:px-10 md:px-10 sm:px-0 text-4xl font-bold text-center text-[#b8f3ff]">
                              {tipper.title}
                         </div>
                         <p class="mt-10 text-white text-left text-xl leading-relaxed font-normal">
                              There are many people who work hard but are not rewarded enough for it. <br /> <br />
                              We live in a digital age where a large part of the population doesn’t use cash, so when you want to tip someone who truly deserves it, things become complicated. <br /> <br />
                              That’s why <b>TipTapp</b> is here. Fast, easy, and secure - by scanning the service provider’s QR code, and with the help of Stripe, you can leave a tip
                         </p>
                    </div>
                    <div class="md:shrink-0">
                         <img
                              class="h-full w-full object-cover md:h-full md:w-full"
                              src={tipper.image}
                              alt="Tips Balance"
                         />
                    </div>
               </div>
          </div>
     );
}