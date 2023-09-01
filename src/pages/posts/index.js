import Link from "next/link";
import React from "react";
import User from "../../../components/User";

const index = ({ users }) => {
  console.log(users);
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`posts/${user.id}`}>{user.title}</Link>
          </div>
        );
      })}
    </>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
}
