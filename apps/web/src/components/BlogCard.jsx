import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ title, excerpt, image, readMoreLink }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-[#e9dfce] bg-white shadow-[0_18px_60px_rgba(55,43,30,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(55,43,30,0.13)]">
      <div className="relative h-[18rem] overflow-hidden bg-[#efe8dc] lg:h-[21rem]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-7 lg:p-8">
        <h3 className="mb-3 text-[1.55rem] font-bold leading-[1.08] tracking-[-0.035em] text-[#2f281f] lg:text-[1.75rem]">
          {title}
        </h3>
        {excerpt && (
          <p className="mb-6 line-clamp-3 text-[1rem] leading-7 text-[#6c6256]">
            {excerpt}
          </p>
        )}
        <a
          href={readMoreLink || '#'}
          className="mt-auto inline-flex items-center gap-2 text-[0.95rem] font-bold text-[#9d7b33] transition-all hover:gap-3 hover:text-[#6e5221]"
        >
          Read article
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
