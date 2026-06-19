import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CustodyAndExecution from './pages/CustodyAndExecution';
import IndependentFirms from './pages/IndependentFirms';
import Consolidators from './pages/Consolidators';
import AiPracticeManagement from './pages/AiPracticeManagement';
import Integrations from './pages/Integrations';
import Security from './pages/Security';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/what-we-offer/ai-crm-for-financial-advisors" element={<AiPracticeManagement />} />
          <Route path="/what-we-offer/custody-and-execution" element={<CustodyAndExecution />} />
          <Route path="/whos-it-for/independent-firms" element={<IndependentFirms />} />
          <Route path="/whos-it-for/consolidators" element={<Consolidators />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
