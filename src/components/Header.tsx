import React from 'react';
import svgPaths from "../imports/svg-f2rq7vxjus"; // Using svg from Question 1 which has back arrow

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  className?: string;
}

export function Header({ title, showBack, onBack, className = "" }: HeaderProps) {
  return (
    <div className={`absolute top-[44px] left-0 right-0 h-[44px] flex items-center justify-center bg-[#eaf2ff] ${className}`}>
      {showBack && (
        <button 
          onClick={onBack}
          className="absolute left-[23px] size-[20px] cursor-pointer"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g>
              <mask height="20" id="mask0_header_back" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="4" y="0">
                <path clipRule="evenodd" d={svgPaths.p16eaa040} fill="currentColor" fillRule="evenodd" />
              </mask>
              <g mask="url(#mask0_header_back)">
                <rect fill="#006FFD" height="20" width="20" />
              </g>
            </g>
          </svg>
        </button>
      )}
      <p className="font-bold text-[#1f2024] text-[14px] text-center">{title}</p>
    </div>
  );
}
