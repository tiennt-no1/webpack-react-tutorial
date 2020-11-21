// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugins-editor';
import createLinkPlugin from 'draft-js-anchor-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';

import { ItalicButton, BoldButton, UnderlineButton } from 'draft-js-buttons';
import React from 'react';

// const toolbarPlugin = createToolbarPlugin();

// Here's your chance to pass in a configuration object (see below).
// const linkPlugin = createLinkPlugin();

// Pass the `linkPlugin.LinkButton` into the structure of the inline toolbar.
// const inlineToolbarPlugin = createInlineToolbarPlugin({
//   structure: [
//     ItalicButton,
//     BoldButton,
//     UnderlineButton,
//     linkPlugin.LinkButton
//   ]
// });

// const { InlineToolbar } = inlineToolbarPlugin;
const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const plugins = [ staticToolbarPlugin];

const PluginEditor = ({ editorState, onChange }) => (
  <div>
    <Editor
      editorState={editorState}
      onChange={onChange}
      plugins={plugins}
    />
    <Toolbar />
  </div>
);

export default PluginEditor;