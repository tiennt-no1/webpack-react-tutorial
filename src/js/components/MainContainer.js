import React from 'react';
import ReactDOM from 'react-dom';

class MainContainer extends React.Component {
  render() {
    return (
      <div> Main container will be updated</div>
    );
  }
}

ReactDOM.render(<MainContainer />, document.getElementById('main-container'));