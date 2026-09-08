import { useId, useState } from "react";
import "./Disclosure.css";

export default function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="disclosure">
      <button
        type="button"
        className="disclosure-button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <span>What is a Disclosure?</span>

        <span aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        id={contentId}
        className="disclosure-content"
        hidden={!isOpen}
      >
        <p>
          A disclosure is an interactive component that allows users
          to show or hide additional content.
        </p>
      </div>
    </div>
  );
}