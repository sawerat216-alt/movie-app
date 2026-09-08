import { useState } from "react";
import ModalDialog from "./components/ModalDialog";
import Tabs from "./components/Tabs";
import Disclosure from "./components/Disclosure";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    {
      id: "one",
      label: "Tab One",
      content: "Content for tab one.",
    },
    {
      id: "two",
      label: "Tab Two",
      content: "Content for tab two.",
    },
  ];

  return (
    <main>
      <h1>Accessible Components</h1>

      <section>
        <h2>Modal</h2>

        <button onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>

        <ModalDialog
          isOpen={isModalOpen}
          title="Example Modal"
          onClose={() => setIsModalOpen(false)}
        >
          <p>This is a modal.</p>
        </ModalDialog>
      </section>

      <section>
        <h2>Tabs</h2>
        <Tabs tabs={tabs} />
      </section>

      <section>
        <h2>Disclosure</h2>
        <Disclosure />
      </section>
    </main>
  );
}

export default App;