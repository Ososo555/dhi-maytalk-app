import React, { useState } from 'react';
import { TabBar } from './components/TabBar';
import { BeforeAnswer } from './components/BeforeAnswer';
import { AfterAnswer } from './components/AfterAnswer';
import { QuestionForm } from './components/QuestionForm';
import { CalendarView } from './components/CalendarView';
import { Settings } from './components/Settings';
import { Screen, DiaryEntry, Mood } from './lib/types';
import { saveEntry } from './lib/storage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  
  // App Config State
  const [defaultQuestionCount, setDefaultQuestionCount] = useState<1 | 2 | 3>(1);

  // Home Flow State
  const [questionState, setQuestionState] = useState<'initial' | 'answering' | 'completed'>('initial');
  // For the current session, we track how many questions the user is answering.
  // We initialize this when they click Start.
  const [sessionCount, setSessionCount] = useState<1 | 2 | 3>(1);
  const [currentEntry, setCurrentEntry] = useState<DiaryEntry | null>(null);

  // Mock consecutive days
  const consecutiveDays = 3;

  const handleStart = () => {
    // Skip selection screen, go straight to answering with default count
    setSessionCount(defaultQuestionCount);
    setQuestionState('answering');
  };

  const handleSubmit = (data: { answers: any, mood: Mood }) => {
    const entry: DiaryEntry = {
      id: new Date().toISOString(),
      date: '2026年 1月 28日 (水)', // Hardcoded for demo matching context
      questionCount: sessionCount,
      answers: Object.entries(data.answers).map(([key, val]: [string, any]) => ({
        questionId: Number(key),
        title: "質問タイトル", // Ideally fetch from QUESTIONS array
        summary: val.summary,
        detail: val.detail
      })),
      mood: data.mood
    };
    
    // Update titles for display
    const titles = [
       "今日まじでこれ頑張って偉いわーってこと教えて",
       "明日を頑張るためのご褒美を考えてみて！",
       "今持ってる小さな悩みは？"
    ];
    entry.answers.forEach((a, i) => {
        if (i < titles.length) a.title = titles[i];
    });

    saveEntry(entry);
    setCurrentEntry(entry);
    setQuestionState('completed');
  };

  const handleEdit = () => {
    setQuestionState('answering');
  };

  // Render logic
  const renderHomeContent = () => {
    switch (questionState) {
      case 'initial':
        return <BeforeAnswer onStart={handleStart} consecutiveDays={consecutiveDays} />;
      case 'answering':
        return (
          <QuestionForm 
            count={sessionCount} 
            onBack={() => setQuestionState('initial')}
            onSubmit={handleSubmit}
            onIncreaseCount={() => setSessionCount(prev => Math.min(prev + 1, 3) as 1|2|3)}
          />
        );
      case 'completed':
        return currentEntry ? <AfterAnswer entry={currentEntry} onEdit={handleEdit} /> : null;
    }
  };

  const isTabBarVisible = currentScreen !== 'home' || (questionState === 'initial' || questionState === 'completed');

  return (
    <div className="relative w-full h-screen bg-gray-50 flex justify-center overflow-hidden">
       {/* Mobile Container */}
       <div className="w-full max-w-[400px] h-full bg-white relative shadow-2xl flex flex-col">
          
          {/* Main Screen Content */}
          <div className="flex-1 relative overflow-hidden">
            {currentScreen === 'home' && renderHomeContent()}
            {currentScreen === 'dialog' && <CalendarView onSelectDay={(d) => console.log(d)} />}
            {currentScreen === 'settings' && (
              <Settings onUpdateDefaultCount={setDefaultQuestionCount} />
            )}
          </div>

          {/* Tab Bar */}
          {isTabBarVisible && (
            <div className="shrink-0 z-50">
               <TabBar currentScreen={currentScreen} onNavigate={setCurrentScreen} />
            </div>
          )}
       </div>
    </div>
  );
}
