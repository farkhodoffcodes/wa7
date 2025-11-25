import React from 'react';

interface TechFrameProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  rightLabel?: string;
  variant?: 'solid' | 'scan' | 'grid';
  onClose?: () => void;
}

const TechFrame: React.FC<TechFrameProps> = ({ children, className = '', title, rightLabel, variant = 'solid', onClose }) => {
  return (
    <div className={`relative border-2 border-[#8B0000] bg-black/80 ${className}`}>
      {/* Top Bar */}
      {(title || rightLabel || onClose) && (
        <div className="flex justify-between items-center bg-[#330000] border-b border-[#8B0000] p-1 px-2 h-8">
          <div className="font-orbitron text-xs font-bold tracking-widest text-[#ff0000]">
            {title?.toUpperCase()}
          </div>
          <div className="flex items-center space-x-4">
            {rightLabel && (
              <span className="font-mono-tech text-[10px] text-[#ff4444] uppercase">{rightLabel}</span>
            )}
            {onClose && (
              <button onClick={onClose} className="text-[#ff0000] hover:text-white font-bold text-xs">
                [X]
              </button>
            )}
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="relative h-full w-full">
         {/* Decorative Grid Background if requested */}
         {variant === 'grid' && (
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#ff0000 1px, transparent 1px), linear-gradient(90deg, #ff0000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
         )}
        {children}
      </div>

      {/* Corner Accents */}
      <div className="absolute -top-[2px] -left-[2px] w-2 h-2 border-l-2 border-t-2 border-[#ff0000]"></div>
      <div className="absolute -top-[2px] -right-[2px] w-2 h-2 border-r-2 border-t-2 border-[#ff0000]"></div>
      <div className="absolute -bottom-[2px] -left-[2px] w-2 h-2 border-l-2 border-b-2 border-[#ff0000]"></div>
      <div className="absolute -bottom-[2px] -right-[2px] w-2 h-2 border-r-2 border-b-2 border-[#ff0000]"></div>
    </div>
  );
};

export default TechFrame;