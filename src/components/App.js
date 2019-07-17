import React from 'react';
// named import need braces as opposed to default imports
// when referencing index.js from a folder, you only need to state the folder, webpack will default to index.js automatically
import { selectSong } from '../actions';
import SongList from './SongList';

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};

export default App;
