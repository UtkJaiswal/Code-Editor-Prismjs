import React, { useState } from 'react';
import './App.css';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import CodeEditor from './components/CodeEditor';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [language, setLanguage] = useState('python');
  const [text, setText] = useState('');

  const handleDropdownChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleInput = (e) => {
    const text2 = e.target.innerText;
    if (!Prism.languages[language]) {
      throw new Error(`Language '${language}' not supported by Prism.js.`);
    }
    const html = Prism.highlight(text2, Prism.languages[language], language);
    setText(html);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const br = document.createElement('br');
      range.insertNode(br);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  return (
    <div className="App container">
      <h1>Code-Editor</h1>
      <h2>Submitted by: Utkarsh Jaiswal (<a href="https://github.com/UtkJaiswal/" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://www.linkedin.com/in/utkarsh-jaiswal-834061193/" target="_blank" rel="noopener noreferrer">LinkedIn</a>)</h2>
      <LanguageSelector language={language} handleDropdownChange={handleDropdownChange} />
      <CodeEditor
        language={language}
        text={text}
        setText={setText}
        handleInput={handleInput}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default App;
