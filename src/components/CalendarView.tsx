import React, { useState } from 'react';
import { CalendarDetail } from './CalendarDetail';

interface CalendarViewProps {
  onSelectDay: (day: number) => void;
}

export function CalendarView({ onSelectDay }: CalendarViewProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['月', '火', '水', '木', '金', '土', '日'];
  const startOffset = 3;

  if (selectedDate) {
    return (
      <CalendarDetail 
        date={`2026年 1月 ${selectedDate}日`}
        onBack={() => setSelectedDate(null)}
      />
    );
  }

  return (
    <div className="relative size-full bg-white pt-[44px]">
      {/* Custom Header for Calendar */}
      <div className="absolute top-0 left-0 right-0 h-[44px] flex items-center justify-between px-[16px] bg-[#eaf2ff]">
         <div className="w-[20px]"></div>
         <div className="flex items-center gap-2 cursor-pointer">
            <span className="font-bold text-[#1f2024] text-[14px]">2026年 1月</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="#1f2024" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
         </div>
         <div className="text-[#006ffd]">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="7" stroke="#006FFD" strokeWidth="2"/><path d="M14 14L18 18" stroke="#006FFD" strokeWidth="2" strokeLinecap="round"/></svg>
         </div>
      </div>

      <div className="px-[16px] py-[24px] overflow-y-auto h-[calc(100%-44px)] pb-[100px]">
        <div className="grid grid-cols-7 mb-[16px]">
           {weekDays.map(d => (
             <div key={d} className="text-center text-[#8f9098] text-[12px]">{d}</div>
           ))}
        </div>

        <div className="grid grid-cols-7 gap-y-[16px] gap-x-[8px]">
          {Array.from({ length: startOffset }).map((_, i) => <div key={`empty-${i}`} />)}

          {days.map(day => (
            <div key={day} className="flex flex-col items-center gap-[4px]" onClick={() => setSelectedDate(day)}>
               <div className="size-[40px] rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 hover:bg-blue-50 cursor-pointer relative overflow-hidden transition-colors">
                 {day % 3 === 0 ? (
                   <div className="size-full bg-[#71727A] flex items-center justify-center text-white text-[12px]">😑</div>
                 ) : day % 3 === 1 ? (
                   <div className="size-full bg-[#FFD43B] flex items-center justify-center text-white text-[12px]">🙂</div>
                 ) : (
                   <div className="size-full bg-[#FF8787] flex items-center justify-center text-white text-[12px]">😄</div>
                 )}
               </div>
               <span className="text-[12px] font-bold text-[#1f2024]">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
