import React from 'react';

const TrustBadge = ({ icon: Icon, text }) => {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/28 bg-white/12 px-5 py-3 shadow-[0_12px_34px_rgba(0,0,0,0.14)] backdrop-blur-md">
      <Icon className="h-4 w-4 text-[#f0d486]" />
      <span className="text-sm font-bold text-white/92">{text}</span>
    </div>
  );
};

export default TrustBadge;
