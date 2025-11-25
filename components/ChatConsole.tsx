import React, { useState, useRef, useEffect } from 'react';
import TechFrame from './TechFrame';
import { sendMessageToGemini } from '../services/gemini';
import { ChatMessage } from '../types';

const ChatConsole: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'system', text: 'WA007 TACTICAL LINK ESTABLISHED. WAITING FOR INPUT...', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <TechFrame title="TACTICAL CHAT // GEMINI LINK" className="h-64 flex flex-col font-mono-tech">
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto p-2 space-y-2 bg-black text-[#ff0000] text-xs border-b border-[#330000]"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`px-1 ${msg.role === 'user' ? 'text-[#ffaaaa]' : 'text-[#ff0000] font-bold'}`}>
              {msg.role === 'user' ? '>' : 'WA007:'}
            </span>
            <span className="opacity-90">{msg.text}</span>
          </div>
        ))}
        {isLoading && <div className="text-[#ff0000] animate-pulse">PROCESSING...</div>}
      </div>
      <div className="p-2 flex bg-[#110000]">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-transparent border-b border-[#550000] text-[#ff0000] outline-none font-mono-tech text-xs mr-2 focus:border-[#ff0000]"
          placeholder="ENTER COMMAND..."
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="bg-[#330000] hover:bg-[#ff0000] text-[#ff0000] hover:text-black px-2 text-xs border border-[#550000]"
        >
          TX
        </button>
      </div>
    </TechFrame>
  );
};

export default ChatConsole;