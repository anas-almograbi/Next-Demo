import Link from "next/link";
import React from "react";

// Define a type for the post data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Post() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const todos: Post[] = await res.json(); // Use the Post type

  const post = todos.map((el) => (
    <Link key={el.id} href={`/post/${el.id}`}>
      <div className="mt-4 bg-red-50 text-zinc-950 text-center container mx-auto p-4 shadow-lg">
        <h1 className="font-bold">{el.title}</h1>
        <p>{el.body}</p>
      </div>
    </Link>
  ));

  return (
    <div>
      <h1>Article</h1>
      {post}
    </div>
  );
}
