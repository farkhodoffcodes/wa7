import React from 'react';
import TechFrame from './TechFrame';

const CALENDAR_DATA = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  isCurrentMonth: true,
  hasEvent: [4, 10, 17].includes(i + 1)
}));

export const CalendarWidget: React.FC = () => {
  return (
    <TechFrame title="April" rightLabel="4.10.17" className="h-full">
      <div className="p-2 h-full flex flex-col">
        <div className="flex justify-between text-[#880000] text-[10px] font-bold mb-1 font-orbitron">
           <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
        </div>
        <div className="grid grid-cols-7 gap-1 flex-1 content-start">
           {/* Padding for start of month */}
           <div className="col-span-6"></div> 
           <div className="text-center text-[10px] border border-[#330000] text-[#550000]">1</div>
           
           {CALENDAR_DATA.map((d) => (
             <div 
               key={d.day} 
               className={`
                 aspect-square flex items-center justify-center text-[10px] border
                 ${d.hasEvent ? 'border-[#ff0000] text-white bg-[#330000] shadow-[0_0_5px_rgba(255,0,0,0.5)]' : 'border-[#330000] text-[#880000]'}
                 hover:bg-[#ff0000] hover:text-black cursor-pointer transition-colors
               `}
             >
               {d.day}
             </div>
           ))}
        </div>
      </div>
    </TechFrame>
  );
};

export const MailingList: React.FC = () => {
    return (
        <TechFrame title="Mailing List" className="w-full">
            <div className="p-2 flex flex-col gap-1">
               <div className="flex w-full border border-[#550000] bg-[#1a0000] p-1">
                   <input type="email" placeholder="enter your email address" className="bg-transparent border-none outline-none text-[#ff0000] text-xs w-full font-mono-tech placeholder-[#550000]" />
                   <button className="bg-[#550000] text-black px-2 text-xs font-bold hover:bg-[#ff0000]">SEND</button>
               </div>
            </div>
        </TechFrame>
    )
}

export const InfoWidget: React.FC = () => {
    return (
        <div className="h-full flex flex-col justify-between">
             <div className="mb-2">
                 <h2 className="font-orbitron text-2xl font-bold text-[#ff0000] leading-none tracking-tighter">WA007.COM</h2>
                 <p className="text-[#880000] text-[10px] tracking-widest">WEBAGENT007 / VERSION 3.0 / RETALIATION</p>
             </div>
             <div className="flex-1 border-t border-b border-[#330000] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain opacity-50 filter sepia saturate-200 hue-rotate-[-50deg] brightness-50 contrast-200">
                {/* Map placeholder */}
             </div>
             <div className="mt-2">
                <MailingList />
             </div>
        </div>
    )
}