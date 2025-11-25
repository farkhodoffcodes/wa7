import React, { useState } from 'react';
import Navigation from './components/Navigation';
import TechFrame from './components/TechFrame';
import { CalendarWidget, InfoWidget } from './components/Widgets';
import ChatConsole from './components/ChatConsole';
import { NavItem } from './types';
import { ScanLine, Crosshair, Biohazard, CircuitBoard, Zap, Shield, Radio } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'HOME' },
  { id: 'agents', label: 'THE AGENTS' },
  { id: 'portfolio', label: 'PORTFOLIO' },
  { id: 'services', label: 'SERVICES' },
  { id: 'arsenal', label: 'ARSENAL' },
  { id: 'contact', label: 'CONTACT' },
  { id: 'shop', label: 'THE SHOP' },
];

function App() {
  const [currentArea, setCurrentArea] = useState('home');

  return (
    <div className="min-h-screen bg-[#050000] text-[#ff0000] p-4 flex justify-center selection:bg-[#ff0000] selection:text-black">
      <div className="max-w-[1024px] w-full relative">
        {/* Background Grid Lines */}
        <div className="fixed inset-0 pointer-events-none z-0" 
             style={{ 
               backgroundImage: `linear-gradient(#110000 1px, transparent 1px), linear-gradient(90deg, #110000 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* Scanlines Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-50"></div>

        {/* --- HEADER SECTION --- */}
        <header className="relative z-10 mb-2 flex justify-between items-end h-24">
          <div className="flex items-end">
             {/* Logo Construction */}
             <div className="relative group">
                 <h1 className="font-orbitron text-6xl font-black italic tracking-tighter text-[#ff0000] drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                   WA<span className="text-[#ffaa00]">007</span>
                 </h1>
                 {/* Decorative guns/pipes */}
                 <div className="absolute -left-8 top-0 h-full w-8 border-r-4 border-[#ffaa00] transform skew-x-12 opacity-80"></div>
                 <div className="absolute -right-8 top-0 h-full w-8 border-l-4 border-[#ffaa00] transform -skew-x-12 opacity-80"></div>
             </div>
          </div>
          
          {/* Top Tech Stats */}
          <div className="flex flex-col items-end text-[10px] font-mono-tech space-y-1 text-[#880000]">
             <div className="flex items-center gap-2 border border-[#330000] px-2 py-0.5 bg-black/50">
                <span>CONNECTION</span>
                <div className="flex gap-1">
                   <span className="w-1 h-2 bg-[#330000]"></span>
                   <span className="w-1 h-2 bg-[#550000]"></span>
                   <span className="w-1 h-2 bg-[#ff0000]"></span>
                </div>
                <span className="text-[#ff0000]">HIGH</span>
             </div>
             <div className="flex items-center gap-4">
                 <div className="flex items-center gap-1 cursor-pointer hover:text-[#ff0000]">
                    <Radio size={12} /> OPEN MEDIA PLAYER
                 </div>
                 <div className="flex items-center gap-1 cursor-pointer hover:text-[#ff0000]">
                    <Shield size={12} /> PIMPN LINKAGE
                 </div>
             </div>
          </div>
        </header>


        {/* --- HERO SECTION --- */}
        <main className="relative z-10 grid grid-cols-12 gap-2 h-[450px] mb-2">
           
           {/* Left Sidebar: Upgrades */}
           <div className="col-span-3 h-full flex flex-col gap-2">
              <TechFrame title="WA007 UPGRADES" className="h-full bg-[#0a0000]" onClose={() => {}}>
                  <div className="grid grid-cols-2 gap-2 p-2 h-64">
                      {/* Upgrade Icons */}
                      {['ARMOR', 'SIGHT', 'POWER', 'SPEED'].map((item, idx) => (
                          <div key={idx} className="aspect-square border border-[#330000] bg-black hover:bg-[#1a0000] hover:border-[#ff0000] cursor-pointer group flex items-center justify-center relative overflow-hidden">
                              <div className="absolute inset-0 bg-[#ff0000] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                              {idx === 0 && <Shield className="text-[#550000] group-hover:text-[#ff0000]" size={32} />}
                              {idx === 1 && <Crosshair className="text-[#550000] group-hover:text-[#ff0000]" size={32} />}
                              {idx === 2 && <Zap className="text-[#550000] group-hover:text-[#ff0000]" size={32} />}
                              {idx === 3 && <CircuitBoard className="text-[#550000] group-hover:text-[#ff0000]" size={32} />}
                          </div>
                      ))}
                  </div>
                  <div className="p-2 mt-4">
                      <div className="text-[10px] font-mono-tech text-[#ff4444] bg-[#1a0000] p-1 mb-2">
                          SELECT AN UPGRADE FROM ABOVE.
                      </div>
                      <div className="h-2 w-full bg-[#110000] overflow-hidden">
                          <div className="h-full bg-[#ff0000] w-2/3 animate-pulse"></div>
                      </div>
                  </div>
              </TechFrame>
           </div>

           {/* Center: Main Visual */}
           <div className="col-span-6 h-full relative border-2 border-[#8B0000] overflow-hidden bg-[#050000]">
               <img 
                 src="https://picsum.photos/seed/cyberpunk/600/450" 
                 alt="Main Character" 
                 className="w-full h-full object-cover opacity-80 mix-blend-screen filter contrast-125 hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
               
               {/* Overlay Graphics */}
               <div className="absolute top-10 right-10">
                  <div className="w-16 h-16 border-2 border-[#ff0000] rounded-full animate-spin-slow opacity-50 border-dashed"></div>
               </div>
               
               <div className="absolute bottom-4 left-4 p-4 max-w-xs">
                   <h2 className="font-orbitron text-2xl font-bold text-white shadow-black drop-shadow-md">
                       AGENT <span className="text-[#ff0000]">ACTIVE</span>
                   </h2>
                   <p className="text-xs text-gray-300 font-mono-tech mt-1 bg-black/50 p-1">
                       SYSTEMS OPTIMAL. WAITING FOR DIRECTIVES.
                   </p>
               </div>
           </div>

           {/* Right Sidebar: Featured */}
           <div className="col-span-3 h-full flex flex-col">
               <TechFrame title="FEATURED PROJECT" onClose={() => {}} className="flex-1 bg-[#0a0000]">
                   <div className="p-2 relative h-48 border-b border-[#330000]">
                       <img src="https://picsum.photos/seed/tech/300/200" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all" />
                       <div className="absolute top-2 right-2 text-[#00ff00]">
                           <Biohazard size={48} className="animate-pulse" />
                       </div>
                   </div>
                   <div className="p-4">
                       <h3 className="font-orbitron text-xl font-bold mb-1">WA007 LABS</h3>
                       <p className="text-[10px] text-[#ff4444] text-right">LABS.WA007.COM</p>
                       <div className="mt-8 space-y-2">
                           <button className="w-full bg-[#330000] hover:bg-[#ff0000] text-white text-xs font-bold py-1 px-2 border border-[#550000] flex justify-between items-center group">
                               <span>LAUNCH</span>
                               <span className="group-hover:translate-x-1 transition-transform">»</span>
                           </button>
                           <button className="w-full bg-[#110000] hover:bg-[#330000] text-[#888] hover:text-white text-xs font-bold py-1 px-2 border border-[#330000] flex justify-between items-center">
                               <span>VIEW PORTFOLIO</span>
                               <span>+</span>
                           </button>
                       </div>
                   </div>
               </TechFrame>
           </div>
        </main>


        {/* --- NAVIGATION BAR --- */}
        <div className="relative z-20 mb-2">
            <Navigation 
              items={NAV_ITEMS} 
              currentId={currentArea} 
              onSelect={setCurrentArea} 
            />
            <div className="absolute right-0 bottom-1 text-[10px] text-[#ff0000] font-mono-tech px-2">
                 // AGENTS: IN A 72 DPI BATTLEFIELD
            </div>
        </div>


        {/* --- BOTTOM WIDGETS --- */}
        <section className="relative z-10 grid grid-cols-12 gap-2 h-56">
            
            {/* Left: Calendar & List */}
            <div className="col-span-3 flex flex-col gap-2">
               <div className="flex-1">
                   <div className="bg-[#1a0000] border-t border-l border-r border-[#330000] p-1 flex justify-between items-center px-2">
                       <span className="text-[10px] text-[#ff0000]">10:01 PM</span>
                       <ScanLine size={12} className="text-[#550000]" />
                   </div>
                   <div className="flex h-full">
                       <div className="w-1/3 bg-[#0a0000] border border-[#330000] p-2 text-[9px] text-[#550000] leading-loose">
                           <div className="hover:text-[#ff0000] cursor-pointer">JANUARY</div>
                           <div className="hover:text-[#ff0000] cursor-pointer">FEBRUARY</div>
                           <div className="hover:text-[#ff0000] cursor-pointer">MARCH</div>
                           <div className="text-[#ff0000] font-bold">▶ APRIL</div>
                           <div className="hover:text-[#ff0000] cursor-pointer">MAY</div>
                           <div className="hover:text-[#ff0000] cursor-pointer">JUNE</div>
                       </div>
                       <div className="flex-1">
                           <CalendarWidget />
                       </div>
                   </div>
               </div>
            </div>

            {/* Middle: Shop / Arsenal Thumbnails */}
            <div className="col-span-5 grid grid-cols-2 gap-2">
                <TechFrame className="group cursor-pointer">
                    <img src="https://picsum.photos/seed/car/300/200" className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="p-2 border-t-2 border-[#330000] bg-black">
                        <div className="text-right font-orbitron font-bold text-lg mb-1">WA007 SHOP</div>
                        <div className="flex justify-end">
                            <button className="bg-[#550000] text-black text-[10px] px-2 py-0.5 hover:bg-[#ff0000]">LAUNCH SHOP</button>
                        </div>
                    </div>
                </TechFrame>
                
                <TechFrame className="group cursor-pointer">
                    <img src="https://picsum.photos/seed/fashion/300/200" className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity filter sepia-[.5] hue-rotate-[-50deg]" />
                    <div className="p-2 border-t-2 border-[#330000] bg-black">
                        <div className="text-right font-orbitron font-bold text-lg mb-1">ARSENAL</div>
                         <div className="flex justify-end">
                            <button className="bg-[#550000] text-black text-[10px] px-2 py-0.5 hover:bg-[#ff0000]">VIEW ARSENAL</button>
                        </div>
                    </div>
                </TechFrame>
            </div>

            {/* Right: Info & Gemini Chat */}
            <div className="col-span-4 flex flex-col gap-2">
                {currentArea === 'contact' ? (
                   <ChatConsole />
                ) : (
                   <TechFrame className="h-full bg-black">
                      <div className="p-4 h-full">
                         <InfoWidget />
                      </div>
                   </TechFrame>
                )}
            </div>

        </section>

        {/* --- FOOTER --- */}
        <footer className="relative z-10 mt-2 border-t-[3px] border-[#880000] bg-[#1a0000] h-8 flex items-center justify-between px-2 overflow-hidden">
            {/* Striped Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 5px, #ff0000 5px, #ff0000 10px)' }}></div>
            
            <div className="relative z-10 flex space-x-6 text-[10px] font-bold text-[#880000] tracking-wider">
                <button className="flex items-center gap-1 hover:text-[#ff0000] hover:bg-black/50 px-1"><span className="border border-[#550000] p-[1px]">☺</span> SEND TO A FRIEND</button>
                <button className="flex items-center gap-1 hover:text-[#ff0000] hover:bg-black/50 px-1"><span className="border border-[#550000] p-[1px]">⚡</span> IM TO A FRIEND</button>
                <button className="flex items-center gap-1 hover:text-[#ff0000] hover:bg-black/50 px-1"><span className="border border-[#550000] p-[1px]">☑</span> LINK TO WA007</button>
                <button className="flex items-center gap-1 hover:text-[#ff0000] hover:bg-black/50 px-1"><span className="border border-[#550000] p-[1px]">☼</span> BOOKMARK PAGE</button>
            </div>

            <div className="relative z-10 text-[9px] text-[#440000] font-mono-tech">
                (mt) COPYRIGHT 2004 WEBAGENT007 INC. ALL RIGHTS RESERVED.
            </div>
        </footer>

      </div>
    </div>
  );
}

export default App;