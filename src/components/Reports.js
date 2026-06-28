import React, { useState } from "react";

function Reports() {
  const [email, setEmail] = useState("");
  const [scheduled, setScheduled] = useState(false);

  const stats = [
    { label: "Avg Performance", value: "71/100", sub: "↑ +5 from May", subColor: "#4ecca3" },
    { label: "Total Downtime", value: "2h 14m", sub: "1 incident", subColor: "#ff5e7d" },
    { label: "Fixes Applied", value: "8", sub: "All resolved", subColor: "#4ecca3" },
    { label: "SEO Score", value: "68/100", sub: "↑ +3 from May", subColor: "#4ecca3" },
  ];

  const history = [
    { month: "May 2025", perf: 66, seo: 65, security: 88, status: "ok" },
    { month: "Apr 2025", perf: 61, seo: 60, security: 85, status: "ok" },
    { month: "Mar 2025", perf: 58, seo: 55, security: 80, status: "warn" },
  ];

  return (
    <div>
      {/* Current Month */}
      <div className="card">
        <div className="section-title">
          📊 Monthly Report — June 2025
          <button className="btn btn-primary btn-sm">⬇ Download PDF</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px", margin: "16px 0" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: "#1a1a2e", borderRadius: "8px", padding: "14px" }}>
              <div style={{ fontSize: "12px", color: "#7b7b99" }}>{s.label}</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#fff", margin: "4px 0" }}>{s.value}</div>
              <div style={{ fontSize: "11px", color: s.subColor }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Send to client */}
      <div className="card">
        <div className="section-title">📧 Auto-send Report to Client</div>
        <div style={{ fontSize: "13px", color: "#7b7b99", marginBottom: "12px" }}>
          Schedule monthly reports directly to your client's inbox.
        </div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
          <input
            className="input-url"
            style={{ flex: 1 }}
            placeholder="client@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if (email) setScheduled(true);
              else alert("Email daal bhai!");
            }}
          >
            Schedule
          </button>
        </div>
        {scheduled && (
          <div style={{
            padding: "10px 14px", background: "#1a2e25",
            borderRadius: "8px", fontSize: "13px", color: "#4ecca3"
          }}>
            ✅ Report scheduled for {email} — every 1st of month!
          </div>
        )}
      </div>

      {/* History */}
      <div className="card">
        <div className="section-title">📅 Report History</div>
        {history.map((r, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "16px",
            padding: "12px 0", borderBottom: "1px solid #2a2a40", fontSize: "13px"
          }}>
            <div style={{ width: "90px", color: "#fff", fontWeight: 500 }}>{r.month}</div>
            <div style={{ flex: 1, display: "flex", gap: "16px" }}>
              <span style={{ color: "#7b7b99" }}>Perf: <span className="purple">{r.perf}</span></span>
              <span style={{ color: "#7b7b99" }}>SEO: <span className="yellow">{r.seo}</span></span>
              <span style={{ color: "#7b7b99" }}>Security: <span className="green">{r.security}</span></span>
            </div>
            <button className="btn btn-outline btn-sm">⬇ Download</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;