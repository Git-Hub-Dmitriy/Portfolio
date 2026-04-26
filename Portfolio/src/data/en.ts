import { Dictionary } from "@interfaces/dictionary.types";

export const en: Dictionary = {
  pages: {
    home: {
      titleOne: "NextJS",
      titleTwo: "Frontend",
      titleThree: "Developer",
    },
    about: {
      title: "About",
      description: `I am a junior frontend developer focused on creating comprehensive
          user interfaces with well-thought-out logic and architecture. In my
          projects, I focus not only on the visual appearance but also on the
          internal organization: from application structure and state management
          to user scenarios such as authorization, navigation, filtering, and
          data interaction. I am gradually moving toward more complex
          architectures and modern approaches, including server-side and
          client-side rendering strategies, as well as improving the user
          experience through performance and handling loading states and errors.`,
    },
    contact: {
      title: "Contact",
      email: "gameheymdall@gmail.com",
      tel: "063-135-78-38",
      gitHub: "GitHub",
      instagram: "Instagram",
    },
    recentWorks: {
      title: "Recent Work",
      preview: [
        {
          href: "/works/0",
          imageSrc: "/images/ecobazar.webp",
          name: "Ecobazar",
          text: `A lightweight e-commerce app with simulated authentication and
              multi-page navigation. Browse products with filtering, sorting,
              and pagination, manage a cart via localStorage, and access a
              profile with mock order history and wishlist after login.`,
        },
        {
          href: "/works/1",
          imageSrc: "/images/Weather.webp",
          name: "Weather",
          text: `A lightweight weather forecast app with quick city searches. View
              the weather for a selected city with visual indicators. Current
              weather in real time with customizable parameters`,
        },
        {
          href: "/works/2",
          imageSrc: "/images/Weather.webp",
          name: "Empty",
          text: `Empty`,
        },
      ],
    },
    skills: {
      title: "Skills",
      list: [
        `Frontend Development: Experience developing interfaces with React
        and Next.js 16, using a modern stack and approaches. I am confident with
        component architecture, routing, state management, and integration`,
        `JavaScript/TypeScript: Strong command, writing clean,
        type-safe code. React (Hooks, HOCs, optimization): Creating
        user-friendly UIs, working with local storage, and managing state.`,
        `Next.js 16: Using Server Components, PPR, and Cache Components;
        working with searchParams, server requests, and rendering configuration.`,
        `State Management: Experience with Redux and Zustand; structuring
        global state, separating concerns, and creating selectors. API`,
        `Integration: Implementing client- and server-side requests,
        working with real APIs (e.g., retrieving weather data), and managing
        caching via React Query.`,
        `Styling: Modular CSS (*.module.css), modern native CSS (@layer,
        @container, clamp(), :has()); also experienced with SCSS and BEM
        methodology.`,
        `Build Tools: Webpack, build configuration, and project
        optimization.`,
        `Testing: Writing component and end-to-end tests using Vitest,
        React Testing Library, and Playwright.`,
        `UI/UX Practices: Skeleton loaders for PPR components, global
        error boundaries, and well-thought-out interaction logic and interface
        states.`,
      ],
    },
    work: [
      {
        id: 0,
        name: "Ecobazar",
        href: "/works/0",
        image: "/images/ecobazar.webp",
        gitHub:
          "https://github.com/Git-Hub-Dmitriy/Portfolio/tree/main/Ecobazar",
        demo: "",
        overview: {
          title: "Overview",
          text: "This is my first project in React, in which I implemented the architecture of an online store. The main emphasis of the project is on working with the global camp (Redux), navigating and creating logical baskets without vikoristan of the real backend. The add-on is completely adaptive and has the necessary confirmation of the customer: by filtering goods to a special account.",
        },
        features: {
          title: "Features",
          text: [
            "Catalog logic: Implemented filtering, sorting and pagination of products on the Store You Are Blog page.",
            "Cart: Full-fledged cart with data storage in localStorage (products are not lost when the page is reloaded)",
            "Authentication layout: imitation of protected routes using HOC (higher order components). Access to the profile and wish list is opened by logging in admin/admin.",
            "Wish list system: ability to add products to favorites with verification on publication (calling a modal window)",
            "Interactive UI: several functional sliders and fully adaptive layout using the BEM methodology.",
          ],
        },
        stack: {
          title: "Tech stack",
          text: [
            "Core: React, React Router (SPA navigation)",
            "State Management: Redux-Persist (cart and wishlist management)",
            "Styles: SCSS using BEM framework for code cleanliness",
            "Build Tool: Webpack (manual build setup).",
            "Storage: LocalStorage browser API",
          ],
        },
      },
      {
        id: 1,
        name: "Ecobazar",
        href: "/works/1",
        image: "/images/Weather.webp",
        gitHub:
          "https://github.com/Git-Hub-Dmitriy/Portfolio/tree/main/Weather",
        demo: "",
        overview: {
          title: "Overview",
          text: "A modern single-page weather app built on the cutting edge of Next.js. The main focus of the project is maximum performance and UX. The app uses hybrid rendering: critical content is displayed instantly, and heavy data is dynamically loaded without blocking the interface.",
        },
        features: {
          title: "Features",
          text: [
            "Edge Performance: Using PPR (Partial Prerendering) mode and full Skeletons for each data block, providing instant visual response.",
            "Smart Search: City search with validation, debounce, and hinting. Implemented via React Query to cache client search results.",
            "Server-Side Logic: Synchronization of search state via searchParams, allowing you to save search history and share a link to a specific city.",
            `Advanced Caching: Use the latest "use cache" directive (Next.js 16) to optimize server requests to the API.`,
            "Customizable UI: Full settings menu for switching units of measurement (Celsius/Fahrenheit, miles/km, inches), implemented through Zustand.",
            "Comprehensive Testing: Full coverage of critical functionality. Vitest and React Testing Library for component logic and hooks, and Playwright for end-to-end (E2E) testing of scenarios.",
            "Performance Optimization: Fine-tune rendering using useMemo and React.memo in heavy nodes of the application to eliminate unnecessary redraws.",
          ],
        },
        stack: {
          title: "Tech stack",
          text: [
            `Framework: Next.js (App Router, PPR, "use cache"), TypeScript.`,
            "State & Data: Zustand, React Query.",
            "Testing: Vitest, React Testing Library, Playwright.",
            "Styles: CSS Modules (@layer, container queries, :has()), BEM.",
            "Optimization: useMemo, memo, Custom Debounce.",
          ],
        },
      },
    ],
  },
  components: {
    header: {
      title: "Dmitriy",
      burger: {
        links: [
          { link: "About", href: "#about" },
          { link: "Recent Work", href: "#recent-works" },
          { link: "Skills", href: "#skills" },
          { link: "Contact", href: "#contact" },
          { link: "All Works", href: "/works" },
        ],
        linksWork: [
          { link: "Overview", href: "#overview" },
          { link: "Features", href: "#features" },
          { link: "Tech Stack", href: "#tech-stack" },
        ],
        linksWorks: [{ link: "Home", href: "/" }],
      },
      lang: {
        ua: "UA",
        en: "EN",
      },
    },
  },
};
