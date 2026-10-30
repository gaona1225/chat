import {GoogleGenAI} from '@google/genai';

export const AIModel = 'gemini-3.8-flash';

let _ai: GoogleGenAI | null = null;
export function getAI(): GoogleGenAI {
    if (!_ai) {
        _ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});
    }
    return _ai;
}