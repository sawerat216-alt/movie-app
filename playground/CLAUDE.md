# Project Rules

## 1. Accessibility First

All interactive components must use semantic HTML and appropriate ARIA attributes where needed. Components must be usable with keyboard navigation and must expose their current state to assistive technologies.

## 2. React + TypeScript

Use React with TypeScript for all playground components. Prefer simple functional components and React hooks. Avoid unnecessary dependencies and do not use component libraries for the accessible component implementations.

## 3. Verify Interactive Behavior

Every interactive component must be manually tested for mouse and keyboard interaction. Before considering a component complete, verify its open/closed state, focus behavior, keyboard controls, and relevant edge cases.

## 4. Unique Relationships

When an interactive element controls another element, use reliable unique IDs and connect them with the appropriate ARIA attributes. Do not use hard-coded IDs when multiple instances of a component could appear on the same page.

## 5. Test Before Commit

Run the application and verify the implemented behavior before committing. Keep Git commits focused and use Conventional Commits format.
