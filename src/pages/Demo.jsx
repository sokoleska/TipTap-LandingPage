'use client'

export default function Demo() {
     return (
          <main className="min-h-[90vh] pt-20">
               <div className="max-w-4xl mx-auto px-4">
                    {/* Page Title */}
                    <div className="text-center mb-12">
                         <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                              Video Demo
                         </h1>
                         <p className="text-lg text-[#C9C3FF]">
                              Watch how TipTapp works
                         </p>
                    </div>

                    {/* Video Container */}
                    <div className="rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-2xl aspect-video bg-black">
                         <video
                              controls
                              className="w-full h-full"
                              poster="/video-demo-poster.jpg"
                         >
                              <source src="src/assets/videos/demo-video.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                         </video>
                    </div>

                    {/* Description */}
                    <div className="mt-12 text-center">
                         <p className="text-[#C9C3FF] text-lg max-w-2xl mx-auto">
                              Experience how easy it is to send tips instantly, track your earnings, and manage your service as a provider. All in one app.
                         </p>
                    </div>
               </div>
          </main>
     )
}
