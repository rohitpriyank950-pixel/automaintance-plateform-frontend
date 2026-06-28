import React from "react";

function SEO() {
  const onPage = [
    { label: "Title tags", value: "All present", status: "ok" },
    { label: "Meta descriptions", value: "6 missing", status: "warn" },
    { label: "H1 tags", value: "Duplicates found", status: "warn" },
    { label: "Image alt text", value: "18 missing", status: "bad" },
    { label: "Canonical tags", value: "OK", status: "ok" },
  ];

  const technical = [
    { label: "XML Sitemap", value: "Present", status: "ok" },
    { label: "Robots.txt", value: "Valid", status: "ok" },
    { label: "Page speed", value: "74/100", status: "warn" },
    { label: "Mobile friendly", value: "Yes", status: "ok" },
    { label: "Schema markup", value: "Missing", status: "bad" },
  ];

  const tagColor = (s) =>
    s === "ok" ? "tag-ok" : s === "warn" ? "tag-warn" : "tag-bad";
  const tagText = (s) =>
    s === "ok" ? "Good" : s === "warn" ? "Fix" : "Poor";

  return (
    <div>
      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="stat-card">
          <div className="stat-label">🔍 SEO Score</div>
          <div className="stat-value yellow">68/100</div>
          <div className="stat-sub yellow">Needs improvement</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">📄 Indexed Pages</div>
          <div className="stat-value green">24</div>
          <div className="stat-sub green">All crawlable</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">🔗 Broken Links</div>
          <div className="stat-value red">3</div>
          <div className="stat-sub red">Fix immediately</div>
        </div>
      </div>

      {/* Two column audit */}
      <div className="sections-grid">
        <div className="card">
          <div className="section-title">On-page SEO</div>
          {onPage.map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #2a2a40",
              fontSize: "13px"
            }}>
              <div style={{ color: "#7b7b99" }}>{item.label}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#e8e8f0" }}>{item.value}</span>
                <span className={`tag ${tagColor(item.status)}`}>{tagText(item.status)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="section-title">Technical SEO</div>
          {technical.map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #2a2a40",
              fontSize: "13px"
            }}>
              <div style={{ color: "#7b7b99" }}>{item.label}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#e8e8f0" }}>{item.value}</span>
                <span className={`tag ${tagColor(item.status)}`}>{tagText(item.status)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fix suggestions */}
      <div className="card">
        <div className="section-title">🛠️ SEO Fix Suggestions</div>
        {[
          { title: "Add missing meta descriptions", desc: "6 pages have no meta description — hurts CTR in Google.", impact: "+8 SEO pts" },
          { title: "Fix duplicate H1 tags", desc: "Multiple H1s on same page confuses search engines.", impact: "+5 SEO pts" },
          { title: "Add image alt text", desc: "18 images missing alt text — bad for accessibility & SEO.", impact: "+6 SEO pts" },
          { title: "Add Schema markup", desc: "Structured data helps Google show rich results.", impact: "+4 SEO pts" },
        ].map((fix, i) => (
          <div className="fix-row" key={i}>
            <div className="fix-num">{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div className="fix-title">{fix.title}</div>
              <div className="fix-desc">{fix.desc}</div>
              <div className="fix-impact">{fix.impact}</div>
            </div>
            <button className="btn btn-outline btn-sm">View Pages</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SEO;