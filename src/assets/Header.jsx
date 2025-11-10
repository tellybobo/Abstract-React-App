
import react, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header>
      <div className={`nav-container ${showSearch ? 'search-active' : ''}`}>
        <nav className="nav-icon">
          {!showSearch && (
            <div className="logo-section">
              <a href=""><h1><FontAwesomeIcon icon={faCamera} /> Abstract</h1></a>
              <span className="vertical-line"></span>
              <a href=""><h2 className="help-center">Help Center</h2></a> 
            </div>
          )}
          <div className="nav-input">
            {showSearch ? (
              <div className="mobile-search-active">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="mobile-search-input"
                  autoFocus
                />
                <button 
                  className="close-search"
                  onClick={() => setShowSearch(false)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ) : (
              <>
                <input type="text" placeholder="Search" className="desktop-input" />
                <button 
                  className="mobile-search"
                  onClick={() => setShowSearch(true)}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <button className="submit-button desktop-btn">Submit a request</button>
                <button className="signin-button desktop-btn">Sign in</button>
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
              </>
            )}
          </div>
        </nav>
        {isOpen && (
          <div className="mobile-menu">
            <a href="#">Submit a request</a>
            <hr className="mobile-menu-divider" />
            <a href="#">Sign in</a>
          </div>
        )}
      </div>
    </header>
  );
}