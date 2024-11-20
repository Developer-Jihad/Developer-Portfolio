const BlogSchema = ({ posts }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "headline": "Blog & Insights",
          "description": "Insights and tutorials about web development, programming, and technology.",
          "author": {
            "@type": "Person",
            "name": "Jihad"
          },
          "blogPost": posts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author.name
            },
            "datePublished": post.date,
            "image": post.image,
            "articleSection": post.category
          }))
        })
      }}
    />
  );
};

export default BlogSchema; 