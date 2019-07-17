import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    console.log(this.props);
    return <div>list</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

//function within a function
export default connect(mapStateToProps)(SongList);
