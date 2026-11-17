
import React, { useState } from "react";
import "./App.css";

const accordionData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library used to build user interfaces."
  },
  {
    id: 2,
    question: "What is useState?",
    answer: "useState is a React Hook used to manage state in functional components."
  },
  {
    id: 3,
    question: "What is useEffect?",
    answer: "useEffect is a React Hook used to handle side effects like API calls."
  },
  {
    id: 4,
    question: "What are props?",
    answer: "Props are used to pass data from a parent component to a child component."
  }
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <h2>Frequently Asked Questions</h2>

      {accordionData.map((item, index) => (
        <div className="accordion-item" key={item.id}>

          <div
            className="accordion-question"
            onClick={() => handleToggle(index)}
          >
            <h3>{item.question}</h3>
            <span>{activeIndex === index ? "−" : "+"}</span>
          </div>

          {activeIndex === index && (
            <div className="accordion-answer">
              <p>{item.answer}</p>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}
