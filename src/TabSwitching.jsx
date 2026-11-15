
import { useState } from "react";

export default function TabSwitching() {

  const data = Array.from({ length: 5 }, (_, idx) => ({
    id: idx + 1,
    name: `Tab ${idx + 1}`,
    content: `The content of the tab ${idx + 1}`,
  }));

  const [activeTab, setActiveTab] = useState(1);

  function handleClick(id) {
    setActiveTab(id);
  }

  const activeContent = data.find(
    (tab) => tab.id === activeTab
  );

  return (
    <>
      <h2>Tab Switcher</h2>

      <div>
        {data.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            style={{
              backgroundColor:
                activeTab === tab.id ? "blue" : "gray",
              color: "white",
              padding: "10px 20px",
              margin: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div>
        <p>{activeContent.content}</p>
      </div>
    </>
  );
}
