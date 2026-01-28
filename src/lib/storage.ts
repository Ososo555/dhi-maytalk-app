import { DiaryEntry } from './types';

const STORAGE_KEY = 'figma-make-diary-app-data';

export const saveEntry = (entry: DiaryEntry) => {
  const existing = getEntries();
  const filtered = existing.filter(e => e.date !== entry.date);
  const updated = [...filtered, entry];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const getEntries = (): DiaryEntry[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const getEntryByDate = (date: string): DiaryEntry | undefined => {
  const entries = getEntries();
  return entries.find(e => e.date === date);
};
