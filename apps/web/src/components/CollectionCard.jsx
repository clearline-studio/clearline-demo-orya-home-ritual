import React from 'react';
import { ArrowRight } from 'lucide-react';

const CollectionCard = ({ image, title, price, description }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#e9dfce] bg-white shadow-[0_22px_70px_rgba(55,43,30,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_90px_rgba(55,43,30,0.14)]">
      <div className="relative h-[19rem] overflow-hidden bg-[#efe8dc] sm:h-[22rem] lg:h-[25rem]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/32 via-black/5 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/88 px-4 py-2 text-sm font-bold text-[#423523] shadow-[0_10px_26px_rgba(0,0,0,0.1)] backdrop-blur-sm">
          {price}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-7 py-7 lg:px-8 lg:py-8">
        <h3 className="mb-3 text-[1.65rem] font-bold leading-[1.05] tracking-[-0.035em] text-[#2f281f] lg:text-[1.9rem]">
          {title}
        </h3>
        {description && (
          <p className="mb-6 line-clamp-3 text-[1.02rem] leading-7 text-[#6c6256]">
            {description}
          </p>
        )}
        <a href="#gift-boxes" className="mt-auto inline-flex w-fit items-center gap-3 rounded-full border border-[#d8c696] px-5 py-3 text-[0.92rem] font-bold text-[#3a2c1c] transition-all hover:border-[#c9a84f] hover:bg-[#c9a84f] hover:text-[#21180f]">
          View collection
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
};

export default CollectionCard;
