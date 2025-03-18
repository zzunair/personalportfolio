import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Resume from "../components/Resume";


import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    <div className="flex overflow-hidden">
      <Header />
      <main className="w-[calc(100%)] bg-black">
        <Head>
          <title>Zunair Shahid - Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroBanner />
        <About />
        <Skills />
        <Resume />
        {story && <StoryblokComponent blok={story.content} />}
      </main>
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
