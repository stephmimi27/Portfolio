import { useState } from 'react';
import Header from './components/Header.jsx';
import BookJournal from './components/BookJournal.jsx';
import PlainPortfolio from './components/PlainPortfolio.jsx';
import { useJournal } from './hooks/useJournal.js';

export default function App() {
  const [mode, setMode] = useState('plain');
  const journal = useJournal();

  return (
    <div className={mode === 'plain' ? 'desk plain' : 'desk'}>
      <Header mode={mode} onModeChange={setMode} spread={journal.spread} />
      {mode === 'book' ? <BookJournal journal={journal} /> : <PlainPortfolio />}
    </div>
  );
}
