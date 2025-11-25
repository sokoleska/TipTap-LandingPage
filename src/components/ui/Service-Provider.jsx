export default function ServiceProvider() {
     const serviceProvider = {
          title: 'Receive instant payments with no hassle.',
          description:
               'After hard work, everyone deserves a reward. As a service provider, I want to receive tips quickly and easily, without anyone having insight into it. That’s where Tip App comes in. Everything happens so simply and effortlessly. I generate a QR code that tippers scan, and the tip appears on my screen in an instant. That’s exactly what I need.',
          image: 'src/assets/images/Tips_Balance.png',
          bgColor: 'from-blue-600 to-blue-800'
     }

     return (
          <div className="mx-auto overflow-hidden bg-[#8b3dff]/30 border-2 border-[#b8f3ff] rounded-[32px] md:rounded-[50px] h-auto md:h-[557px]
          shadow-[0_0_15px_6px_rgba(184,243,255,0.5)]
          ">
               <div className="md:flex h-full">
                    <div className="hidden md:block md:shrink-0">
                         <img
                              className="h-full w-full object-cover md:h-full md:w-full"
                              src={serviceProvider.image}
                              alt="Tips Balance"
                         />
                    </div>

                    <div className="lg:p-20 md:p-10 p-5 items-center flex flex-col justify-center">
                         <div className="
                              px-5 md:px-10 
                              md:text-4xl text-3xl 
                              leading-tight
                              font-bold text-center text-[#b8f3ff]">
                              {serviceProvider.title}
                         </div>
                         <p className="mt-10 text-white text-left md:text-xl text-lg leading-relaxed font-normal">
                              After hard work, everyone deserves a reward. <br /> <br />
                              As a service provider, I want to receive tips quickly and easily, without anyone having insight into it. That’s where <b>Tip App</b> comes in. <br /> <br />
                              Everything happens so simply and effortlessly. I generate a QR code that tippers scan, and the tip appears on my screen in an instant. That’s exactly what I need.
                         </p>
                    </div>
               </div>
          </div>
     );
}