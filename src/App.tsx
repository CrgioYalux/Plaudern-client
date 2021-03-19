import React from 'react';
import { useSocket } from './hooks/useSocket';

import './App.css';

const App: React.FC = () => {
  const newSocket = useSocket('localhost:4000');
  return (
    <div className="App">
    </div>
  );
}

export default App;
