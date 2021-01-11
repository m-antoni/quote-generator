import React from 'react';
import Main from './components/Main';

const App: React.FC = () => {

  const colors: string[] = ['#fca311', '#81b29a', '#4a4e69', '#00509d', '#e5383b', '#463f3a','#ff97b7','#0d1b2a', '#049a8f', '#ff8c61'];

  const default_quote = {
      text: 'You do not rise to the level of your goals. You fall to the level of your systems.',
      author: 'James Clear',
  } 

  return (
    <Main colors={colors} default_quote={default_quote} />
  );
}

export default App;
