# EMoIQ — AI-Powered Smart Exam Strategy Engine

> An advanced AI engine built to help engineering students study smarter, not harder. Upload PYQs, predict exam questions, and generate dynamic study plans.

**Founder:** Mohit Ahirwar
**Live site:** https://emolearners.vercel.app/emoiq

---

## 1. Problem statement

Engineering students in India (especially at RGPV and similar universities) waste huge amounts of time every semester trying to figure out **what** to study. The real problems are:

- **Blind preparation.** Students study entire textbooks without knowing which units actually carry the most weight in exams.
- **PYQs are manual work.** Students download 5 years of Previous Year Questions (PYQs) but have to manually tally which topics repeat.
- **No strategy.** Students don't know how to plan their limited time. They spend 5 days on Unit 1 and have 1 night left for the rest of the syllabus.
- **Panic the night before.** When an exam is tomorrow, students don't know what to skip and what to cram.
- **Static quizzes don't help.** Generic MCQs don't adapt to what a student actually knows or doesn't know.

The result: bright students fail or score low simply because of bad exam strategy, not a lack of intelligence.

## 2. Why I built EMoIQ

I'm Mohit Ahirwar, an engineering student myself. I've lived the "night before the exam" panic. I've spent hours trying to decode which questions the professors like to ask, manually highlighting PDFs, and wishing someone would just tell me exactly what to focus on.

I built EMoIQ because I wanted **a smart engine** that does the heavy lifting of exam strategy for you. I wanted a tool where a student could just upload their PYQs and instantly get a roadmap: what to study, when to study it, and what questions are guaranteed to come.

Free. Always. Built for students who want to study smarter.

## 3. How the project addresses the problem

Every feature maps back to a real student pain point before exams.

| Student pain | EMoIQ answer |
| --- | --- |
| "I don't know what is important." | `/emoiq/analyze` — NLP extracts exact unit-wise weightage and topic frequency from past papers. |
| "What questions will come tomorrow?" | `/emoiq/predict` — Smart prediction engine gives 10 probability-ranked questions. |
| "How do I finish this in 3 days?" | `/emoiq/plan` — Generates a personalized day-by-day study schedule. |
| "The exam is tomorrow, I have no time!" | **Last-24-Hour Mode** — A crash plan telling you exactly what to study and what to safely skip. |
| "Am I ready?" | `/emoiq/quiz` — Diagnostic AI quizzes that feed your weak spots back into your study plan. |
| "I don't understand this concept." | `/emoiq/doubt` — 24/7 AI Doubt Solver scoped to your syllabus. |

## 4. Approach

### Product decisions

- **Laser-focused on Exams.** This isn't a general learning tool; it's a strategic weapon for scoring marks efficiently.
- **Plain English & Clear Data.** No confusing charts. Just direct answers like "Unit 3 = 35% weightage, HIGH priority".
- **Mobile-first & Dark Mode.** Most students study late at night on their phones. The premium glassmorphic UI protects their eyes and keeps them focused.
- **Free forever.** No paywall, no "pro" plan, no ads.

### Technical decisions

- **React 19 + Vite + Tailwind CSS v4** — Blazing fast, highly interactive frontend. Design tokens live in `@theme` for a cohesive look.
- **Framer Motion** — Premium page transitions and micro-interactions with `prefers-reduced-motion` respected.
- **Lovable Cloud (Supabase)** — Postgres, Auth, and private file storage. Row Level Security (RLS) secures all student data.
- **Gemini via Lovable AI Gateway** — The AI engine runs server-side; the model key never touches the browser.

### Security decisions

- Row Level Security **enabled and enforced** on every public table.
- PYQ PDFs and analyses are stored in **private** buckets. Files are served via short-lived signed URLs.
- All AI prompts and server function inputs are validated with Zod.
- No secrets committed. Publishable keys only in `.env`.

## 5. Architecture

```text
                ┌────────────────────────────────────────────┐
                │              Browser (React 19)            │
                │  Routes · Framer Motion · Tailwind v4 UI   │
                └───────────────┬────────────────────────────┘
                                │
                     HTTPS + Supabase bearer token
                                │
        ┌───────────────────────┴───────────────────────┐
        │             Backend API (Edge)                │
        │  /api/emoiq/* routes · Zod validation         │
        └────────┬───────────────────────┬──────────────┘
                 │                       │
    ┌────────────▼──────────┐   ┌────────▼──────────────┐
    │  Supabase Postgres    │   │  Supabase Storage     │
    │  RLS on every table   │   │  pyq-papers           │
    │  pyq_analyses         │   │  (private, signed URLs)│
    │  predicted_questions  │   └───────────────────────┘
    │  study_plans          │
    └───────────┬───────────┘
                │
        ┌───────▼────────────┐
        │  Lovable AI Gateway │
        │  Gemini (server-side)│
        └────────────────────┘
```

## 6. Features — the full list

