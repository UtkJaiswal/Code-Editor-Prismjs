import React, { useRef, useEffect } from 'react';
import Prism from 'prismjs';

const CodeEditor = ({ language, text, setText, handleInput, handleKeyDown }) => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.height = 'auto';
      divRef.current.style.height = `${divRef.current.scrollHeight}px`;
    }
    Prism.highlightAll();
  }, [text, language]);

  useEffect(() => {
    if (divRef.current) {
      const range = document.createRange();
      const selection = window.getSelection();
      const position = getCursorPosition(divRef.current);

      divRef.current.innerHTML = text.replace(/\n/g, '<br>');

      if (position) {
        setCursorPosition(divRef.current, position);
      }
    }
  }, [text, language]);

  const getCursorPosition = (element) => {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return null;

    const range = selection.getRangeAt(0);
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(element);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);

    return preSelectionRange.toString().length;
  };

  const setCursorPosition = (element, position) => {
    const range = document.createRange();
    const selection = window.getSelection();
    let currentNode = element;
    let currentPosition = 0;

    const nodeIterator = document.createNodeIterator(element, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = nodeIterator.nextNode())) {
      const nodeLength = node.nodeValue.length;
      if (currentPosition + nodeLength >= position) {
        range.setStart(node, position - currentPosition);
        break;
      } else {
        currentPosition += nodeLength;
      }
    }
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <div
      ref={divRef}
      contentEditable
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      className="textarea"
    />
  );
};

export default CodeEditor;