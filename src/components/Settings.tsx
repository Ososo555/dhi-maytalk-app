import React, { useState } from 'react';
import svgPaths from "../imports/svg-j1sot4zrgt";
import { Header } from './Header';
import { QuestionSelect } from './QuestionSelect';

interface SettingsProps {
  onUpdateDefaultCount: (count: 1 | 2 | 3) => void;
}

export function Settings({ onUpdateDefaultCount }: SettingsProps) {
  const [view, setView] = useState<'list' | 'question-count'>('list');

  const renderItem = (text: string, onClick?: () => void) => (
    <div 
      onClick={onClick}
      className="flex items-center justify-between p-[16px] cursor-pointer active:bg-gray-50"
    >
       <span className="text-[#1f2024] text-[14px]">{text}</span>
       <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
         <path clipRule="evenodd" d={svgPaths.p3443a800} fill="#006FFD" fillRule="evenodd" />
       </svg>
    </div>
  );

  if (view === 'question-count') {
    return (
      <QuestionSelect 
        mode="settings"
        onSelect={(count) => {
          onUpdateDefaultCount(count);
          setView('list');
        }}
        onBack={() => setView('list')}
      />
    );
  }

  return (
    <div className="relative size-full bg-white pt-[44px]">
      <Header title="設定" />

      {/* Profile Info */}
      <div className="flex flex-col items-center mt-[56px] mb-[40px]">
         <div className="relative size-[80px] mb-[16px]">
            <div className="size-full bg-[#eaf2ff] rounded-[32px] overflow-hidden">
               <svg className="block size-full" fill="none" viewBox="0 0 60 98">
                 <path d={svgPaths.pe79d900} fill="#B4DBFF" />
                 <circle cx="30" cy="16" fill="#B4DBFF" r="16" />
               </svg>
            </div>
            <div className="absolute bottom-0 right-0 bg-[#006ffd] rounded-full size-[24px] flex items-center justify-center border-[2px] border-white">
               <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                 <path d={svgPaths.p1bb76200} fill="white" />
               </svg>
            </div>
         </div>
         <p className="font-extrabold text-[#1f2024] text-[16px]">とーく めい</p>
         <p className="text-[#71727a] text-[12px]">@Maytalk22</p>
      </div>

      {/* List */}
      <div className="flex flex-col border-t border-[#D4D6DD]">
         {renderItem("アカウント情報")}
         <div className="h-[0.5px] bg-[#D4D6DD] w-full" />
         {renderItem("プライバシー・セキュリティ")}
         <div className="h-[0.5px] bg-[#D4D6DD] w-full" />
         {renderItem("アプリ設定")}
         <div className="h-[0.5px] bg-[#D4D6DD] w-full" />
         {renderItem("デフォルト質問数を変更", () => setView('question-count'))}
         <div className="h-[0.5px] bg-[#D4D6DD] w-full" />
      </div>
    </div>
  );
}
