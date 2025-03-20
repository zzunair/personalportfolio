import '../styles/globals.css';
import Header from '../components/Header';
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';
import { useState, useEffect } from 'react';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Portfolio: Portfolio,
  Proj: Project
};

storyblokInit({
  accessToken: "yCJGw3AL2Jk0JprQFr7r3gtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: 'us'
  }
});

function MyApp({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle body scroll locking when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Apply styles to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scrolling and position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }

    return () => {
      // Cleanup function to ensure scrolling is restored
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className={`relative ${isMenuOpen ? 'overflow-hidden h-screen' : ''}`}>
      <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <main className="w-full md:w-[calc(100%-286px)] md:ml-[286px]">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
