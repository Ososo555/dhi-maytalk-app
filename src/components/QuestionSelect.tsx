import React from 'react';
import svgPaths from "../imports/svg-2rvlrmqc1w";
import { Header } from './Header';

interface QuestionSelectProps {
  onSelect: (count: 1 | 2 | 3) => void;
  onBack: () => void;
  mode?: 'daily' | 'settings'; // Add mode prop
}

export function QuestionSelect({ onSelect, onBack, mode = 'daily' }: QuestionSelectProps) {
  const renderStar = () => (
    <div className="relative size-[10px] shrink-0">
      <svg className="block size-full" fill="none" viewBox="0 0 10 10">
        <path d={svgPaths.p51ba440} fill="#006FFD" />
      </svg>
    </div>
  );

  return (
    <div className="relative size-full bg-white flex flex-col pt-[100px] px-[24px]">
      <button onClick={onBack} className="absolute top-[73px] left-[22px] flex items-center gap-2 text-[#71727a] text-[14px]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path clipRule="evenodd" d={svgPaths.p16eaa040} fill="#006FFD" fillRule="evenodd" />
        </svg>
        <span>{mode === 'daily' ? '2026年 1月 28日 のインタビュー' : '設定に戻る'}</span>
      </button>

      <div className="text-center mt-[16px] mb-[32px]">
        <h1 className="font-extrabold text-[24px] text-[#1f2024] mb-[16px]">
          {mode === 'daily' ? '今日は何問答えれますか？' : 'デフォルトの質問数'}
        </h1>
        <p className="text-[#71727a] text-[14px]">
          {mode === 'daily' ? '今日は一つだけ、でも大丈夫。' : '毎日の基本の質問数を設定します。'}
        </p>
      </div>

      <div className="flex flex-col gap-[12px]">
        {/* Option 1 */}
        <button 
          onClick={() => onSelect(1)}
          className="bg-[#eaf2ff] rounded-[16px] p-[16px] w-full text-left relative overflow-hidden transition-transform active:scale-[0.98]"
        >
          <div className="flex justify-between items-center">
             <div>
                <p className="font-bold text-[#1f2024] text-[14px]">１問</p>
                <p className="text-[#006ffd] text-[10px] tracking-[0.15px]">手軽に今日を「ちょっと」良い日に</p>
             </div>
             {/* Recommended Badge (simplified) */}
             <div className="bg-[#006ffd] rounded-full size-[24px] flex items-center justify-center">
               <svg width="10" height="10" viewBox="0 0 10 10">
                 <path d={svgPaths.p51ba440} fill="white" />
               </svg>
             </div>
          </div>
        </button>

        {/* Option 2 */}
        <button 
          onClick={() => onSelect(2)}
          className="bg-white border-[0.5px] border-[#d4d6dd] rounded-[16px] p-[16px] w-full text-left transition-transform active:scale-[0.98]"
        >
          <p className="font-bold text-[#1f2024] text-[14px]">２問</p>
          <p className="text-[#006ffd] text-[10px] tracking-[0.15px]">明日のことも「もう少し」考えてみる</p>
        </button>

        {/* Option 3 */}
        <button 
          onClick={() => onSelect(3)}
          className="bg-white border-[0.5px] border-[#d4d6dd] rounded-[16px] p-[16px] w-full text-left transition-transform active:scale-[0.98]"
        >
          <p className="font-bold text-[#1f2024] text-[14px]">３問</p>
          <p className="text-[#006ffd] text-[10px] tracking-[0.15px]">自分のことを「さらに」知ってみる</p>
        </button>
      </div>

      {/* Benefits */}
      <div className="mt-[32px] bg-[#f8f9fe] rounded-[16px] p-[24px] flex flex-col gap-[16px]">
        <p className="font-extrabold text-[#71727a] text-[16px]">Q. 本当に１問「だけ」でいいの？</p>
        <div className="flex gap-[12px] items-center">
          {renderStar()}
          <p className="text-[#71727a] text-[12px]">質より継続が何より大切。</p>
        </div>
        <div className="flex gap-[12px] items-center">
          {renderStar()}
          <p className="text-[#71727a] text-[12px]">毎日歩き続けることが、貴方を知る旅のコツ。</p>
        </div>
        <div className="flex gap-[12px] items-center">
          {renderStar()}
          <p className="text-[#71727a] text-[12px]">忙しい貴方だからこそ、サクッとやっちゃおう。</p>
        </div>
      </div>
    </div>
  );
}
