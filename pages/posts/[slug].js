import { Fragment } from 'react';
import Head from 'next/dist/next-server/lib/head';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name='decription' content={props.post.excerpt} />
      </Head>

      <PostContent post={props.post} />
    </Fragment>
  );
};

export const getStaticProps = (context) => {
  console.log(context.params);
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => {
    return fileName.replace(/\.md$/, '');
  });
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
