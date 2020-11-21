import React from 'react';
import ReactDOM from 'react-dom';
import {EditorState} from 'draft-js';
import PluginEditor from './PluginEditor'

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = editorState => this.setState({editorState});
  }

  render() {
    return (
      <PluginEditor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

ReactDOM.render(<MyEditor />, document.getElementById('container'));