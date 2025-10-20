import React from "react";
import "./DashboardItem.css";

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

export default DashboardItem;
