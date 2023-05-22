import { useState } from "react";
import "./style.scss";

const SwtichTabs = ({ data, onTabChange }) => {
  const [selectTab, setTab] = useState(0);
  const [slider, setSlider] = useState(0);

  const activeTab = (tab, index) => {
    setSlider(index * 100);
    setTimeout(() => {
      setTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left: slider }} />
      </div>
    </div>
  );
};

export default SwtichTabs;
