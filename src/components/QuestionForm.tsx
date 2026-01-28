import React, { useState } from 'react';
import svgPaths from "../imports/svg-f2rq7vxjus";
import { Header } from './Header';
import { Mood } from '../lib/types';

interface QuestionFormProps {
  count: 1 | 2 | 3;
  onBack: () => void;
  onSubmit: (data: any) => void;
  onIncreaseCount?: () => void;
}

const QUESTIONS = [
  {
    id: 1,
    title1: "今日まじでこれ頑張って",
    title2: "偉いわーってこと教えて",
    placeholder1: "一言でズバッとまとめると？（必須）",
    placeholder2: "さらに理由など詳しく書くと素敵です（任意）"
  },
  {
    id: 2,
    title1: "明日を頑張るための",
    title2: "ご褒美を考えてみて！",
    placeholder1: "一言でズバッとまとめると？（必須）",
    placeholder2: "さらに理由など詳しく書くと素敵です（任意）"
  },
  {
    id: 3,
    title1: "今持ってる小さな悩みは？",
    title2: "", // Single line title
    placeholder1: "一言でズバッとまとめると？（必須）",
    placeholder2: "さらに理由など詳しく書くと素敵です（任意）"
  }
];

export function QuestionForm({ count, onBack, onSubmit, onIncreaseCount }: QuestionFormProps) {
  // State for answers
  const [answers, setAnswers] = useState<{ [key: number]: { summary: string, detail: string } }>({
    1: { summary: '', detail: '' },
    2: { summary: '', detail: '' },
    3: { summary: '', detail: '' }
  });
  const [mood, setMood] = useState<Mood>('neutral');

  const updateAnswer = (id: number, field: 'summary' | 'detail', value: string) => {
    setAnswers(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const renderQuestion = (qIndex: number) => {
    const q = QUESTIONS[qIndex];
    // 1-based index for display
    const displayNum = qIndex + 1; 
    const isSingleLineTitle = q.title2 === "";

    return (
      <div key={q.id} className="flex flex-col items-start w-full mb-[45px]">
        {/* Question Number Badge */}
        {count > 1 && (
          <div className="w-full flex justify-center mb-[8px]">
             <div className="flex justify-center items-center h-[35px]">
               <span className="font-bold text-[#1f2024] text-[14px]">{displayNum}問目</span>
             </div>
          </div>
        )}

        {/* Title */}
        <div className="w-full text-center font-extrabold text-[#1f2024] text-[18px] mb-[16px]">
          <p>{q.title1}</p>
          {!isSingleLineTitle && <p>{q.title2}</p>}
        </div>

        {/* Input 1: Summary */}
        <div className="w-full h-[48px] relative rounded-[12px] bg-white border border-[#c5c6cc] mb-[8px] flex items-center px-[16px]">
          <input 
            type="text"
            className="w-full h-full outline-none text-[14px] placeholder-[#8f9098]"
            placeholder={q.placeholder1}
            value={answers[q.id].summary}
            onChange={(e) => updateAnswer(q.id, 'summary', e.target.value)}
          />
        </div>

        {/* Input 2: Detail (TextArea) */}
        <div className="w-full h-[245px] relative rounded-[12px] bg-white border border-[#c5c6cc] p-[16px] flex items-start">
          <textarea 
            className="w-full h-full outline-none text-[14px] placeholder-[#8f9098] resize-none"
            placeholder={q.placeholder2}
            value={answers[q.id].detail}
            onChange={(e) => updateAnswer(q.id, 'detail', e.target.value)}
          />
        </div>
      </div>
    );
  };

  const moodIcons: { type: Mood, path: string }[] = [
    { type: 'worst', path: svgPaths.p1515a780 }, // PhSmileyXEyes
    { type: 'bad', path: svgPaths.p2c9c7480 },   // GgSmileSad (simplified path selection)
    { type: 'neutral', path: svgPaths.p2d536680 }, // OcticonSmileyNeutral
    { type: 'good', path: svgPaths.p25de5280 }, // UilSmile
    { type: 'best', path: svgPaths.p21114000 }  // GgSmileMouthOpen
  ];

  return (
    <div className="relative size-full bg-white flex flex-col">
      <Header 
        title={`今日の質問 ${count}問挑戦！`} 
        showBack 
        onBack={onBack} 
      />
      
      <div className="flex-1 overflow-y-auto pt-[24px] px-[24px] pb-[100px] mt-[44px]">
        {Array.from({ length: count }).map((_, idx) => renderQuestion(idx))}

        {/* Up-sell link (only if count < 3) */}
        {count < 3 && onIncreaseCount && (
           <button onClick={onIncreaseCount} className="w-full text-center mb-[40px] cursor-pointer">
             <span className="text-[12px] font-bold text-[#494a50]">
               もし「今日はもっと答えれる」なら
               <span className="text-[#2897ff]"> ここ</span>
               をタップ！
             </span>
           </button>
        )}

        {/* Mood Selector */}
        <div className="flex flex-col items-center gap-[20px] w-full mb-[40px]">
           <p className="text-[14px] text-[#71727a]">今の貴方の心はどんな顔？</p>
           <div className="flex gap-[16px] justify-center w-full">
             {moodIcons.map((m) => (
               <button 
                 key={m.type}
                 onClick={() => setMood(m.type)}
                 className={`size-[32px] rounded-full flex items-center justify-center transition-transform ${mood === m.type ? 'scale-125 bg-gray-100' : ''}`}
               >
                 <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                    <path d={m.path} fill={mood === m.type ? "#006ffd" : "#71727A"} />
                 </svg>
               </button>
             ))}
           </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-0 left-0 right-0 p-[24px] bg-gradient-to-t from-white to-transparent">
        <button 
          onClick={() => onSubmit({ answers, mood })}
          className="w-full h-[48px] bg-[#006ffd] rounded-[12px] text-white font-bold text-[12px] flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        >
          これでOK！
        </button>
      </div>
    </div>
  );
}
