import React, { useState } from "react";

function Alerts() {
  const [alerts, setAlerts] = useState([
    { id: 1, label: "Performance drops below", value: "70", enabled: true },
    { id: 2, label: "Uptime drops below", value: "99%", enabled: true },
    { id: 3, label: "Security issue detected", value: "", enabled: true },
    { id: 4, label: "New broken link found", value: "", enabled: false },
    { id: 5, label: "SSL expiry (30 days before)", value: "", enabled: true },
  ]);

  const [notify, setNotify] = useState({ email: true, whatsapp: false, slack: false });
  const [saved, setSaved] = useState(false);

  const toggleAlert = (id) => {
    setAlerts(alerts.map((a) => a.id === id ? { ...a, enabled: !a.enabled } : a));
  };

  const toggleNotify = (key) => {
    setNotify({ ...notify, [key]: !notify[key] });
  };

  return (
    <div>
      {/* Alert Toggles */}
      <div className="card">
        <div className="section-title">🔔 Alert Configuration</div>
        {alerts.map((a) => (
          <div key={a.id} style={{
            display: "flex", alignItems: "center", gap: "12px",
            padding: "12px 0", borderBottom: "1px solid #2a2a40"
          }}>
            <div style={{ flex: 1, fontSize: "13px", color: "#e8e8f0" }}>
              {a.label} {a.value && <strong style={{ color: "#fff" }}>{a.value}</strong>}
            </div>
            <div
              onClick={() => toggleAlert(a.id)}
              style={{
                width: "40px", height: "22px",
                borderRadius: "99px",
                background: a.enabled ? "#6c63ff" : "#2a2a40",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.2s",
                flexShrink: 0
              }}
            >
              <div style={{
                width: "18px", height: "18px",
                borderRadius: "50%", background: "#fff",
                position: "absolute", top: "2px",
                left: a.enabled ? "20px" : "2px",
                transition: "left 0.2s"
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Notify Via */}
      <div className="card">
        <div className="section-title">📡 Notify Via</div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { key: "email", label: "📧 Email" },
            { key: "whatsapp", label: "💬 WhatsApp" },
            { key: "slack", label: "🔔 Slack" },
          ].map((n) => (
            <div
              key={n.key}
              onClick={() => toggleNotify(n.key)}
              className={`tag ${notify[n.key] ? "tag-ok" : ""}`}
              style={{
                padding: "8px 16px", cursor: "pointer", fontSize: "13px",
                background: notify[n.key] ? "#1a2e25" : "#1a1a2e",
                color: notify[n.key] ? "#4ecca3" : "#7b7b99",
                borderRadius: "99px", border: `1px solid ${notify[n.key] ? "#4ecca3" : "#2a2a40"}`,
                transition: "all 0.15s"
              }}
            >
              {n.label}
            </div>
          ))}
        </div>
        <div style={{ fontSize: "12px", color: "#7b7b99", marginTop: "12px" }}>
          WhatsApp aur Slack ke liye Pro plan chahiye.
        </div>
      </div>

      {/* Save Button */}
      <div className="card" style={{ textAlign: "center" }}>
        <button
          className="btn btn-primary"
          style={{ padding: "10px 32px", fontSize: "14px" }}
          onClick={() => setSaved(true)}
        >
          💾 Save Alert Settings
        </button>
        {saved && (
          <div style={{ marginTop: "12px", fontSize: "13px", color: "#4ecca3" }}>
            ✅ Settings saved successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export default Alerts;