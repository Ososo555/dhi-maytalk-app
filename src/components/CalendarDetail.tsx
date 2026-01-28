import React from 'react';
import svgPaths from "../imports/svg-l5u3zthrb2"; // From detail view import
import { Header } from './Header';

interface CalendarDetailProps {
  date: string;
  onBack: () => void;
}

export function CalendarDetail({ date, onBack }: CalendarDetailProps) {
  // Mock data matching the design
  const data = {
    mood: 'neutral',
    questions: [
      {
        q: "今日一番美味しかったものは？",
        a: "チゲうどん",
        d: "安売りしてて大量買いしたチゲうどんを早速昼ご飯に食べた。安くて美味しいが正義だよね。ただあの量はいずれ飽きかねないから、アレンジを考えた方が良いと思った。"
      },
      {
        q: "今日の部屋の散らかり度を1〜10で表してみて",
        a: "7",
        d: "取り敢えずパソコンを出して作業ができる空間だけはある。それ以外が壊滅的なので、この作業が終わったらまずは部屋の片づけをしたいと思う。"
      }
    ]
  };

  return (
    <div className="relative size-full bg-white flex flex-col pt-[44px]">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Header title="" showBack onBack={onBack} />
      </div>

      <div className="flex-1 overflow-y-auto px-[24px] pt-[20px] pb-[100px]">
         {/* Top Card */}
         <div className="bg-[#f8f9fe] rounded-[16px] p-[24px] flex flex-col gap-[24px]">
            {/* Date Header */}
            <div className="flex items-center gap-[16px] border-b border-[#D4D6DD] pb-[16px]">
               <div className="size-[40px] rounded-full bg-[#71727A] flex items-center justify-center">
                  <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                    {/* Placeholder face */}
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                  </svg>
               </div>
               <div className="font-bold text-[#1f2024] text-[14px]">
                 {date} (水)　2問
               </div>
            </div>

            {/* Questions */}
            <div className="flex flex-col gap-[32px]">
               {data.questions.map((item, i) => (
                 <div key={i} className="flex flex-col gap-[8px]">
                    <p className="font-extrabold text-[#1f2024] text-[16px]">Q{i+1}. {item.q}</p>
                    <p className="text-[#1f2024] text-[14px]">{item.a}</p>
                    <p className="text-[#71727a] text-[12px] leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
