// src/components/common/TextEditor.jsx

import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // SunEditor ke styles ko import karein

const TextEditor = ({ value, onChange }) => {
  return (
    <SunEditor
      setContents={value}
      onChange={onChange}
      setOptions={{
        height: 250,
        buttonList: [
          // Yeh toolbar ke saare options hain, aap inhein kam ya zyada kar sakte hain
          ['undo', 'redo'],
          ['font', 'fontSize', 'formatBlock'],
          ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
          ['fontColor', 'hiliteColor', 'textStyle'],
          ['removeFormat'],
          '/', // Toolbar mein line break
          ['outdent', 'indent'],
          ['align', 'horizontalRule', 'list', 'lineHeight'],
          ['table', 'link', 'image'],
          ['fullScreen', 'showBlocks', 'codeView'],
        ],
      }}
    />
  );
};

export default TextEditor;