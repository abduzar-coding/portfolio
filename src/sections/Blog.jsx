import { useState } from "react";
import blogPosts from "../data/blogPosts";
import BlogCard from "../components/BlogCard";
import BlogModal from "../components/BlogModal";

export default function Blog() {
  const [activePost, setActivePost] = useState(null);

  return (
    <section id="blog" className="px-4 sm:px-8 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Blog</h2>
        <p className="text-muted dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Thoughts, lessons, and tutorials from my journey as a front-end developer.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {blogPosts.map(post => (
            <BlogCard key={post.id} {...post} onReadMore={() => setActivePost(post)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activePost && (
        <BlogModal post={activePost} onClose={() => setActivePost(null)} />
      )}
    </section>
  );
}
