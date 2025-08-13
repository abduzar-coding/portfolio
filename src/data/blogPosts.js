const blogPosts = [
  {
    id: 1,
    title: "Mastering Tailwind Utility Patterns",
    date: "2025-07-01",
    tags: ["Tailwind", "CSS", "Frontend"],
    excerpt: "Learn how utility-first CSS scales better than BEM or SCSS, with real-world layout examples.",
    content: `Tailwind is more than a set of utility classes—it's a way of thinking about UI as composable tokens. Instead of inventing new class names for each component, you assemble small, well-defined utilities that map directly to CSS properties. This lowers cognitive load, speeds up iteration, and eliminates dead styles.

Why utility-first works
1) Consistency: Spacing scales (e.g., gap-2, gap-4), font sizes (text-sm, text-lg), and colors (text-gray-600) are shared across the entire app.
2) No naming debates: You focus on layout and behavior, not naming things like Card__header--dark.
3) Dead code elimination: Purging unused utilities is straightforward with Tailwind's JIT.
4) Easy refactors: Changing a gap or padding is a single-class change, not a refactor across a CSS module.

Core patterns you should know
1) Layout primitives
   - Stack (vertical spacing): using flex flex-col and space-y-* or gap-*
   - Cluster (horizontal wrap): using flex flex-wrap gap-*
   - Sidebar: grid grid-cols-[auto,1fr] or flex with basis-* and grow
   - Center: grid place-items-center or flex items-center justify-center

2) Responsive tiers
   Mobile-first is the default. Add sm:, md:, lg:, xl: progressively. Example: a three-column grid that collapses to one column:
   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6

3) State-driven styling
   Pseudo-classes like hover:, focus:, active:, disabled:, and data-attributes (group, group-hover) eliminate most CSS files. Example:
   group relative rounded-xl shadow hover:shadow-lg transition
   Inside children: opacity-0 group-hover:opacity-100

4) Design tokens in classes
   Use Tailwind config to define your brand colors, spacing, and fonts. Then you reference those as first-class utilities, keeping design consistent.

Real-world example: Card grid with equal heights and media
   Wrapper:
   grid gap-6 sm:grid-cols-2 lg:grid-cols-3
   Card:
   flex flex-col rounded-2xl border bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-5 shadow
   Media:
   aspect-video overflow-hidden rounded-xl
   Title:
   mt-4 text-lg font-semibold
   Body:
   text-sm text-gray-600 dark:text-gray-400
   Actions:
   mt-auto flex items-center justify-between pt-4

Reusable component extraction with className
   Even though Tailwind encourages inline utilities, you can centralize common patterns:
   function Card({ className = "", ...props }) {
     return <div className={"rounded-2xl border p-5 shadow " + className} {...props} />;
   }
   Then compose:
   <Card className="bg-white/70 dark:bg-zinc-900/70">...</Card>

The “variant” pattern with clsx/cva
   For toggles or buttons, use libraries like clsx or class-variance-authority (CVA) to switch styles by props:
   base: inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition
   variants: intent (primary, secondary, ghost), size (sm, md, lg)

Common pitfalls (and fixes)
- Too many arbitrary values: Prefer tokens (e.g., p-6) over p-[23px] to maintain consistency.
- Deep nesting in JSX: Break into small components; Tailwind scales with composition.
- Copy/paste drift: Extract repeating groups into reusable components or helper functions.

Performance tips
- Use the JIT engine (default now).
- Keep class orders readable (layout → spacing → color → effects).
- Enable dark mode via class strategy and toggle on html or body for instant theme switches.

Takeaway
Tailwind lets you build fast, consistent UIs when you treat utilities as your design language. Master a small set of grid, flex, spacing, and state patterns, and you’ll ship high-quality interfaces significantly faster.`,
  },
  {
    id: 2,
    title: "React useEffect: 3 Mistakes to Avoid",
    date: "2025-06-25",
    tags: ["React", "Hooks", "Performance"],
    excerpt: "Avoid these common useEffect bugs that lead to re-renders, memory leaks, and race conditions.",
    content: `useEffect is powerful, but small mistakes can create big problems: unnecessary renders, memory leaks, and race conditions. Here are three high-impact mistakes and how to fix them.

Mistake 1: Missing cleanup for subscriptions and timers
Problem: Effects that register listeners or timers keep running after unmount, causing memory leaks and duplicate callbacks.
Bad
- Setting setInterval or addEventListener without cleanup.
Fix
- Return a cleanup function that clears the timer or removes the listener.
- Ensure cleanup runs when dependencies change.

Checklist
- If your effect “starts something”, it should also “stop it”.
- Keep cleanup idempotent.

Mistake 2: Wrong dependency arrays (stale or thrashing)
Problem: Omitting dependencies causes stale data; overincluding causes the effect to run too often.
Guidelines
- Include all values referenced inside the effect that come from props/state (except stable refs).
- Wrap callbacks with useCallback when you need a stable identity to prevent re-running effects.
- For objects/arrays, derive primitives or memoize them (useMemo) before using them in dependencies.

Example
- Instead of dependency on options object that is created inline on each render, memoize options with useMemo and depend on its primitives.

Mistake 3: Async effects that race
Problem: Fetching inside useEffect can set state after a newer request has finished, or after unmount.
Fix
- Use an AbortController to cancel in-flight fetches when dependencies change or the component unmounts.
- Track the “generation” of the request and ignore outdated responses.

Robust fetch pattern
1) Inside the effect, create an AbortController.
2) Start fetch with the controller’s signal.
3) On cleanup, abort the controller.
4) Guard state updates if the request was aborted.

When to avoid useEffect entirely
- Derived data: If something can be computed from props/state synchronously, compute it during render instead of syncing with effect.
- Event-driven updates: Prefer handlers (onClick, onChange) that update state directly.
- Server data: Consider frameworks with data fetching abstractions or use libraries like React Query (TanStack Query) to handle caching, deduping, and retries.

Debugging tips
- Log dependencies and when effects run during development.
- React DevTools Profiler helps identify excessive renders.
- If an effect feels “fragile”, split it into smaller effects by responsibility (e.g., one for subscriptions, one for fetching).

Takeaway
Treat useEffect as a tool for bridging React with external systems (network, subscriptions, timers). Keep dependencies explicit, always clean up, and guard async flows to prevent races.`,
  },
  {
    id: 3,
    title: "Boost Your Portfolio with Real APIs",
    date: "2025-06-18",
    tags: ["Portfolio", "API", "JavaScript"],
    excerpt: "Make your dev portfolio stand out by integrating real-world APIs like weather, crypto, and maps.",
    content: `Hiring managers love seeing apps that talk to real services. It proves you can handle async code, errors, and data modeling. Here’s a practical framework to add API-driven projects that are small, fast, and impressive.

Pick APIs that show range
- Weather: Geolocation, units, charts (hourly forecast).
- Crypto: Search, pagination, sorting, debounce, favorites in localStorage.
- Maps: Geocoding, markers, clustering, route previews.
- Content: Public JSON APIs (news, books, movies) to demonstrate list/detail views.

Project blueprint (applies to any API)
1) Define a minimal schema
   Decide the fields you actually render (id, name, value, change24h). Normalize incoming data to this shape in a mapper function.
2) Build states deliberately
   loading: boolean
   error: string | null
   data: T[] or T
   Use a single source of truth and derive computed values (filteredData) from data + UI state (query, sort).
3) Add UX niceties
   - Skeletons for loading
   - Empty states with recovery actions
   - Retry button on errors
   - Sticky search/filter bar on mobile
4) Performance
   - Debounce inputs (250–400ms).
   - Memoize heavy computations.
   - Pagination or infinite scroll for large lists.
   - Cache results per query (Map or a lightweight client cache).
5) Polish
   - Dark mode toggle.
   - Accessible keyboard focus states.
   - Shareable routes (query params reflect filters).

Example flow: Crypto tracker
- State: query, page, sort, favorites.
- Fetch: on mount and when query/sort changes (debounced).
- UX: sticky header with search, table with sticky column headers, row hover, favorite toggle (persist in localStorage).
- Error handling: show a toast with a Retry action.
- Performance: virtualize long tables if needed.

Example flow: Weather app
- Inputs: city name or geolocation.
- Fetch: current + forecast endpoints.
- Display: summary card, hourly chart, 5-day compact list.
- UX: unit toggle (°C/°F), graceful error for unknown cities, offline fallback (last cached city).

Security and keys
- Use environment variables and a proxy when possible.
- Never commit secrets; for public-read APIs use rate-limit friendly patterns (cache and backoff).
- Show you understand limits: handle 429 with a friendly message and retry schedule.

Storytelling in your portfolio
- Each project should tell a capability story:
  “I can integrate APIs”, “I ship polished UX”, “I manage state correctly”, “I care about performance”.
- Add short technical writeups on the project page: what you built, tradeoffs, and what you’d do next.

Takeaway
Small, focused API projects with clean UX demonstrate the exact skills teams need: data fetching, error handling, state modeling, and performance awareness.`,
  },{
    id: 4,
    title: "Building Accessible React Components",
    date: "2025-06-05",
    tags: ["Accessibility", "React", "UI/UX"],
    excerpt: "Accessibility isn’t just a nice-to-have. Learn how to make your components usable by everyone.",
    content: `Accessibility (a11y) ensures all users, including those with disabilities, can use your app. In React, small adjustments make a big difference.

Key principles:
1) Semantic HTML: Use button, nav, header, main, and footer appropriately. Don’t replace a button with a div and click handler.
2) Keyboard navigation: Every interactive element should be reachable via Tab and operable with Enter/Space.
3) Focus management: After modal open, trap focus inside. After modal close, return focus to the triggering element.
4) Color contrast: Follow WCAG AA (minimum contrast ratio of 4.5:1 for text). Tailwind’s text-gray-500 on a white background often fails—test with a contrast checker.
5) ARIA attributes: Use role, aria-label, and aria-describedby to provide context where HTML isn’t enough.

Common patterns:
- Accessible modal: role="dialog", aria-modal="true", focus trap, Escape closes modal.
- Accessible tabs: role="tablist", aria-selected, aria-controls linking to tab panels.
- Form errors: Link error text with inputs via aria-describedby.

Testing:
- Use axe DevTools or Lighthouse for automated checks.
- Test with keyboard only.
- Use screen readers like NVDA or VoiceOver to verify reading order and labels.

Takeaway:
Accessible apps reach more users, comply with regulations, and improve overall UX. Start with semantic HTML, then enhance with ARIA and thoughtful focus handling.`,
  },
  {
    id: 5,
    title: "State Management Without Overkill",
    date: "2025-05-22",
    tags: ["React", "State Management", "JavaScript"],
    excerpt: "You might not need Redux. Learn lightweight patterns for managing state effectively in React.",
    content: `State management is about finding the simplest tool that fits the job. Many projects overcomplicate by adding Redux or MobX too early.

When local state is enough:
- Component-specific UI states (modals, dropdowns, form inputs).
- Short-lived values that don’t need global sync.

When context is enough:
- Share small amounts of state (theme, auth user, language).
- Avoids prop drilling without adding a new library.

When you need more:
- Server state (data from APIs) is different from UI state. Libraries like TanStack Query handle caching, retries, and background refresh.
- Complex, interconnected client state (multi-step forms with dependencies) may benefit from Zustand, Jotai, or Redux Toolkit.

Patterns:
1) Lift state up: Move state to the nearest common ancestor and pass props down.
2) State collocation: Keep state as close to where it’s used as possible.
3) Reducers: For multiple related state updates, use useReducer to keep logic organized.
4) Derive, don’t duplicate: Compute derived values from existing state instead of storing them separately.

Anti-patterns:
- Global store for everything (leads to unnecessary re-renders).
- Context for high-frequency updates (can cause performance issues).
- Storing derived or static data in state.

Takeaway:
Start simple. Use React’s built-in hooks first, then bring in a library if you hit a clear limitation.`,
  },
  {
    id: 6,
    title: "Improving Web Performance with Core Web Vitals",
    date: "2025-05-10",
    tags: ["Performance", "SEO", "Frontend"],
    excerpt: "Core Web Vitals are Google's key metrics for page experience. Here's how to improve them.",
    content: `Core Web Vitals measure user-centric performance: loading, interactivity, and visual stability.

Metrics:
- LCP (Largest Contentful Paint): Measures loading performance. Aim for < 2.5s.
- FID (First Input Delay): Measures interactivity. Aim for < 100ms.
- CLS (Cumulative Layout Shift): Measures visual stability. Aim for < 0.1.

Improving LCP:
- Optimize images: Serve modern formats (WebP, AVIF), resize for device, lazy load below-the-fold images.
- Server-side rendering or static site generation for critical pages.
- Use a CDN for faster delivery.

Improving FID:
- Minimize main-thread blocking: Code-split, defer non-critical JS, avoid large polyfills.
- Break long tasks into smaller chunks using requestIdleCallback or web workers.

Improving CLS:
- Always include width/height attributes for images and videos.
- Avoid inserting content above existing content without warning.
- Reserve space for ads and embeds.

Tools:
- Lighthouse in Chrome DevTools.
- WebPageTest.org for deep analysis.
- Chrome User Experience Report for real-user metrics.

Takeaway:
Improving Core Web Vitals not only boosts SEO but also enhances real user experience. Focus on fast loading, instant interaction, and stable layouts.`,
  },
];

export default blogPosts;