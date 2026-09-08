# AI Development Workflow Comparison

## Overview

This exercise compared two approaches to building accessible React components: a vague AI prompt and a precise, structured prompt. Both approaches produced working Modal, Tabs, and Disclosure components, but the quality and review effort were different.

## Vague Prompt

The vague approach gave the AI a general instruction to build the components. The result was produced quickly, but the implementation required more manual inspection because the requirements were not clearly defined. Accessibility behavior, keyboard interaction, ARIA relationships, state management, and edge cases had to be checked after generation.

One issue identified during review was the Disclosure component using a hard-coded content ID. This could cause duplicate IDs if multiple Disclosure components were rendered on the same page. The implementation was corrected by using React's `useId()` to generate a unique ID.

## Precise Prompt

The precise approach included specific requirements, file references, accessibility constraints, expected behavior, and verification steps. This made the generated implementation easier to review because there was a clear definition of correctness.

For the Disclosure component, the precise implementation uses `aria-expanded` and `aria-controls` on the button, connects the button to its content, and uses `useId()` for a unique content ID. The state update also uses the previous state value, making the toggle behavior reliable.

## Correctness and Accessibility

The precise workflow produced code that was easier to verify against explicit requirements. Accessibility was considered during implementation rather than only after the UI appeared to work. Keyboard operation, semantic buttons, ARIA attributes, and show/hide behavior were specifically reviewed.

## Edge Cases

The precise approach also made edge cases easier to identify. Multiple instances of a component, unique IDs, repeated state updates, and keyboard interaction were considered during review. The vague approach did not make these requirements explicit, so they required additional manual checking.

## Review Effort

The vague workflow was faster initially but required more review and correction afterward. The precise workflow took more effort when writing the prompt, but reduced uncertainty during implementation and testing.

## Conclusion

The comparison showed that detailed prompts are more effective for accessible component development. AI can generate functional code quickly, but precise requirements and verification are necessary to produce code that is reliable, accessible, and easier to maintain.
