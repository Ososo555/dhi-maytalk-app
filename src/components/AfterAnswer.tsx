import React from 'react';
import svgPaths from "../imports/svg-zj3eg7a28d";
import { Header } from './Header';
import { DiaryEntry } from '../lib/types';

interface AfterAnswerProps {
  entry: DiaryEntry;
  onEdit: () => void;
}

export function AfterAnswer({ entry, onEdit }: AfterAnswerProps) {
  const { questionCount, answers, mood } = entry;
  
  // Helper to get mood icon - simplified mapping for display
  // We can reuse the path logic or import if we had a shared icon component.
  // For now I'll use a generic placeholder or try to match the "completed" mood icon from the design.
  
  return (
    <div className="relative size-full bg-white flex flex-col overflow-y-auto pb-[100px]">
       {/* Badge */}
       <div className="mt-[66px] mx-[16px]">
         <div className="bg-white rounded-[12px] py-[8px] text-center shadow-sm border border-gray-100">
            <p className="font-bold text-[#1f2024] text-[12px]">今日の質問に回答が完了しました！素晴らしい！</p>
         </div>
       </div>

       <div className="flex flex-col items-center mt-[32px] px-[24px]">
          {/* Image Placeholder */}
          <div className="bg-[#eaf2ff] rounded-[24px] size-[100px] flex items-center justify-center p-[40px] mb-[16px]">
             <svg className="size-[32px]" viewBox="0 0 32 32" fill="none">
               <path d={svgPaths.p2d3d2100} fill="#B4DBFF" />
             </svg>
          </div>

          <h2 className="font-extrabold text-[18px] text-[#1f2024] mb-[8px]">今日の回答数：{questionCount}問</h2>
          <p className="text-[#71727a] text-[14px] mb-[24px]">今日もまた一つ、「良い日にする」ができましたね。</p>
          
          <button 
            onClick={onEdit}
            className="bg-[#006ffd] rounded-[12px] h-[40px] px-[16px] text-white font-bold text-[12px] w-[140px] mb-[40px]"
          >
            回答を訂正する
          </button>

          {/* Answer Card */}
          <div className="w-full bg-[#f8f9fe] rounded-[16px] p-[16px]">
             {/* Header with Date and Mood */}
             <div className="flex items-center gap-[12px] mb-[16px] border-b border-[#d4d6dd] pb-[16px]">
                <div className="size-[40px] bg-[#71727A] rounded-full flex items-center justify-center">
                   {/* Simplified mood face */}
                   <div className="bg-white size-[24px] rounded-full opacity-50"></div>
                </div>
                <p className="font-bold text-[#1f2024] text-[14px]">{entry.date}</p>
             </div>

             {/* Questions List */}
             <div className="flex flex-col gap-[24px]">
               {answers.map((ans, idx) => (
                 <div key={idx}>
                    <p className="font-extrabold text-[#1f2024] text-[16px] mb-[4px]">Q{idx+1}. {ans.title}</p>
                    <p className="font-regular text-[#1f2024] text-[16px] mb-[8px]">{ans.summary}</p>
                    <p className="text-[#71727a] text-[12px] leading-[1.6]">{ans.detail}</p>
                 </div>
               ))}
             </div>
          </div>
       </div>
    </div>
  );
}
