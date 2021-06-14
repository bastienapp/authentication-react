import React from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

// eslint-disable-next-line react/prop-types
function MainLayout({ className, children }) {
  return (
    <div className={className}>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
