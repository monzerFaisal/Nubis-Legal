import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';
import ContractDraftingandReview from "./components/Services/ServicesPages/ContractDraftingandReview"
import LegalConsultation from "./components/Services/ServicesPages/LegalConsultation"
import CompanyFormationandRegistration from "./components/Services/ServicesPages/CompanyFormationandRegistration"
import TrademarkandIntellectualPropertyRegistration from "./components/Services/ServicesPages/TrademarkandIntellectualPropertyRegistration"
import LegalDocumentPreparation from "./components/Services/ServicesPages/LegalDocumentPreparation"
import DebtCollection from "./components/Services/ServicesPages/DebtCollection"
import LitigationandCourtDocuments from "./components/Services/ServicesPages/LitigationandCourtDocuments"
import DisputeResolution from "./components/Services/ServicesPages/DisputeResolution"
import ContractReviewandAnalysis from "./components/Services/ServicesPages/ContractReviewandAnalysis"
import RealEstateLegalSupport from "./components/Services/ServicesPages/RealEstateLegalSupport"
import TaxandFinancialLegalServices from "./components/Services/ServicesPages/TaxandFinancialLegalServices"
import RegulatoryandLegalCompliance from "./components/Services/ServicesPages/RegulatoryandLegalCompliance"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          {/* ============================================================ */}
          <Route path="/services/ServicesPages/ContractDraftingandReview.jsx" element={< ContractDraftingandReview/>} />
          <Route path="/services/ServicesPages/LegalConsultation.jsx" element={< LegalConsultation/>} />
          <Route path="/services/ServicesPages/CompanyFormationandRegistration.jsx" element={< CompanyFormationandRegistration/>} />
          <Route path="/services/ServicesPages/TrademarkandIntellectualPropertyRegistration.jsx" element={< TrademarkandIntellectualPropertyRegistration/>} />
          <Route path="/services/ServicesPages/LegalDocumentPreparation.jsx" element={< LegalDocumentPreparation/>} />
          <Route path="/services/ServicesPages/DebtCollection.jsx" element={< DebtCollection/>} />
          <Route path="/services/ServicesPages/LitigationandCourtDocuments.jsx" element={< LitigationandCourtDocuments/>} />
          <Route path="/services/ServicesPages/DisputeResolution.jsx" element={< DisputeResolution/>} />
          <Route path="/services/ServicesPages/ContractReviewandAnalysis.jsx" element={< ContractReviewandAnalysis/>} />
          <Route path="/services/ServicesPages/RealEstateLegalSupport.jsx" element={< RealEstateLegalSupport/>} />
          <Route path="/services/ServicesPages/TaxandFinancialLegalServices.jsx" element={< TaxandFinancialLegalServices/>} />
          <Route path="/services/ServicesPages/RegulatoryandLegalCompliance.jsx" element={< RegulatoryandLegalCompliance/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </StrictMode>
);
