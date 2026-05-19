
import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ title, excerpt, image, readMoreLink }) => {
  return (
    <article className="group bg-card rounded-2xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 leading-snug">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{excerpt}</p>
        <a 
          href={readMoreLink}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
        >
          Read article
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
