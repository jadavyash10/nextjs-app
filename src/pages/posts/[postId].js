import React from "react";
import { useRouter } from "next/router";

const PostDetail = ({ post }) => {
  const routes = useRouter();
  if (routes.isFallback) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h6>{post.id}</h6>
      <h6>{post.title}</h6>
      <h6>{post.body}</h6>
    </div>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((data) => {
    return {
      params: { postId: `${data.id}` },
    };
  });
  return {
    // paths: [
    //   { params: { postId: "1" } },
    //   { params: { postId: "2" } },
    //   { params: { postId: "3" } },
    // ],
    paths,
    fallback: false,
    // fallback: true,
    // fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params.postId);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}
