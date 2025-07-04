# BazarBuddy - Family Grocery Management App

BazarBuddy is a web application designed to help families manage their grocery shopping, track expenses, and plan meals. It provides features such as collaborative shopping lists, expense tracking, PDF exporting, and smart suggestions. The application is built using Next.js, TypeScript, Tailwind CSS, and Radix UI.

## Features

*   **Collaborative Shopping Lists:** Create and share grocery lists with family members.
*   **Expense Tracking:** Monitor spending habits and optimize your grocery budget.
*   **PDF Export:** Generate professional-looking PDF reports for easy shopping and record keeping.
*   **Smart Suggestions:** Receive intelligent suggestions based on your shopping history.
*   **User-Friendly Interface:** Intuitive design for easy navigation and usage.
*   **Cross-Platform Compatibility:** Access the app from any device with a web browser.

## Technologies Used

*   [Next.js](https://nextjs.org/) - React framework for building performant web applications.
*   [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that adds static typing.
*   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
*   [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components for building high-quality user interfaces.
*   [Lucide React](https://lucide.dev/) - Set of icons
*   [React Hook Form](https://react-hook-form.com/) - For handling forms
*   [Zod](https://zod.dev/) - For schema validation
*   [Embla Carousel](https://www.embla-carousel.com/react/) - For building carousel

## Folder Structure

farhanshahriyar-bazarbuddy-family-grocery-management-app/
├── components.json           # Configuration for Shadcn UI components
├── next.config.mjs           # Next.js configuration file
├── package.json              # Project dependencies and scripts
├── pnpm-lock.yaml            # Dependency lockfile
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── app/                      # Next.js app directory (page routes, layout)
│   ├── globals.css           # Global CSS styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page component
├── components/               # Reusable React components
│   ├── theme-provider.tsx    # Theme provider for Next Themes
│   └── ui/                   # Collection of UI components (Radix UI + Shadcn UI)
├── hooks/                    # Custom React hooks
│   ├── use-mobile.tsx        # Hook to detect mobile devices
│   └── use-toast.ts          # Hook for displaying toast notifications
├── lib/                      # Utility functions
│   └── utils.ts              # Utility functions (e.g., classname merging)
├── public/                   # Static assets (images, fonts, etc.)
└── styles/                   # CSS styles
└── globals.css           # Global CSS styles (entry point for Tailwind)


## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/farhanshahriyar/BazarBuddy-Family-Grocery-Management-App.git
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

The application's UI components are configured using `components.json`. Tailwind CSS configuration is located in `tailwind.config.ts`. Next.js settings are in `next.config.mjs`, and TypeScript options are in `tsconfig.json`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

[MIT](https://opensource.org/license/mit/)
