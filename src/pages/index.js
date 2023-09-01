import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Hello world!</h2>
        <h1 className="title">
          Read <Link href="/posts/firstPost">this page!</Link>
        </h1>
        <div>
          <h1>Posts</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/posts/template/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
