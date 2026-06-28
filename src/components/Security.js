import React from "react";

function Security() {
  const checks = [
    { label: "SSL Certificate valid (Let's Encrypt)", status: "pass" },
    { label: "HTTPS redirect enabled", status: "pass" },
    { label: "Security headers (CSP, HSTS)", status: "pass" },
    { label: "No mixed content warnings", status: "pass" },
    { label: "CMS version up to date", status: "fail" },
    { label: "Admin login brute-force protection", status: "pass" },
    { label: "Malware scan — clean", status: "pass" },
    { label: "Vulnerable plugins detected (2)", status: "fail" },
  ];

  const passed = checks.filter((c) => c.status === "pass").length;
  const failed = checks.filter((c) => c.status === "fail").length;
  const score = Math.round((passed / checks.length) * 100);

  return (
    <div>
      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="stat-card">
          <div className="stat-label">🔒 Security Score</div>
          <div className={`stat-value ${score > 80 ? "green" : score > 60 ? "yellow" : "red"}`}>
            {score}/100
          </div>
          <div className="stat-sub" style={{ color: "#7b7b99" }}>Overall</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">✅ Checks Passed</div>
          <div className="stat-value green">{passed}</div>
          <div className="stat-sub green">No issues</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">❌ Issues Found</div>
          <div className="stat-value red">{failed}</div>
          <div className="stat-sub red">Needs fix</div>
        </div>
      </div>

      {/* Checklist */}
      <div className="card">
        <div className="section-title">
          Security Checklist
          <span style={{ fontSize: "12px", color: "#7b7b99" }}>Last scan: 2h ago</span>
        </div>
        {checks.map((c, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "12px",
            padding: "10px 0", borderBottom: "1px solid #2a2a40", fontSize: "13px"
          }}>
            <div style={{
              width: "22px", height: "22px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "12px", flexShrink: 0,
              background: c.status === "pass" ? "#1a2e25" : "#2e1820",
              color: c.status === "pass" ? "#4ecca3" : "#ff5e7d"
            }}>
              {c.status === "pass" ? "✓" : "✕"}
            </div>
            <div style={{ flex: 1, color: "#e8e8f0" }}>{c.label}</div>
            <span className={`tag ${c.status === "pass" ? "tag-ok" : "tag-bad"}`}>
              {c.status === "pass" ? "Pass" : "Fix"}
            </span>
          </div>
        ))}
      </div>

      {/* Action Box */}
      <div className="card">
        <div className="section-title">🛠️ Recommended Actions</div>
        {checks.filter(c => c.status === "fail").map((c, i) => (
          <div className="fix-row" key={i}>
            <div className="fix-num">{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div className="fix-title">{c.label}</div>
              <div className="fix-desc">
                {i === 0
                  ? "Update your CMS to the latest version to patch known vulnerabilities."
                  : "Remove or update vulnerable plugins immediately."}
              </div>
              <div className="fix-impact">High priority</div>
            </div>
            <button className="btn btn-primary btn-sm">How to Fix</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Security;