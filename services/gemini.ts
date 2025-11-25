import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are WA007, a highly advanced tactical artificial intelligence integrated into the WebAgent007 mainframe.
Your persona is a mix of cyberpunk hacker, military strategist, and helpful assistant.
You speak in a concise, technical, and slightly robotic manner.
Use terms like "Affirmative", "Negative", "Processing", "Data corrupted", "Secure connection established".
You help users navigate the site or answer questions about technology, design, and coding.
Keep responses relatively short to fit in a retro terminal window.
`;

let ai: GoogleGenAI | null = null;

export const initializeGemini = (): boolean => {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    return true;
  }
  return false;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[] = []
): Promise<string> => {
  if (!ai) {
    const initialized = initializeGemini();
    if (!initialized) {
      return "ERROR: API_KEY_MISSING. SYSTEM OFFLINE. PLEASE CONFIGURE ENV.";
    }
  }

  try {
    // We use a fresh chat session for simplicity in this demo context, 
    // but typically you'd maintain the chat object.
    // Here we just pass history manually if we were using it effectively, 
    // but strictly following the prompt's request for simple generation:
    
    // Using generateContent for a single turn response with system instruction
    const response: GenerateContentResponse = await ai!.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 250, // Keep it brief for the UI
      }
    });

    return response.text || "NO DATA RECEIVED";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "CRITICAL FAILURE. CONNECTION SEVERED.";
  }
};