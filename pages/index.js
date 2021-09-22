import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
    date: '2021-09-19',
  },
  {
    slug: 'getting-started-with-nextjs-2',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
    date: '2021-09-19',
  },
  {
    slug: 'getting-started-with-nextjs-3',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
    date: '2021-09-19',
  },
  {
    slug: 'getting-started-with-nextjs-4',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
    date: '2021-09-19',
  },
];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
        <meta
          name='decription'
          content='Web programming and development blog by Miloš Kostadinović'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};
export default HomePage;
