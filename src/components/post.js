import React from 'react'

import Comment from './comment';

let e= React.createElement;

export default class post extends React.Component {
  render() {
    return (
      <div className="card w-75">
        <div className="card-header bg-primary text-white">
          Username and Time
        </div>
        <div className="card-body">
          This is where our content goes
        </div>
        <div className="card-footer">
          <LikeButton/>
          <ReplyButton/>
          <Comment x="Jello this is my post"/>
        </div>
      </div>
    
    );
  }
}
