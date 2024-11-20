"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/Container';
import { useAnimateInView } from '@/app/hooks/useAnimateInView';
import { images } from '@/app/constants/images';

const featuredPost = {
  id: 'featured-post',
  title: 'Understanding Modern Web Development',
  excerpt: 'Explore the latest trends and technologies in web development, from React Server Components to Edge Computing.',
  image: images.blog.hero,
  date: '2024-03-20',
  readTime: '6 min read',
  category: 'Web Development',
  author: {
    name: 'Jihad',
    image: images.profile
  }
};

const BlogHero = () => {
  const { ref, controls } = useAnimateInView();

  return (
    <section className="py-20" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Blog & Articles
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights, thoughts, and discoveries from my journey in web development.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <Link href={`/blog/${featuredPost.id}`}>
            <div className="relative aspect-[21/9]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
                <span>•</span>
                <span>{featuredPost.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                {featuredPost.title}
              </h2>
              <p className="text-gray-400 mb-4">
                {featuredPost.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={featuredPost.author.image}
                    alt={featuredPost.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">
                    {featuredPost.author.name}
                  </div>
                  <div className="text-gray-400">
                    Author
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default BlogHero; 