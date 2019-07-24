import React from 'react';
// named import need braces as opposed to default imports
// when referencing index.js from a folder, you only need to state the folder, webpack will default to index.js automatically

import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className='ui container grid' style={{ marginTop: '20px' }}>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
        <div className='column eight wide'>
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
