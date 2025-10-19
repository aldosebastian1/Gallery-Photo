import React from "react";
import { dashboard } from "../../assets/DashboardData.js";
import "./Dashboard.css";

function DashboardItem({ image, judul, description }) {
  return (
    <div className="dashboard-container">
      <div className="img-dashboard">
        <img src={image} alt={judul || "dashboard"} />
      </div>
      <div className="text-dashboard">
        <h2>{judul}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function DashboardList() {
  return (
    <div className="dashboard-list">
      {dashboard.map((item) => (
        <DashboardItem
          key={item.id}
          image={item.image}
          judul={item.judul}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default DashboardList;
