import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  console.log("router", router.query.blogId);
  return (
    <div>
      index {router.query.blogId} of {router.query.reviewId}
    </div>
  );
};

export default Index;
