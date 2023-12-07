import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  // Sort posts by date, newest first
  const sortedPosts = allPosts.sort((a, b) => {
    // Convert dates to timestamps for comparison
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return dateB - dateA; // For descending order (newest first)
  });

  return (
    <div className="prose dark:prose-invert">
      {sortedPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
