import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import blogImg1 from "../../assets/images/blog-image-1.png";
import blogImg2 from "../../assets/images/blog-image-2.png";
import blogImg3 from "../../assets/images/blog-image-3.png";

interface BlogCardProps {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  delay: number;
}

const BLOG_POSTS: BlogCardProps[] = [
  {
    id: 1,
    badge: "Expert Guide",
    title: "Curly Girl Method Guide",
    description: "Complete guide to the CGM with moodboards, tips, and step-by-step instructions designed specifically for Arab hair.",
    image: blogImg1,
    readTime: "5 min read",
    delay: 0.1,
  },
  {
    id: 2,
    badge: "Expert Guide",
    title: "Porosity & Hydration 101",
    description: "Understand your hair's porosity level and learn how to lock in moisture for 48 hours without weighing curls down.",
    image: blogImg2,
    readTime: "4 min read",
    delay: 0.2,
  },
  {
    id: 3,
    badge: "Expert Guide",
    title: "Protective Night Care Routine",
    description: "Sleep without frizz: silk bonnet techniques, pineapple updos, and overnight hydration secrets for long-lasting curls.",
    image: blogImg3,
    readTime: "6 min read",
    delay: 0.3,
  },
];

export const BlogArticlesSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#060e1e] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D5FD]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif italic text-[#00D5FD] text-xl sm:text-2xl mb-2"
            >
              Learn & Grow
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-gotham text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white max-w-2xl"
            >
              Your Curly Hair <br />
              <span className="text-[#00D5FD] font-normal">Journey Starts Here</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-gotham text-white/60 text-base max-w-md font-light"
          >
            Access expert guides, styling tips, and a community of women who celebrate their natural curls.
          </motion.p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: post.delay }}
              className="group relative rounded-3xl overflow-hidden bg-[#0d1d38]/60 border border-white/10 hover:border-[#00D5FD]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-[#0a162a]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d38] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-[#00D5FD]/20 backdrop-blur-md border border-[#00D5FD]/30 text-[#00D5FD] text-xs font-gotham px-3 py-1 rounded-full">
                      {post.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 text-white/60 text-xs font-gotham">
                    {post.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-gotham text-xl font-medium text-white mb-3 group-hover:text-[#00D5FD] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-gotham text-white/60 text-sm leading-relaxed font-light">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* Action link */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                <button className="flex items-center gap-2 font-gotham text-xs font-bold text-[#00D5FD] uppercase tracking-widest group-hover:gap-3 transition-all cursor-pointer">
                  <span>EXPLORE NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
