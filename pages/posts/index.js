import { Fragment } from 'react';
import Head from 'next/dist/next-server/lib/head';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

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
const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='decription'
          content='List of all my web development posts'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: { posts: allPosts },
  };
};
export default AllPostsPage;
