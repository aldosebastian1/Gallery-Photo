import React from "react";
import "./DashboardDisplay.css";
import DashboardItem from "./DashboardItem.jsx";
import { dashboard1, dashboard2 } from "../../assets/asset.js";

function DashboardDisplay() {
  return (
    <div>
      <section className="dashboard-list" aria-label="Featured">
        {dashboard1.map((item) => (
          <DashboardItem
            key={item.id}
            image={item.image}
            judul={item.judul}
            description={item.description}
          />
        ))}
      </section>
      <section className="dashboard-section">
        <h2 className="dashboard-section-title">What's New This Week</h2>
        <div className="dashboard-list" aria-label="Latest articles">
          {dashboard2.map((item) => (
            <DashboardItem
              key={`d2-${item.id}`}
              image={item.image}
              judul={item.judul}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardDisplay;
