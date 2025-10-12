
import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; 

const TextEditor = ({ value, onChange }) => {
  return (
    <SunEditor
      setContents={value}
      onChange={onChange}
      setOptions={{
        height: 250,
        buttonList: [
          ['undo', 'redo'],
          ['font', 'fontSize', 'formatBlock'],
          ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
          ['fontColor', 'hiliteColor', 'textStyle'],
          ['removeFormat'],
          '/', 
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