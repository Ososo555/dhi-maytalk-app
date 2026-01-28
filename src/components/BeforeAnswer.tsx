import React from 'react';
import svgPaths from "../imports/svg-0b5v0cbgtk";

interface BeforeAnswerProps {
  onStart: () => void;
  consecutiveDays: number;
}

export function BeforeAnswer({ onStart, consecutiveDays }: BeforeAnswerProps) {
  return (
    <div className="relative size-full bg-white pt-[88px] pb-[100px] overflow-y-auto">
      {/* Content Switcher / Badge */}
      <div className="mx-[16px] mt-[22px] bg-[#f8f9fe] rounded-[16px] p-[4px] flex justify-center items-center">
        <div className="bg-white rounded-[12px] w-full py-[8px] flex justify-center shadow-sm">
          <p className="font-bold text-[#1f2024] text-[12px]">
            今日までインタビューを <span className="text-[#006ffd]">{consecutiveDays}日</span> 連続継続中！
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-[100px] flex flex-col items-center gap-[32px] px-[24px]">
        {/* Placeholder Image */}
        <div className="bg-[#eaf2ff] rounded-[24px] size-[100px] flex items-center justify-center p-[40px]">
          <div className="relative size-[32px]">
            <svg className="block size-full" fill="none" viewBox="0 0 32 32">
               <mask height="28" id="mask0_image_placeholder" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="2">
                <g>
                  <path d={svgPaths.p2d3d2100} fill="#B4DBFF" />
                  <path clipRule="evenodd" d={svgPaths.p2c1eabb6} fill="#B4DBFF" fillRule="evenodd" />
                </g>
              </mask>
              <g mask="url(#mask0_image_placeholder)">
                <rect fill="#B4DBFF" height="32" width="32" />
              </g>
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="text-center flex flex-col gap-[8px]">
          <p className="font-extrabold text-[#1f2024] text-[18px]">今日の質問にまだ回答していません</p>
          <p className="text-[#71727a] text-[14px]">１問だけでも、今日について一緒に書いてみませんか</p>
        </div>

        {/* Button */}
        <button 
          onClick={onStart}
          className="bg-[#006ffd] rounded-[12px] h-[40px] px-[16px] flex items-center justify-center gap-[8px] cursor-pointer hover:bg-[#005ac8] transition-colors"
        >
          <span className="font-semibold text-[12px] text-white">今日の質問を始める</span>
        </button>
      </div>
    </div>
  );
}