Every feature below is live and built to give students an unfair advantage in exams.

### 6.1 PYQ Intelligence Engine (`/emoiq/analyze`)

- **Text & PDF Parsing:** Paste past-paper text or upload a PDF into the private `pyq-papers` bucket.
- **Deep NLP Extraction:** The AI extracts **unit-wise weightage**, **topic frequency**, **marks distribution**, and **year-over-year trends**.
- **Actionable Output:** Provides clear insights like "Unit 3 = 35% weightage, HIGH priority".
- **Cloud Save:** Analyses are saved to `pyq_analyses` under the student's account for future reference.

### 6.2 Smart Question Prediction (`/emoiq/predict`)

- **Probability Ranking:** Select a saved analysis, and the AI generates **10 probability-ranked questions** (e.g., "70% chance").
- **Detailed Reasoning:** Shows the unit, mark weight, and the logical reason why each question was ranked highly based on historical trends.
- **Export & Review:** Saved to `predicted_questions` so students can review them right before walking into the exam hall.

### 6.3 Personalized Study Plan (`/emoiq/plan`)

- **Dynamic Scheduling:** Inputs include subject, days left, and known weak topics. Outputs a **day-by-day plan** detailing what to study and in what order.
- **Last-24-Hour Mode:** A toggle that instantly collapses the schedule into a high-intensity crash-revision plan when the exam is tomorrow.
- **Explicit Skip Lists:** The AI calculates the risk/reward ratio and explicitly tells students what low-weightage topics they can safely skip when time runs out.

### 6.4 Diagnostic Quiz & Feedback Loop (`/emoiq/quiz`)

- **Adaptive MCQs:** 10 adaptive multiple-choice questions dynamically generated across the syllabus.
- **Weakness Tracking:** Results write into `emoiq_weak_topics`.
- **Closed-Loop Strategy:** The Study Planner automatically reads these weak topics on the next run, adjusting your daily schedule to focus on your real weak spots.

### 6.5 AI Doubt Solver (`/emoiq/doubt`)

- **Syllabus-Scoped Chat:** An AI assistant restricted to explaining engineering and technical concepts related to your exams.
- **Plain English Explanations:** Trained to break down complex theorems and code into simple, digestible language.

## 7. How every feature helps students

This section explains how each feature solves a real study problem — not what page it lives on, but what it actually does for the student.

### Knowing what to study (PYQ Analysis)
Students waste hours tallying which questions came in 2021, 2022, and 2023. The PYQ Engine does this in 5 seconds. By instantly seeing that Unit 2 carries 40% of the exam weight, a student knows exactly where to invest their energy. 

### Never walking into an exam blind (Smart Prediction)
Before EMoIQ, predicting papers was a guessing game. By providing top 10 probability-ranked questions with exact reasoning, students get a highly targeted checklist of "must-know" topics. It turns anxiety into confidence.

### Time management made simple (Dynamic Plans & Skip Lists)
"How do I finish 5 units in 3 days?" EMoIQ solves this by breaking the syllabus into hourly chunks. More importantly, the **Skip List** feature removes the guilt of leaving topics behind. When you know a topic only has a 2% chance of appearing, you can skip it with confidence and secure the other 98%.

### Finding your blind spots (Adaptive Quizzes)
Reading notes creates an illusion of competence. The adaptive quizzes force recall. By automatically feeding wrong answers back into the study planner, EMoIQ ensures that you spend your last 24 hours studying what you *don't* know, rather than re-reading what you *do* know.

## 8. Findings — what I learned building this

- **Anxiety drives usage.** Tools like the "Last-24-Hour Mode" and "Skip Lists" are far more valuable to students than generalized learning features. Students want to know what they can ignore.
- **Data over fluff.** Students don't want broad advice; they want percentages. "70% chance of coming" is a metric they understand and trust.
- **Closed-loop systems work.** Automatically connecting quiz results to the study planner creates a magical UX where the app "just knows" what the student needs to study next.

## 9. Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Motion | Framer Motion |
| Backend | Lovable Cloud (Supabase Postgres + Storage + Auth) |
| AI | Google Gemini via Lovable AI Gateway |
| Fonts | Syne (display), Inter (body), JetBrains Mono (code) |

## 10. Security model (short version)

- RLS on every public table; explicit `GRANT` statements per role.
- Storage bucket private; access only via signed URLs.
- All server inputs validated with Zod.
- No secrets in the repo. Publishable keys only.

## 11. Roadmap

- University-specific PYQ databases pre-loaded.
- Collaborative study plans (study with friends).
- Export predictions to PDF.
- WhatsApp bot integration for instant doubt solving.

## 12. Contributing

Issues and pull requests are welcome. If you want to help make exam strategy better for thousands of students, fork the repo and submit a PR!

## 13. Credits

Built with love for the student community.

- Founder & maintainer: **Mohit Ahirwar**

## License

MIT License. See `LICENSE` for details.
