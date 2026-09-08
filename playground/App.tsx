import { useState } from "react";
import ModalDialog from "./components/ModalDialog";
import Tabs from "./components/Tabs";
import Disclosure from "./components/Disclosure";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: "This is the overview tab.",
    },
    {
      id: "features",
      label: "Features",
      content: "This tab describes the main features.",
    },
    {
      id: "accessibility",
      label: "Accessibility",
      content: "These components are designed with accessibility in mind.",
    },
  ];

  return (
    <main className="app">
      <h1>Accessible React Components</h1>

      {/* Modal */}
      <section>
        <h2>Modal Dialog</h2>

        <button onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>

        <ModalDialog
          isOpen={isModalOpen}
          title="Example Modal"
          onClose={() => setIsModalOpen(false)}
        >
          <p>This is an accessible modal dialog.</p>

          <button onClick={() => setIsModalOpen(false)}>
            Close Modal
          </button>
        </ModalDialog>
      </section>

      {/* Tabs */}
      <section>
        <h2>Tabs</h2>

        <Tabs tabs={tabs} />
      </section>

      {/* Disclosure */}
      <section>
        <h2>Disclosure</h2>

        <Disclosure />
      </section>
    </main>
  );
}

export default App;