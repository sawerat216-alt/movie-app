# shadcn/ui Comparison Notes

## Overview

I first built the Modal Dialog and Tabs components manually in React and TypeScript using the W3C ARIA Authoring Practices as a guide. I then installed shadcn/ui with the Base UI component library and generated its Dialog and Tabs components to compare the implementations.

## Dialog comparison

My hand-built ModalDialog manually implements important accessibility behavior. It moves focus into the dialog when it opens, traps Tab and Shift+Tab navigation, closes with Escape, and returns focus to the element that opened the dialog. This required custom `useEffect`, `useRef`, and keyboard event handling.

The generated shadcn Dialog delegates this behavior to `@base-ui/react/dialog`. Instead of implementing the behavior directly, it composes primitives such as `Dialog.Root`, `Dialog.Trigger`, `Dialog.Close`, `Dialog.Backdrop`, `Dialog.Popup`, `Dialog.Title`, and `Dialog.Description`.

One concrete gap in my implementation is that the modal uses a hard-coded `aria-labelledby="modal-title"` and `id="modal-title"`. This can cause duplicate IDs if multiple dialogs are rendered. A more reusable implementation should generate unique IDs.

Another difference is component structure. My modal is a single `ModalDialog` component, while shadcn separates the dialog into reusable primitives. This makes it easier to compose different dialog layouts without rewriting the accessibility behavior.

## Tabs comparison

My hand-built Tabs implements Left/Right arrow navigation, Home/End navigation, roving `tabIndex`, `aria-selected`, `aria-controls`, and the tab-to-panel relationship manually.

The generated shadcn Tabs delegates the interaction to `@base-ui/react/tabs` through `Tabs.Root`, `Tabs.List`, `Tabs.Tab`, and `Tabs.Panel`. This reduces the amount of keyboard and state-management logic that the application code needs to maintain.

A concrete gap is that my component assumes the supplied tab IDs can safely be used to create DOM IDs such as `tab-${tab.id}` and `panel-${tab.id}`. Multiple Tabs instances could create collisions if the caller provides overlapping IDs. The generated primitive provides a more reusable abstraction instead of requiring this ID management pattern in the application component.

The generated Tabs also supports additional configuration such as horizontal/vertical orientation and styling variants, while my implementation focuses on the required horizontal tabs behavior.

## What I learned

The biggest difference is that my components required me to explicitly reason about accessibility behavior and keyboard interaction, while the shadcn components provide reusable primitives that encapsulate much of that behavior.

Building the components myself was useful because it made the accessibility requirements visible. Comparing them with shadcn showed how a component library can reduce repeated accessibility and state-management code, while still allowing developers to inspect and customize the generated source.

I would still review generated component code rather than treating a component library as automatically accessible. The underlying primitives, their configuration, and the way they are composed still need to be understood and tested.
