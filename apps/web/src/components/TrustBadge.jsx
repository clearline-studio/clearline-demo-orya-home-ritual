
import React from 'react';

const TrustBadge = ({ icon: Icon, text }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
      <Icon className="w-4 h-4 text-white/90" />
      <span className="text-sm font-medium text-white/90">{text}</span>
    </div>
  );
};

export default TrustBadge;
