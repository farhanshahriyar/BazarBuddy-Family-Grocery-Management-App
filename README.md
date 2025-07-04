# 🛒 BazarBuddy – Family Grocery Management App

**BazarBuddy** is a smart, modern web application designed to revolutionize the way families manage groceries. It offers powerful features like collaborative shopping lists, real-time expense tracking, and AI-powered item suggestions — all wrapped in a clean, responsive interface.

The landing page is built using **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Radix UI**, ensuring performance, scalability, and an elegant user experience. For backend and state management, **Context API**, **custom React hooks**, and **Supabase** are used to deliver real-time data handling, authentication, and cloud storage.

---

## 📌 Table of Contents

- [✨ Overview](#-overview)
- [📁 Directory Structure](#-directory-structure)
- [⚙️ Features](#️-features)
- [🧠 Flowchart](#-flowchart)
- [🚀 Installation](#-installation)
- [📦 Usage](#-usage)
- [🧪 Technologies Used](#-technologies-used)

---

## ✨ Overview

**BazarBuddy** empowers families to:
- 🛍 Create collaborative shopping lists  
- 💸 Track monthly and weekly grocery expenses  
- 📄 Export lists and reports to professional PDFs  
- 🤖 Get smart product suggestions based on usage  
- 📱 Access the app from any device, anywhere  
- 👨‍👩‍👧 Share responsibilities with a beautiful, intuitive UI  

Whether you're budgeting groceries, splitting shopping duties, or planning meals—**BazarBuddy** has your back.

---

## 📁 Directory Structure

<details>
<summary>📂 Click to expand</summary>

```plaintext
bazarbuddy-family-grocery-management-app/
│
├── README.md
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
│
├── public/
│   └── assets/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── theme-provider.tsx
│   └── ui/
│
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── lib/
│   └── utils.ts
│
├── styles/
│   └── globals.css


```
</details>

---
## ⚙️ Features

| Module               | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| 🛒 Shopping List      | Create and manage grocery lists with real-time collaboration.               |
| 💰 Expense Tracker    | Visualize and optimize grocery expenses through reports.                    |
| 📄 PDF Export         | Generate downloadable/printable lists or summaries.                         |
| 🤖 Smart Suggestions  | Get item recommendations based on history.                                  |
| 🌐 Cross-Device Sync  | Access from desktop, tablet, or phone instantly.                            |
| 🔔 Toast Notifications| Clean alerts using React hooks and Shadcn UI.                               |
| 🎨 Dark Mode Support  | Seamless theming for better night-time UX.                                  |
| Bangla Language Support | Users can use the dashboard in bangla if needed.                            |


## 🧠 Flowchart
📌 Coming Soon: 
```bash
Visual flowchart of the grocery list cycle, data sync, and AI suggestion system.
```

## 🚀 Installation
```bash
git clone https://github.com/farhanshahriyar/BazarBuddy-Family-Grocery-Management-App.git
cd BazarBuddy-Family-Grocery-Management-App
npm install
```

## 📦 Usage
Start Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

Build for Production
```bash
npm run build
```
Preview Production Build
```bash
npm run start
```

## 🧪 Technologies Used
| Stack           | Tools/Libraries                       |
|----------------|----------------------------------------|
| Frontend       | Next.js, TypeScript, Tailwind CSS      |
| UI Components  | ShadCN UI, Radix UI, Lucide Icons      |
| Form Control     | React Hook Form + Zod                |
| Backend/Auth   | Supabase                               |
| Deployment     | Netlify                                |

```bash
“The modern kitchen deserves a smart assistant.”
```
— Farhan Shahriyar | Creator of BazarBuddy




