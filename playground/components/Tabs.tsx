import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
};

function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    let nextIndex = activeTab;

    if (event.key === "ArrowRight") {
      nextIndex = (activeTab + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (activeTab - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveTab(nextIndex);

    const nextTab = document.getElementById(`tab-${tabs[nextIndex].id}`);

    nextTab?.focus();
  };

  const activePanel = tabs[activeTab];

  return (
    <div>
      <div role="tablist" aria-label="Example tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id={`panel-${activePanel.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activePanel.id}`}
        tabIndex={0}
      >
        <p>{activePanel.content}</p>
      </div>
    </div>
  );
}

export default Tabs;