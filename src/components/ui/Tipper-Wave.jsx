import { useState } from "react";
import BlueWave from "./BlueWave";
import { motion, AnimatePresence } from "framer-motion";

function Bubble({ children, className = "" }) {
     return (
          <div
               className={
                    "bg-[#111133] text-white " +
                    "flex flex-col items-center justify-center text-center py-6 px-3 md:p-6 " +
                    "border border-[#3A7CFD]/70 shadow-[0_0_20px_0_#3A7CFD] " +
                    className
               }
          >
               <p className="text-sm leading-relaxed ">{children}</p>
          </div>
     );
}

const bubbleVariants = {
     hidden: { opacity: 0, scale: 0.9 },
     show: { opacity: 1, scale: 1 },
     exit: { opacity: 0, scale: 0.9 },
};

export default function Tipper() {
     const [open, setOpen] = useState(null); // "left" | "middle" | "right" | null
     const toggle = (id) => setOpen((curr) => (curr === id ? null : id));

     return (
          <div className="min-h-[60vh] mx-auto relative">
               {/* Neon wave line behind the icons */}
               <BlueWave />
               <div className="flex flex-col justify-center md:items-center z-10 gap-2 h-full 
                    md:flex-row md:justify-between md:gap-0 ">

                    {/* LEFT */}
                    <div className="relative flex justify-start"
                         onClick={() => toggle("left")}>

                         {/* ICON + DIV */}
                         <div className={`w-[90px] sm:min-w-[160px] md:w-[220px] flex flex-col items-center text-center cursor-pointer
                              ${open && open !== "left" ? "opacity-40" : "opacity-100"}`}>

                              <img src="src/assets/icons/TP1.svg"
                                   alt="Happy Customer"
                                   className="w-[80px] h-[80px] sm:w-[113px] sm:h-[113px]" />

                              <h3 className="text-base sm:text-xl [text-shadow:0_0_28px_#3A7CFD]">
                                   A customer has a great experience
                              </h3>
                         </div>

                         {/* BUBBLE */}
                         {/* >MD */}
                         <div className="hidden md:block">
                              <AnimatePresence>
                                   {open === "left" && (
                                        <motion.div
                                             initial="hidden"
                                             animate="show"
                                             exit="exit"
                                             variants={bubbleVariants}
                                             transition={{ duration: 0.28, ease: "easeOut" }}
                                             className="absolute left-full">
                                             <Bubble className="h-[200px] w-[180px] md:w-[300px] md:h-[115px] lg:w-[250px] md:min-w-72 lg:h-[120px] lg:min-w-[330px] rounded-full -top-4">
                                                  The customer is satisfied with the service and wants to leave a tip. They can do this quickly thanks to the TipApp application.
                                             </Bubble>
                                        </motion.div>
                                   )}
                              </AnimatePresence>
                         </div>

                         {/* <MD */}
                         <div className={`md:hidden flex items-start bubble-anim ${open === "left" ? "show" : ""}`}>
                              <div className="flex">
                                   <Bubble className="h-[176px] max-w-[250px] sm:h-[140px] sm:w-[250px] rounded-full ml-5 -top-4">
                                        The customer is satisfied with the service and wants to leave a tip. They can do this quickly thanks to the TipApp application.
                                   </Bubble>
                              </div>
                         </div>
                    </div>

                    {/* MIDDLE */}
                    <div className="relative flex justify-end
                         md:justify-center md:items-center md:flex-col md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:pb-[60px]"
                         onClick={() => toggle("middle")}>

                         {/* BUBBLE */}
                         <div className="hidden md:block">
                              <AnimatePresence>
                                   {open === "middle" && (
                                        <motion.div
                                             initial="hidden"
                                             animate="show"
                                             exit="exit"
                                             variants={bubbleVariants}
                                             transition={{ duration: 0.28, ease: "easeOut" }}
                                             className="absolute md:static"
                                        >
                                             <Bubble className="h-[200px] w-[180px] md:h-[141px] max-w-52 rounded-full md:rounded-2xl mr-5 md:mr-0 md:mb-5 -top-4">
                                                  They scan the QR code, where they can see information such as the worker's photo and name.
                                             </Bubble>
                                        </motion.div>
                                   )}
                              </AnimatePresence>
                         </div>

                         {/* <MD */}
                         <div className={`md:hidden flex items-start bubble-anim ${open === "middle" ? "show" : ""}`}>
                              <div className="flex">
                                   <Bubble className="max-h-[160px] max-w-[250px] sm:h-[140px] sm:w-[250px] rounded-full mr-5 -top-4">
                                        They scan the QR code, where they can see information such as the worker's photo and name.
                                   </Bubble>
                              </div>
                         </div>

                         {/* ICON + DIV */}
                         <div className={`w-[90px] sm:min-w-[160px] md:w-[300px] flex flex-col items-center text-center cursor-pointer
                              ${open && open !== "middle" ? "opacity-40" : "opacity-100"}`}>
                              <img
                                   src="src/assets/icons/TP2.svg"
                                   alt="Earnings"
                                   className="w-[80px] h-[80px] sm:w-[113px] sm:h-[113px]" />
                              <h3 className="text-base sm:text-xl [text-shadow:0_0_28px_#3A7CFD]">
                                   They scan the QR code
                              </h3>
                         </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-start"
                         onClick={() => toggle("right")}>

                         {/* ICON + DIV */}
                         <div className={`w-[90px] sm:min-w-[160px] md:w-[250px] flex flex-col items-center text-center cursor-pointer
                              ${open && open !== "right" ? "opacity-40" : "opacity-100"}`}>

                              <img
                                   src="src/assets/icons/TP3.svg"
                                   alt="QR code"
                                   className="w-[80px] h-[80px] sm:w-[113px] sm:h-[113px]" />
                              <h3 className="text-base sm:text-xl [text-shadow:0_0_28px_#3A7CFD]">
                                   They leave a quick tip and a positive review
                              </h3>
                         </div>

                         {/* <MD */}
                         <div className={`md:hidden flex items-start bubble-anim ${open === "right" ? "show" : ""}`}>
                              <div className="flex">
                                   <Bubble className="max-h-[200px] max-w-[250px] sm:h-[140px] sm:w-[250px] rounded-full ml-5 md:ml-0 -top-4">
                                        The tip is in Paul's account within a second. He is happy with what he has earned and satisfied.

                                   </Bubble>
                              </div>
                         </div>

                         {/* BUBBLE */}
                         <div className="hidden md:block">
                              <AnimatePresence>
                                   {open === "right" && (
                                        <motion.div
                                             initial="hidden"
                                             animate="show"
                                             exit="exit"
                                             variants={bubbleVariants}
                                             transition={{ duration: 0.28, ease: "easeOut" }}
                                             className="absolute right-full"
                                        >
                                             <Bubble className="h-[200px] w-[180px] md:w-[300px] md:h-[115px] md:min-w-72 lg:h-[120px] lg:min-w-[330px] lg:w-[250px] rounded-full -top-4">
                                                  They quickly and easily enter feedback about the service, choose whether they want to remain anonymous, and select the tip amount.
                                             </Bubble>
                                        </motion.div>
                                   )}
                              </AnimatePresence>
                         </div>
                    </div>
               </div>
          </div>
     )
}