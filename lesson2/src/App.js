import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
function Timeline({ children }) {
  return <div className="timeline">{children}</div>;
}
function TimelineItem({ type, title, date, description }) {
  return (
    <div className={`timeline-item ${type}`}>
      <div className="timeline-item-date">{date}</div>
      <div className="timeline-item-line"></div>
      <div className="timeline-item-content">
        <span className="icon">{getIcon(type)}</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function getIcon(type) {
  switch (type) {
    case "birthday":
      return "🎂";
    case "release":
      return "🚀";
    case "event":
      return "📅";
    default:
      return "🔔";
  }
}

function App() {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // Fetch the timeline data from the Ktor server
    fetch("http://localhost:8080/timeline")
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data to the component's state
        setTimelineData(data);
      })
      .catch((error) => {
        console.error("Error fetching timeline data:", error);
      });
  }, []);

  return (
    <Timeline>
      {timelineData.map((item) => (
        <TimelineItem
          key={item.date}
          type={item.type}
          title={item.title}
          date={item.date}
          description={item.description}
        />
      ))}
    </Timeline>
  );
}

export default App;
