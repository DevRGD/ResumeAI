# ResumeAI | Intelligence System

![ResumeAI Interface](https://devrgd-resumeai.vercel.app/opengraph-image)

> **Advanced neural architecture for career optimization.**
> Deconstruct, analyze, and reconstruct professional profiles with military-grade precision.

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-success)](https://mongodb.com)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![AI](https://img.shields.io/badge/Intelligence-Llama_3.3-blue)](https://groq.com)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel-black)](https://devrgd-resumeai.vercel.app)

## ⚡ Overview

In a landscape dominated by automated filters, **ResumeAI** serves as a tactical advantage for job seekers. Leveraging the **Llama 3.3** engine, it performs real-time semantic correlation between resumes and job descriptions to bypass ATS (Applicant Tracking System) algorithms.

**Live Demo:** [https://devrgd-resumeai.vercel.app](https://devrgd-resumeai.vercel.app)

### 🚀 Key Capabilities
* **Velocity Parsing:** Rapid-fire deconstruction of PDF documents into structured JSON layers using binary extraction.
* **Semantic Matching:** Uses LLMs to identify deep contextual gaps, going beyond simple keyword matching.
* **Tactical Scoring:** Generates a precise 0-100 compatibility score with actionable "Filter Evasion" strategies.
* **Industrial UI:** A high-fidelity "Analysis Console" featuring data-dense visualization and 60fps animations.

---

## 🛠️ Technical Architecture

This project demonstrates a modern **MERN** implementation (MongoDB, Express/Next.js, React, Node) with a focus on AI integration and Progressive Web App (PWA) standards.

### Core Stack
* **Framework:** Next.js 16 (App Router) & TypeScript
* **Database:** MongoDB (Mongoose) via Server Actions
* **AI Layer:** Llama 3.3-70b via Groq SDK
* **Styling:** Tailwind CSS v4 (Industrial Theme)
* **Motion:** Framer Motion (Complex Orchestration)

### 💎 UI/UX Features
* **Dynamic Scanning Beam:** Custom Framer Motion component simulating OCR scanning with complex state transitions.
* **Live Status Indicators:** System components (PWR, NET, READ) that react to real-time API states.
* **Skeleton States:** High-fidelity "Standby Mode" UI designed to prevent cumulative layout shift (CLS).
* **Glassmorphism:** Heavy use of `backdrop-filter` and layered rgba gradients for a premium aesthetic.

### 🌍 SEO & Performance
* **PWA:** Fully offline-capable with Service Worker caching and Manifest implementation.
* **AEO (Answer Engine Optimization):** JSON-LD Schema integration optimized for AI crawlers.
* **Edge Generation:** Dynamic Open Graph image generation using `next/og` for zero-latency social previews.

---

## 📂 Project Structure

```bash
├── app/
│   ├── api/analyze/    # Serverless Edge Function for AI processing
│   ├── dashboard/      # The "Analysis Console" state machine
│   ├── manifest.ts     # PWA Configuration
│   └── opengraph-image.tsx # Dynamic Social Cards
├── components/
│   ├── dashboard/      # Industrial UI components (Scanner, ResultView)
│   └── ui/             # Reusable atomic components
├── lib/
│   ├── aiService.ts    # Llama 3.3 Integration Logic
│   └── pdfExtractor.ts # Binary parsing logic
└── models/             # Mongoose Schemas (Analysis History)

```

## ⚡ Getting Started

1. **Clone the Repository**
```bash
git clone https://github.com/DevRGD/ResumeAI.git
cd ResumeAI

```


2. **Install Dependencies**
```bash
npm install

```


3. **Configure Environment**
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_llama_api_key

```


4. **Initialize System**
```bash
npm run dev

```



## 🔐 Security & Region

* **Region:** Asia-South-1 (India)
* **Encryption:** Data is processed in-memory and ephemeral unless saved for user history.
* **Compliance:** Designed with data-minimization principles.

---

© 2026 ResumeAI Intelligence Systems. Built by [DevRGD](https://github.com/DevRGD).
