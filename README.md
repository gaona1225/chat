AI Chat
[!CI](https://github.com/gaona1225/chat/actions/workflows/ci.yml)
A streaming AI chat app built with React + Vite + TypeScript, powered by Google Gemini API.
Features
Multi-turn conversation — full history context, the model remembers what you said
Streaming responses — tokens arrive chunk by chunk, rendered typewriter-style
Graceful error handling — loading placeholder, empty-stream fallback, API-failure fallback
Input experience — send on Enter (IME-aware), auto-scroll to bottom, auto-focus after send
Tech Stack
React 18 + TypeScript + Vite 4
@google/genai — Gemini API (sendMessageStream for streaming)
Playwright — E2E tests (6 cases, headless Chromium)
ESLint + GitHub Actions — CI pipeline
Getting Started
npm install
Create .env.local in the project root (git-ignored — never commit):
VITE_GEMINI_API_KEY=your_api_key_here
Get a free key at Google AI Studio — no credit card required.
npm run dev      # start dev server
npm run build    # type-check + production build
npm run lint     # ESLint
npm run test:e2e # Playwright end-to-end tests
CI
Every push runs GitHub Actions:
install → type-check / build → lint → Playwright E2E (6 tests)
Project Structure
src/
├── api/
│   └── gemini.ts          # Gemini client (lazy init) + model constant
├── components/
│   └── Chat/
│       ├── Index.tsx      # core logic: send, streaming, error handling
│       ├── Header.tsx
│       ├── Main.tsx       # message list + auto scroll
│       ├── Footer.tsx     # input + Enter-to-send
│       ├── data.ts        # message type definitions
│       └── Chat.css
└── ...
e2e/
└── chat.spec.ts           # 6 Playwright test cases
.github/
└── workflows/
    └── ci.yml             # CI pipeline