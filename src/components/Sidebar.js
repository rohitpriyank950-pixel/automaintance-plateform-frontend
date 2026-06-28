import React from "react";

const navItems = [
  { id: "dashboard", icon: "🏠", label: "Dashboard", section: "Overview" },
  { id: "performance", icon: "⚡", label: "Performance", section: null },
  { id: "security", icon: "🔒", label: "Security", section: null },
  { id: "seo", icon: "🔍", label: "SEO Audit", section: null },
  { id: "reports", icon: "📊", label: "Monthly Report", section: "Reports" },
  { id: "alerts", icon: "🔔", label: "Alerts", section: null },
];

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">⚙</div>
        WebCare Pro
      </div>

      {navItems.map((item) => (
        <React.Fragment key={item.id}>
          {item.section && (
            <div className="nav-section">{item.section}</div>
          )}
          <div
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </div>
        </React.Fragment>
      ))}
      <div className="nav-bottom">
        <div style={{ color: "#fff", marginBottom: "4px" }}>Free Plan</div>
        <span>Upgrade to Pro →</span>
      </div>
    </div>
  );
}

export default Sidebar;