import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  // Sort posts by date, newest first
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // For descending order (newest first)
  });

  // Function to format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
  };

  return (
    <div className="prose">
      <h2 style={{ marginTop: '30px' }}>Selected Posts</h2>
      <ul>
        {sortedPosts.map((post) => (
          <li key={post._id}>
            <Link href={post.slug}>
              {post.title}, 
            </Link> {formatDate(post.date)}
          </li>
        ))}
      </ul>
    </div>
  );
}