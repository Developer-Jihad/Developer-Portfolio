"use client";
import { useState } from "react";
import Container from "@/app/components/ui/Container";
import FeaturedBlog from "@/app/components/blog/FeaturedBlog";
import BlogGrid from "@/app/components/blog/BlogGrid";
import { getBlogs } from "@/app/utils/getData";

async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Latest
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"> Articles</span>
        </h1>
        <p className="text-white/60">
          Discover insights and tutorials about web development
        </p>
      </div>

      {/* Featured Blog */}
      {blogs.length > 0 && <FeaturedBlog blog={blogs[0]} />}

      {/* Blog Grid */}
      <BlogGrid blogs={blogs} />
    </div>
  );
}

export default BlogPage; 