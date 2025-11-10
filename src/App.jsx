import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './assets/Header';
import Body from './assets/Body';
import Footer from './assets/Footer';
import StartTrial from './Start-trial';
import Pricing from './assets/Pricing';
import Signin from './assets/Signin';
import Organization from './assets/Createorjoin';
import Existingorganization from './assets/ExistingOrganization';
import Neworganization from './assets/Neworganization';
import TrialAgreement from './assets/Trial-agreement';
import Usepolicy from './assets/Acceptable-use-policy';
import Privacypolicy from './assets/Privacy-policy';
import Customerservice from './assets/Customer-services';
import Cookiespolicy from './assets/Cookies-policy';
import './App.css';


function App() {
  const location = useLocation();

  // Make the path lowercase for comparison
  const currentPath = location.pathname.toLowerCase();

  // Hide layout on pricing and start trial only
  const hideLayout =
    currentPath === "/starttrial" ||
    currentPath === "/pricing" || 
    currentPath === "/signin" ||
    currentPath === "/createorjoin" ||
    currentPath === "/existingorganization" ||
    currentPath === "/new-organization" ||
    currentPath === "/trial-agreement" ||
    currentPath === "/acceptable-use-policy" ||
    currentPath === "/privacy-policy" ||
    currentPath === "/customer-services" ||
    currentPath === "/cookies-policy";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/starttrial" element={<StartTrial />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/createorjoin" element={<Organization />} />
        <Route path="/existingOrganization" element={<Existingorganization />} />
        <Route path="/new-organization" element={<Neworganization />} />
        <Route path="/trial-agreement" element={<TrialAgreement />} />
        <Route path="/acceptable-use-policy" element={<Usepolicy />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/customer-services" element={<Customerservice />} />
        <Route path="/cookies-policy" element={<Cookiespolicy />} />
        
      </Routes>

      {!hideLayout && <Footer />}
       
    </>
  );
}

export default App;