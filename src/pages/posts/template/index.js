import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <button type="button" onClick={() => router.push("/posts/firstPost")}>
        Dashboard
      </button>
    </>
  );
};

export default Index;
