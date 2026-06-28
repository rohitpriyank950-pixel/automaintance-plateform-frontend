import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Performance from "./components/Performance";
import Security from "./components/Security";
import SEO from "./components/SEO";
import Reports from "./components/Reports";
import Alerts from "./components/Alerts";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [url, setUrl] = useState("");
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAnalyze = async () => {
    if (!url) return alert("URL daal bhai!");
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/analyze?url=${url}`);
      const data = await res.json();
      const audits = data?.lighthouseResult?.audits || {};
      const suggestions = Object.values(audits)
        .filter((a) => a.score !== null && a.score < 0.9)
        .slice(0, 5)
        .map((a) => a.title);
      const score = Math.round(
        (data?.lighthouseResult?.categories?.performance?.score || 0) * 100
      );
      setAnalysisData({ score, suggestions, url });
    } catch (err) {
      alert("Error! Backend chal raha hai?");
    }
    setLoading(false);
  };

  const renderPage = () => {
    const props = { analysisData, loading };
    if (activeTab === "dashboard") return <Dashboard {...props} />;
    if (activeTab === "performance") return <Performance {...props} />;
    if (activeTab === "security") return <Security {...props} />;
    if (activeTab === "seo") return <SEO {...props} />;
    if (activeTab === "reports") return <Reports {...props} />;
    if (activeTab === "alerts") return <Alerts />;
  };

  return (
    <div className="app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main">
        <div className="topbar">
          <div>
            <div className="topbar-sub">Good morning 👋</div>
            <h1 className="topbar-title">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>
          <div className="topbar-right">
            <input
              className="input-url"
              placeholder="https://yourwebsite.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="btn btn-primary" onClick={runAnalyze}>
              {loading ? "Analyzing..." : "Analyze"}
            </button>
          </div>
        </div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;