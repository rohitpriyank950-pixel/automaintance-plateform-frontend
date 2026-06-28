import React from "react";

function Performance({ analysisData }) {
  const score = analysisData?.score || 74;

  const metrics = [
    { label: "Load Time", value: "3.4s", status: "yellow", note: "Target: <2s" },
    { label: "First Contentful Paint", value: "1.2s", status: "green", note: "Good" },
    { label: "Largest Contentful Paint", value: "4.1s", status: "red", note: "Poor" },
    { label: "Cumulative Layout Shift", value: "0.05", status: "green", note: "Good" },
  ];

  const resources = [
    { name: "Images", size: "8.2 MB", status: "bad" },
    { name: "JavaScript", size: "2.1 MB", status: "warn" },
    { name: "CSS", size: "340 KB", status: "ok" },
    { name: "Fonts", size: "180 KB", status: "ok" },
    { name: "HTML", size: "42 KB", status: "ok" },
  ];

  const weekData = [62, 68, 71, 65, 74, 78, 74];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div>
      {/* Metrics */}
      <div className="stats-grid">
        {metrics.map((m, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-label">{m.label}</div>
            <div className={`stat-value ${m.status}`}>{m.value}</div>
            <div className={`stat-sub ${m.status}`}>{m.note}</div>
          </div>
        ))}
      </div>

      {/* Score Bar Chart */}
      <div className="card">
        <div className="section-title">Performance Score — This Week</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "140px", marginTop: "12px" }}>
          {weekData.map((v, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{ fontSize: "11px", color: "#7b7b99" }}>{v}</div>
              <div style={{ width: "100%", flex: 1, display: "flex", alignItems: "flex-end" }}>
                <div style={{
                  width: "100%",
                  height: `${v}%`,
                  background: v >= 75 ? "#4ecca3" : v >= 60 ? "#6c63ff" : "#f7971e",
                  borderRadius: "4px 4px 0 0",
                  opacity: 0.85,
                  transition: "height 0.3s"
                }} />
              </div>
              <div style={{ fontSize: "11px", color: "#7b7b99" }}>{days[i]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Breakdown */}
      <div className="card">
        <div className="section-title">Resource Breakdown</div>
        {resources.map((r, i) => (
          <div className="audit-row" key={i}>
            <div className={`audit-icon ${r.status}`}>
              {r.status === "ok" ? "✅" : r.status === "warn" ? "⚠️" : "❌"}
            </div>
            <div style={{ flex: 1, color: "#e8e8f0" }}>{r.name}</div>
            <div style={{ fontSize: "12px", color: "#7b7b99" }}>{r.size}</div>
            <span className={`tag tag-${r.status === "bad" ? "bad" : r.status === "warn" ? "warn" : "ok"}`}>
              {r.status === "ok" ? "OK" : r.status === "warn" ? "Large" : "Too Big"}
            </span>
          </div>
        ))}
      </div>

      {/* Current Score */}
      <div className="card" style={{ textAlign: "center", padding: "24px" }}>
        <div style={{ fontSize: "13px", color: "#7b7b99", marginBottom: "8px" }}>
          {analysisData ? `Score for: ${analysisData.url}` : "Run analysis to get real score"}
        </div>
        <div style={{ fontSize: "48px", fontWeight: 700, color: score > 80 ? "#4ecca3" : score > 50 ? "#6c63ff" : "#ff5e7d" }}>
          {score}/100
        </div>
        <div style={{ fontSize: "13px", color: "#7b7b99", marginTop: "8px" }}>
          {score > 80 ? "Great performance! 🎉" : score > 50 ? "Room for improvement 💪" : "Needs urgent fixes ⚠️"}
        </div>
      </div>
    </div>
  );
}

export default Performance;