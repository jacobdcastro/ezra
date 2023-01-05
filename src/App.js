import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [randomColor, setRandomColor] = useState('');

  const genRanCol = () => Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    setRandomColor(genRanCol());

    // listen for keypresses
    document.addEventListener('keypress', e => {
      setRandomColor(genRanCol());
    });

    return () => {
      // cleanup
      document.removeEventListener('keypress', e => {
        setRandomColor(genRanCol());
      });
    };
  }, []);

  return (
    <div className='App'>
      <header
        className='App-header'
        style={{ backgroundColor: `#${randomColor}` }}
      >
        <p>Ezra Lee Castro</p>
      </header>
    </div>
  );
}

export default App;
