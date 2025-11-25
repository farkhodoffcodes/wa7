import React from 'react';
import { NavItem } from '../types';

interface NavigationProps {
  items: NavItem[];
  currentId: string;
  onSelect: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ items, currentId, onSelect }) => {
  return (
    <div className="w-full flex items-center bg-[#1a0000] border-t-2 border-b-2 border-[#550000] h-8 relative overflow-hidden">
        {/* "Current Area" Indicator */}
        <div className="flex items-center px-4 bg-[#ff0000] text-black font-bold text-xs h-full italic transform -skew-x-12 ml-[-10px]">
           <div className="transform skew-x-12 flex items-center gap-2 pl-4">
               <span className="w-2 h-2 border border-black bg-transparent"></span>
               CURRENT AREA
           </div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 flex justify-between px-4">
            {items.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={`
                        relative px-4 h-full flex items-center justify-center
                        font-orbitron text-xs tracking-wider font-bold uppercase
                        transition-colors duration-200
                        ${currentId === item.id ? 'text-white' : 'text-[#880000] hover:text-[#ff0000]'}
                    `}
                >
                    {item.label}
                    {currentId === item.id && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff0000] shadow-[0_0_5px_#ff0000]"></div>
                    )}
                </button>
            ))}
        </div>
        
        <div className="hidden md:block absolute right-0 top-0 h-full w-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiM1NTAwMDAiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmYwMDAwIi8+PC9zdmc+')] opacity-20"></div>
    </div>
  );
};

export default Navigation;