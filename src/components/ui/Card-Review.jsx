
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
               <div className="bg-[linear-gradient(134.73deg,_#1c0f3a_-0.47%,_#24144f_50.24%,_#2d1968_100.47%)] shadow-[0px_0px_30px_0_rgba(125,79,255,0.35)] rounded-[20px] p-6 md:p-8  transition-colors duration-300">

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
                                        <p className="text-gray-400 text-sm">{title}</p>
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
                         <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                              "{quote}"
                         </p>
                    </div>
               </div>
          </div>
     );
}
