import "./Accordion.css";
import accordionData from "../ConfigData/index";
import { useState } from "react";
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleClickHandler = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };
  return (
    <div className="accordion-container">
      <h3>Accordion design</h3>
      {accordionData.map((item, idx) => {
        return (
          <div className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleClickHandler(idx)}
            >
              <div>{item.title}</div>
              <div>{activeIndex === idx ? "-" : "+"}</div>
            </div>
            {activeIndex === idx && (
              <div className="accordion-itemcontent">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
