export default function Card({ icon, title }) {
     return (
          <div className="bg-gradient-to-b from-[#3A7CFD] to-[#3A35B3] p-[3px] rounded-2xl shadow-[0_0_15px_2px_rgba(122,181,225,0.3)] w-[300px] hover:shadow-[0_0_25px_5px_rgba(122,181,225,0.5)] transition-all">
               <div className="flex flex-row lg:gap-2 justify-center items-center w-full rounded-2xl h-28 md:h-32 bg-[#0D0D25] font-normal text-xl md:text-2xl md:p-3 lg:px-5 p-5 text-center hover:bg-transparent transition-all">
                    <img src={icon} alt={title} className="w-14"/>
                    <h3>{title}</h3>
               </div>
          </div>
     );
}