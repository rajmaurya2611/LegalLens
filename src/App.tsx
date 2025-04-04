
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import AnalysisPage from "./pages/analysis";
import ComparisonPage from "./pages/comparison";
import RiskAnalysisPage from "./pages/risk_analysis";
import ClauseCheckPage from "./pages/clause_check";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/risk_analysis" element={<RiskAnalysisPage/>} />
        <Route path="/clause" element={<ClauseCheckPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
