import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import BookService from './pages/BookService';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('/');

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPage(window.location.pathname);
    };

    // Listen for popstate event (browser back/forward)
    window.addEventListener('popstate', handleUrlChange);

    // Set the initial page
    handleUrlChange();

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // Update page title based on current page
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'Hari Ohm Electronics - Electronic Device Repair Services',
      '/services': 'Our Services - Hari Ohm Electronics',
      '/about': 'About Us - Hari Ohm Electronics',
      '/contact': 'Contact Us - Hari Ohm Electronics',
      '/book-service': 'Book a Service - Hari Ohm Electronics',
    };

    document.title = pageTitles[currentPage] || 'Hari Ohm Electronics';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Home />;
      case '/services':
        return <Services />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      case '/book-service':
        return <BookService />;
      default:
        // For any other path, render the home page for now
        // In a real app, this would be a 404 page
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;