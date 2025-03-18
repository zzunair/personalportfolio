import '../styles/globals.css';
import Header from '../components/Header';
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';

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
    <div className="flex">
      <Header />
      <main className="ml-[286px] w-[calc(100%-286px)]">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
