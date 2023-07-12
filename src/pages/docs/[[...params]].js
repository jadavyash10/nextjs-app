import { useRouter } from "next/router";
import React from "react";

const Docs = () => {
  const router = useRouter();
  const { params } = router.query;

  const handleClick = (id) => {
    console.log("first click", id);
    router.replace("/");
  };

  return (
    <div>
      <h1>Hello docs!!</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Docs;
