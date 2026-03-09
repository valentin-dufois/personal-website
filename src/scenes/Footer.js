import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/valentin-dufois" target="_blank" rel="noopener noreferrer">
          <span className="w">gh</span>::<span className="w">valentin-dufois</span>
        </a>
        <a href="https://www.linkedin.com/in/valentindufois/" target="_blank" rel="noopener noreferrer">
          <span className="w">in</span>::<span className="w">valentindufois</span>
        </a>
      </div>
      <a href="mailto:valentin@dufois.fr" className="contact-me-plz">
        <span className="w">valentin</span>::at::<span className="w">dufois</span>::dot::<span className="w">fr</span>
      </a>
    </footer>
  );
};

export default Footer;
