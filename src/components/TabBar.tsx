import React from 'react';
import { Screen } from '../lib/types';
// Referencing the SVG paths from one of the imported files that contains the tab bar icons
import svgPaths from "../imports/svg-0b5v0cbgtk";

interface TabBarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function TabBar({ currentScreen, onNavigate }: TabBarProps) {
  return (
    <div className="absolute bg-[#eaf2ff] bottom-0 content-stretch flex gap-[4px] h-[88px] items-start left-0 pb-[32px] pt-[16px] px-[16px] right-0 z-50 shadow-[0_-1px_10px_rgba(0,0,0,0.05)]">
      {/* Home Tab */}
      <div 
        onClick={() => onNavigate('home')}
        className="cursor-pointer content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative"
      >
        <div className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g>
              <mask height="18" id="mask0_tab_home" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="1" y="1">
                <path d={svgPaths.p575dbf0} fill="currentColor" id="Shape" />
              </mask>
              <g mask="url(#mask0_tab_home)">
                <rect fill={currentScreen === 'home' ? "#006FFD" : "#C5C6CC"} height="20" width="20" />
              </g>
            </g>
          </svg>
        </div>
        <p className={`text-[10px] text-center font-bold ${currentScreen === 'home' ? 'text-[#2f3036]' : 'text-[#71727a] font-normal'}`}>
          今日の質問
        </p>
      </div>

      {/* Dialog Tab */}
      <div 
        onClick={() => onNavigate('dialog')}
        className="cursor-pointer content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px relative"
      >
        <div className="relative shrink-0 size-[23px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
            <g>
              <path d={svgPaths.p3218a80} fill={currentScreen === 'dialog' ? "#006FFD" : "#C5C6CC"} />
              <path d={svgPaths.p2a67e800} fill={currentScreen === 'dialog' ? "#006FFD" : "#C5C6CC"} />
            </g>
          </svg>
        </div>
        <p className={`text-[10px] text-center ${currentScreen === 'dialog' ? 'text-[#2f3036] font-bold' : 'text-[#71727a] font-normal'}`}>
          ダイアログ
        </p>
      </div>

      {/* Settings Tab */}
      <div 
        onClick={() => onNavigate('settings')}
        className="cursor-pointer content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative"
      >
        <div className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g clipPath="url(#clip0_tab_settings)">
              <mask height="20" id="mask0_tab_settings" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                <path d={svgPaths.p189ea880} fill="currentColor" />
              </mask>
              <g mask="url(#mask0_tab_settings)">
                <rect fill={currentScreen === 'settings' ? "#006FFD" : "#C5C6CC"} height="20" width="20" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_tab_settings">
                <rect fill="white" height="20" width="20" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className={`text-[10px] text-center ${currentScreen === 'settings' ? 'text-[#2f3036] font-bold' : 'text-[#71727a] font-normal'}`}>
          設定
        </p>
      </div>
    </div>
  );
}
