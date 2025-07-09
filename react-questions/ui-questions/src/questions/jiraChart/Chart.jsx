import React, { useState } from "react";
import "./chart.css";

const Chart = () => {
  const CHART_DATA = [
    { id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
    { id: "dep-2", name: "Sales", ticketCount: 20, colour: "#FFA420" },
    { id: "dep-3", name: "Engineering", ticketCount: 60, colour: "#287233" },
    { id: "dep-4", name: "Manufacturing", ticketCount: 5, colour: "#4E5452" },
    { id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#642424" },
    {
      id: "dep-6",
      name: "Human Resourcing",
      ticketCount: 35,
      colour: "#1D1E33",
    },
    { id: "dep-7", name: "Events", ticketCount: 48, colour: "#E1CC4F" },
    { id: "dep-7", name: "Events", ticketCount: 78, colour: "#287233" },
    { id: "dep-7", name: "Events", ticketCount: 28, colour: "#3F888F" },
  ];

  const [toggle, setToggle] = useState(false);

  const Bar = ({ colour, ticketCount, height, name }) => {
    return (
      <div
        className="bar"
        style={{ backgroundColor: `${colour}`, height: `${height}%` }}
      >
        <div className="department-name">
          {name} - {ticketCount}
        </div>
      </div>
    );
  };

  const maxHeight = (data = []) => {
    const array = data?.map((item) => item.ticketCount);
    return Math.max(...array);
  };

  return (
    <div className="main">
      <button className="toggleBtn" onClick={() => setToggle((prev) => !prev)}>
        Toggle chart
      </button>

      {toggle && (
        <div className="chart-container">
          <div className="chart">
            {CHART_DATA.map((bar, index, arr) => (
              <Bar
                key={index * bar.ticketCount}
                colour={bar.colour}
                ticketCount={bar.ticketCount}
                height={(bar.ticketCount * 100) / maxHeight(arr)}
                name={bar.name}
              />
            ))}
          </div>
          <div className="y-axis-label">Number of tickets</div>
          <div className="x-axis-label">Departments</div>
        </div>
      )}
    </div>
  );
};

export default Chart;
