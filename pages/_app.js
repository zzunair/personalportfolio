import '../styles/globals.css';
import Header from '../components/Header';
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';
import { NavigationProvider } from '../context/NavigationContext';

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
  return (
    <NavigationProvider>
      <div className="relative flex min-h-screen overflow-hidden">
        <Header />
        <div className="flex-1 md:ml-[286px]">
          <Component {...pageProps} />
        </div>
      </div>
    </NavigationProvider>
  );
}

export default MyApp;
