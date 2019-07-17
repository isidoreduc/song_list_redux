import { combineReducers } from 'redux';

export const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Smells like teen spirits', duration: '4:35' },
    { title: 'Mirrors', duration: '3:25' },
    { title: 'Hello', duration: '6:23' }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
