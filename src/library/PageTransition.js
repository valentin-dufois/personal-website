import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState('enter');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setStage('exit');
    }
  }, [location.pathname, displayLocation.pathname]);

  const handleAnimationEnd = (e) => {
    if (e.target !== e.currentTarget) return;

    if (stage === 'exit') {
      setDisplayLocation(location);
      setStage('enter');
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div className={`page-transition ${stage}`} onAnimationEnd={handleAnimationEnd}>
      {children(displayLocation)}
    </div>
  );
};

export default PageTransition;
