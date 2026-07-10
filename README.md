# EMoIQ — AI-Powered Smart Exam Strategy Engine

> An advanced AI engine built to help engineering students study smarter, not harder. Upload PYQs, predict exam questions, and generate dynamic study plans.

**Founder:** Mohit Ahirwar
**Live site:** https://emolearners.vercel.app

---

## 🚀 15 Core Features of EMoIQ

Every feature below is built to solve a real problem students face the night before an exam:

1. **AI-Powered PYQ Analysis:** Upload Previous Year Question (PYQ) papers and let our AI extract exact unit-wise weightage and trends.
2. **Smart Question Prediction:** Get the top 10 probability-ranked questions for your upcoming exam (e.g., "70% chance of appearing").
3. **Dynamic Study Planner:** Generate a personalized, day-by-day study schedule based on the exact number of days left for the exam.
4. **Last-24-Hour Crash Mode:** A specialized, high-intensity study plan mode that optimizes your time the night before an exam.
5. **Adaptive AI Quizzes:** Take diagnostic quizzes that adapt to your syllabus and instantly identify your weak topics.
6. **Real-time Weakness Tracking:** The study planner automatically reads your quiz results and adjusts your daily schedule to focus on weak spots.
7. **Instant Doubt Solver:** A 24/7 AI chat assistant trained to explain complex engineering and coding concepts in plain English.
8. **PDF Parsing Engine:** Built-in extraction tools to read syllabus text and PYQs directly from university PDFs.
9. **Topic Frequency Mapping:** Get a clear visual breakdown of which topics repeat year over year so you know exactly what to study.
10. **Skip-List Generation:** When time is running out, the AI explicitly tells you which low-weightage topics you can safely skip.
11. **Sleek Dark Mode UI:** A premium, distraction-free glassmorphic interface designed specifically for late-night studying.
12. **Mobile-First Experience:** 100% responsive design, because we know most students study directly from their smartphones.
13. **Secure Cloud Sync:** All your past analyses, generated plans, and predicted questions are saved securely to your account.
14. **High-Speed Edge Functions:** AI processing powered by Lovable Gateway and Supabase Edge Functions for zero lag.
15. **Completely Free & Accessible:** No paywalls, no premium subscriptions, and no ads. Built by a student, for students.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, Framer Motion
- **Backend & Database:** Supabase (Postgres, Auth, Storage)
- **AI Integration:** Gemini via Lovable AI Gateway (Server-side Edge Functions)
- **Routing:** TanStack Router

---

## 🔒 Security & Architecture

- **Row Level Security (RLS)** enabled on every database table.
- Files and PYQs are stored in private buckets and served via short-lived signed URLs.
- All AI processing happens server-side. API keys never touch the client browser.

> *"Talk is cheap. Show me the code." - Linus Torvalds*
