import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Services from '../components/Services';
import Contact from '../components/Contact';

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    <div className="relative">
      {/* <Header /> */}
      <main className="w-full bg-black">
        <Head>
          <title>Zunair Shahid - Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <HeroBanner />
        <About />
        <Services />
        <Skills />
        <Resume />
        {story && <StoryblokComponent blok={story.content} />}
      </main>
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  try {
    let slug = "home";

    let sbParams = {
      version: "draft", // or 'published'
    };

    const storyblokApi = getStoryblokApi();
    
    // Check if storyblokApi is initialized properly
    if (!storyblokApi) {
      console.error("Storyblok API not initialized");
      return {
        props: {
          story: false,
          key: false,
        },
        revalidate: 3600,
      };
    }
    
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

    return {
      props: {
        story: data ? data.story : false,
        key: data ? data.story.id : false,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching Storyblok content:", error);
    return {
      props: {
        story: false,
        key: false,
      },
      revalidate: 3600,
    };
  }
}
