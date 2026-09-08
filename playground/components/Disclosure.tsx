import { useState } from "react";
import "./Disclosure.css";

export default function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const contentId = "disclosure-content";

  return (
    <div className="disclosure">
      <button
        type="button"
        className="disclosure-button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>What is a Disclosure?</span>
        <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div
          id={contentId}
          className="disclosure-content"
        >
          <p>
            A disclosure is an interactive component that allows users
            to show or hide additional content.
          </p>
        </div>
      )}
    </div>
  );
}