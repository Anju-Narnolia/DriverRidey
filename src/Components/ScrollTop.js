import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the route changes
  }, [pathname]);

  return
}

export default ScrollTop;