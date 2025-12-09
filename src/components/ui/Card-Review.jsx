
export default function ReviewCard({
     id,
     name,
     title,
     avatar,
     earnings,
     rating,
     quote
}) {
     return (
          <div className="relative group" key={id}>
               {/* Card */}
               <div className="bg-[linear-gradient(45deg,_#3A7CFD_0%,_#8B3DFF_50%,_#FF4E4E_100%)] shadow-[0px_0px_40px_#3A35B3] rounded-[20px] p-6 md:p-8  transition-colors duration-300">

                    {/* Content */}
                    <div className="relative">
                         {/* Top row: Avatar, Name, Earnings */}
                         <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                   <img
                                        src={avatar || "/placeholder.svg"}
                                        alt={name}
                                        className="w-16 h-16 rounded-full"
                                   />
                                   <div>
                                        <h3 className="text-white font-semibold">{name}</h3>
                                        <p className="text-gray-200 text-sm">{title}</p>
                                        {/* Rating */}
                                        {/* 
                                             <div className="flex gap-1">
                                             {Array.from({ length: rating }).map((_, i) => (
                                                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                             ))}
                                             </div>
                                        */}
                                   </div>
                              </div>
                              {/* 
                                   <div className="bg-cyan-500 rounded-full px-3 py-1 text-sm font-medium text-white whitespace-nowrap">
                                   {earnings}
                                   </div>
                              */}
                         </div>


                         {/* Quote */}
                         <p className="text-gray-100 text-sm md:text-base leading-relaxed mb-6">
                              "{quote}"
                         </p>
                    </div>
               </div>
          </div>
     );
}
