import React from "react";

function Dashboard({ analysisData, loading }) {
  const score = analysisData?.score || 74;
  const suggestions = analysisData?.suggestions || [
    "Compress images on homepage",
    "Minify JavaScript files",
    "Enable browser caching",
  ];

  return (
    <div>
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">⚡ Performance</div>
          <div className="stat-value purple">{score}/100</div>
          <div className={`stat-sub ${score > 80 ? "green" : score > 50 ? "yellow" : "red"}`}>
            {score > 80 ? "Good" : score > 50 ? "Needs work" : "Poor"}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">🔒 Security</div>
          <div className="stat-value green">91/100</div>
          <div className="stat-sub green">Good</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">🔍 SEO Score</div>
          <div className="stat-value yellow">68/100</div>
          <div className="stat-sub yellow">Improve</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">📡 Uptime</div>
          <div className="stat-value green">99.8%</div>
          <div className="stat-sub" style={{ color: "#7b7b99" }}>Last 30 days</div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="sections-grid">
        {/* Issues */}
        <div className="card">
          <div className="section-title">
            Quick Fixes
            <span className="tag tag-warn">{suggestions.length} pending</span>
          </div>
          {suggestions.map((s, i) => (
            <div className="audit-row" key={i}>
              <div className="audit-icon warn">⚠️</div>
              <div style={{ flex: 1, color: "#e8e8f0" }}>{s}</div>
              <span className="tag tag-warn">Fix</span>
            </div>
          ))}
          <div className="audit-row">
            <div className="audit-icon ok">✅</div>
            <div style={{ flex: 1, color: "#e8e8f0" }}>SSL certificate valid</div>
            <span className="tag tag-ok">Pass</span>
          </div>
          <div className="audit-row">
            <div className="audit-icon ok">✅</div>
            <div style={{ flex: 1, color: "#e8e8f0" }}>XML sitemap found</div>
            <span className="tag tag-ok">Pass</span>
          </div>
        </div>

        {/* Uptime */}
        <div className="card">
          <div className="section-title">Uptime — Last 30 days</div>
          <div className="uptime-bar">
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className={`uptime-day${i === 14 ? " down" : i === 22 ? " partial" : ""}`}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "#7b7b99" }}>
            <span><span className="green">■</span> Up</span>
            <span><span className="yellow">■</span> Partial</span>
            <span><span className="red">■</span> Down</span>
          </div>
          <div style={{ marginTop: "16px", padding: "12px", background: "#1a1a2e", borderRadius: "8px" }}>
            <div style={{ fontSize: "12px", color: "#7b7b99" }}>Last incident</div>
            <div style={{ fontSize: "13px", color: "#e8e8f0", marginTop: "4px" }}>
              16 Jun — 2h 14m downtime
            </div>
          </div>
        </div>
      </div>

      {/* Auto Fix Suggestions */}
      <div className="card">
        <div className="section-title">🛠️ Auto Fix Suggestions</div>
        {[
          { title: "Optimize & compress images", desc: "Found 14 uncompressed images totaling 8.2MB. Use WebP format.", impact: "+12 performance pts" },
          { title: "Add missing meta descriptions", desc: "6 pages are missing SEO meta descriptions.", impact: "+8 SEO pts" },
          { title: "Enable GZIP compression", desc: "Server response size can be reduced by ~70%.", impact: "+6 performance pts" },
        ].map((fix, i) => (
          <div className="fix-row" key={i}>
            <div className="fix-num">{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div className="fix-title">{fix.title}</div>
              <div className="fix-desc">{fix.desc}</div>
              <div className="fix-impact">{fix.impact}</div>
            </div>
            <button className="btn btn-primary btn-sm">Auto Fix</button>
          </div>
        ))}
      </div>

      {loading && (
        <div style={{ textAlign: "center", padding: "20px", color: "#6c63ff", fontSize: "14px" }}>
          ⏳ Analyzing website...
        </div>
      )}
    </div>
  );
}

export default Dashboard;