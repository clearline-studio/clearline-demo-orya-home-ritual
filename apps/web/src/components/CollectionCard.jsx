
import React from 'react';
import { Button } from '@/components/ui/button';

const CollectionCard = ({ image, title, description, price, buttonText, onClick }) => {
  return (
    <div className="group bg-card rounded-2xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-medium text-primary">{price}</span>
          <Button 
            variant="outline" 
            onClick={onClick}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
